/**
 * app.js — メインアプリロジック
 */

// ── 音声管理 ─────────────────────────────────
const SoundManager = {
  enabled: localStorage.getItem('soundEnabled') !== 'false',

  speak(word) {
    if (!this.enabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  },

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('soundEnabled', this.enabled);
    _updateSoundButtons();
    return this.enabled;
  },
};

function _updateSoundButtons() {
  const icon = SoundManager.enabled ? '🔊' : '🔇';
  ['btn-sound-toggle', 'btn-sound-toggle-home'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.textContent = icon;
      btn.classList.toggle('sound-off', !SoundManager.enabled);
    }
  });
}

(async function(){
  // ── DB 初期化 ────────────────────────────────
  await Storage.init();
  const profile = await Storage.updateStreak();

  // ── 画面管理 ─────────────────────────────────
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
  }

  // スプラッシュ → ホーム
  setTimeout(() => {
    showScreen("screen-home");
    initHome();
    _updateSoundButtons();
    document.getElementById('btn-sound-toggle-home').onclick = () => SoundManager.toggle();
    document.getElementById('btn-sound-toggle').onclick      = () => SoundManager.toggle();
  }, 1600);

  // ── 状態 ─────────────────────────────────────
  let selectedLevel  = profile.selectedLevel || 0;
  let selectedMode   = "prefix";
  let selectedAffix  = null;   // { mode, key, label }
  const $ = id => document.getElementById(id);

  // ── ホーム画面 ────────────────────────────────
  async function initHome() {
    const p = await Storage.getProfile();

    // レベル・XP
    const lvInfo = WordData.calcUserLevel(p.totalXp);
    $("home-level-badge").textContent = `Lv.${lvInfo.level}`;
    $("home-user-title").textContent  = WordData.getLevelTitle(lvInfo.level);
    const pct = Math.min((lvInfo.currentXp / lvInfo.nextXp) * 100, 100);
    $("home-xp-fill").style.width = pct + "%";

    // 統計
    $("home-streak").textContent = p.currentStreak || 0;
    $("home-total-correct").textContent = (p.totalCorrect || 0).toLocaleString();
    const acc = p.totalAnswered > 0
      ? Math.round((p.totalCorrect / p.totalAnswered) * 100) : 0;
    $("home-accuracy").textContent = acc + "%";
    $("home-total-xp").textContent = (p.totalXp || 0).toLocaleString();

    // 難易度ボタン
    document.querySelectorAll(".difficulty-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.level === ["beginner","intermediate","advanced","master"][selectedLevel]);
      btn.onclick = () => {
        selectedLevel = ["beginner","intermediate","advanced","master"].indexOf(btn.dataset.level);
        document.querySelectorAll(".difficulty-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderAffixGrid();
      };
    });

    // モードタブ
    document.querySelectorAll(".mode-tab").forEach(tab => {
      tab.onclick = () => {
        selectedMode = tab.dataset.mode;
        document.querySelectorAll(".mode-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        $("prefix-grid").classList.toggle("hidden", selectedMode !== "prefix");
        $("suffix-grid").classList.toggle("hidden", selectedMode !== "suffix");
        $("weak-section").classList.toggle("hidden", selectedMode !== "weak");
        selectedAffix = null;
        renderAffixGrid();
        if (selectedMode === "weak") renderWeakSection();
      };
    });

    renderAffixGrid();
    await renderDailyChallenge();
  }

  // 語根グリッド描画
  async function renderAffixGrid() {
    const allStats = await Storage.getAllAffixStats();
    const statsMap  = {};
    allStats.forEach(s => { statsMap[`${s.mode}:${s.affixKey}`] = s; });

    function renderGrid(containerId, items, mode) {
      const container = $(containerId);
      container.innerHTML = "";
      items.forEach(item => {
        const stat   = statsMap[`${mode}:${item.key}`];
        const count  = mode === "prefix"
          ? WordData.getPrefixWordCount(item.key, selectedLevel)
          : WordData.getSuffixWordCount(item.key, selectedLevel);
        if (count === 0) return;

        const btn = document.createElement("button");
        btn.className = "affix-btn";
        if (selectedAffix && selectedAffix.key === item.key && selectedAffix.mode === mode) {
          btn.classList.add("selected");
        }

        let accHTML = "";
        if (stat && stat.total >= 3) {
          const pct = Math.round((stat.correct / stat.total) * 100);
          const cls = pct >= 80 ? "" : pct >= 60 ? "mid" : "low";
          accHTML = `<span class="affix-accuracy ${cls}">${pct}%</span>`;
        }

        btn.innerHTML = `
          ${accHTML}
          <span class="affix-name">${item.label}</span>
          <span class="affix-count">${count}語</span>
        `;
        btn.onclick = () => {
          selectedAffix = { mode, key: item.key, label: item.label };
          // すべてのボタンのselectedを外す
          document.querySelectorAll(".affix-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          showStartArea(item);
        };
        container.appendChild(btn);
      });
    }

    renderGrid("prefix-grid", WordData.PREFIXES, "prefix");
    renderGrid("suffix-grid", WordData.SUFFIXES, "suffix");

    // スタートエリアを更新
    const existing = document.querySelector(".affix-start-area");
    if (existing) existing.remove();
  }

  function showStartArea(item) {
    const existing = document.querySelector(".affix-start-area");
    if (existing) existing.remove();

    const area = document.createElement("div");
    area.className = "affix-start-area";
    area.innerHTML = `
      <p class="selected-info">「<strong>${item.label}</strong>」を選択中 (${
        selectedMode === "prefix"
          ? WordData.getPrefixWordCount(item.key, selectedLevel)
          : WordData.getSuffixWordCount(item.key, selectedLevel)
      }語)</p>
      <button class="btn-primary" id="btn-start-quiz">
        🚀 クイズを始める！
      </button>
    `;

    const section = document.querySelector(".section:nth-child(2)");
    section.appendChild(area);

    $("btn-start-quiz").onclick = () => startQuiz(selectedMode, item.key, item.label);
  }

  async function renderWeakSection() {
    const weakList = await Storage.getWeakAffixes(
      selectedMode === "weak" ? "prefix" : selectedMode, 5
    );
    const infoEl = $("weak-info-text");
    const startBtn = $("btn-start-weak");
    if (weakList.length === 0) {
      infoEl.textContent = "まだデータがありません。クイズをやって実力を測ろう！";
      startBtn.disabled = true;
    } else {
      infoEl.innerHTML = weakList.map(s => {
        const pct = Math.round((s.correct / s.total) * 100);
        return `<strong>${s.affixKey}</strong>: ${pct}% (${s.total}問)`;
      }).join(" / ");
      startBtn.disabled = false;
      startBtn.onclick = () => {
        const worst = weakList[0];
        startQuiz(worst.mode, worst.affixKey, worst.affixKey);
      };
    }
  }

  async function renderDailyChallenge() {
    const status = await Storage.getDailyChallengeStatus();
    const descEl = $("dc-desc");
    const statusEl = $("dc-status");
    const btn = $("btn-daily-challenge");

    if (status.completed) {
      statusEl.textContent = "✅ 完了！";
      statusEl.classList.add("completed");
      descEl.textContent = "今日のチャレンジ達成！また明日来てね 🎉";
      btn.textContent = "✅ クリア済み";
      btn.disabled = true;
    } else {
      statusEl.textContent = "未完了";
      descEl.textContent = "今日も学習してストリークを伸ばそう！";
      btn.onclick = () => {
        // 今日のおすすめ接頭語をランダムに選ぶ
        const today = new Date();
        const idx   = today.getDate() % WordData.PREFIXES.length;
        const p     = WordData.PREFIXES[idx];
        startQuiz("prefix", p.key, p.label, true);
      };
    }
  }

  // ── クイズ起動 ────────────────────────────────
  function startQuiz(mode, affixKey, label, isDaily = false) {
    const result = Quiz.start(mode, affixKey, selectedLevel);
    if (result.error) {
      alert(result.error);
      return;
    }
    _isDaily = isDaily;
    showScreen("screen-quiz");
    $("quiz-mode-label").textContent = label;
    renderQuestion();
  }

  let _isDaily = false;

  // ── クイズ画面 ────────────────────────────────
  function renderQuestion() {
    const q = Quiz.getCurrentQuestion();
    if (!q) return;

    // ヘッダー
    $("quiz-current").textContent = q.index + 1;
    $("quiz-total").textContent   = q.total;
    const pct = ((q.index) / q.total) * 100;
    $("quiz-progress-fill").style.width = pct + "%";

    // スコア
    $("quiz-score").textContent = q.xpGained;

    // コンボ
    const comboEl = $("combo-display");
    $("combo-count").textContent = q.combo;
    comboEl.classList.toggle("active", q.combo >= 2);

    // ライフ
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((h, i) => h.classList.toggle("lost", i >= q.lives));

    // 問題カード
    $("question-number").textContent = `問題 ${q.index + 1}`;
    $("question-word").textContent   = q.word.word;

    // 語源分解
    if (q.word.prefix) {
      $("etymology-prefix-tag").textContent = q.word.prefix;
      $("etymology-prefix-tag").style.display = "";
      document.querySelector(".etymology-separator").style.display = "";
      const root = q.word.word.replace(q.word.prefix.replace("-",""), "");
      $("etymology-root").textContent = root || q.word.word;
    } else if (q.word.suffix) {
      $("etymology-prefix-tag").textContent = q.word.word.replace(q.word.suffix.replace("-",""),"") || q.word.word;
      $("etymology-prefix-tag").style.display = "";
      document.querySelector(".etymology-separator").style.display = "";
      $("etymology-root").textContent = q.word.suffix;
    } else {
      $("etymology-prefix-tag").style.display = "none";
      document.querySelector(".etymology-separator").style.display = "none";
      $("etymology-root").textContent = q.word.word;
    }

    // ヒントボタン初期化
    const hintDisplay = $("hint-display");
    const hintBtn     = $("btn-hint");
    hintDisplay.classList.remove("show");
    hintDisplay.innerHTML = `💡 ${q.word.etymology}`;
    hintBtn.disabled = false;
    hintBtn.onclick = () => {
      Quiz.useHint();
      hintDisplay.classList.add("show");
      hintBtn.disabled = true;
    };

    // 選択肢
    const choiceBtns = document.querySelectorAll(".choice-btn");
    choiceBtns.forEach((btn, i) => {
      btn.textContent = q.choices[i];
      btn.className   = "choice-btn";
      btn.disabled    = false;
      btn.onclick     = () => handleAnswer(i);
    });

    // 解説パネル非表示
    const panel = $("explanation-panel");
    panel.classList.remove("show", "wrong-panel");
    panel.style.display = "none";

    // 問題カードアニメーション再発火
    const card = $("question-card");
    card.style.animation = "none";
    card.offsetHeight;
    card.style.animation = "";

    // 単語クリック / ボタンで発音
    const speakWord = () => SoundManager.speak(q.word.word);
    $("question-word").onclick   = speakWord;
    $("btn-speak-word").onclick  = speakWord;

    // 自動発音（音声ONの場合）
    setTimeout(() => SoundManager.speak(q.word.word), 400);
  }

  function handleAnswer(choiceIndex) {
    const res = Quiz.answer(choiceIndex);
    if (!res) return;

    const choiceBtns = document.querySelectorAll(".choice-btn");
    // 正解・不正解ハイライト
    choiceBtns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === res.correctIndex) btn.classList.add("correct");
      else if (i === choiceIndex && !res.isCorrect) btn.classList.add("wrong");
    });

    if (res.isCorrect) {
      showCorrectEffect(res.xp);
      if (res.combo >= 3) showComboEffect(res.combo);
    }

    // 正解表示時に発音（500ms後、エフェクトと重ならないよう遅延）
    setTimeout(() => SoundManager.speak(res.explanation.word), 500);

    // 解説
    const panel = $("explanation-panel");
    $("explanation-icon").textContent = res.isCorrect ? "✅" : "❌";
    $("explanation-text").textContent = res.isCorrect
      ? `正解！「${res.explanation.meaning}」`
      : `不正解…正解は「${res.explanation.meaning}」`;
    $("explanation-breakdown").innerHTML =
      `<strong>語源:</strong> ${res.explanation.etymology}`;
    panel.classList.add("show");
    if (!res.isCorrect) panel.classList.add("wrong-panel");
    panel.style.display = "block";

    $("quiz-score").textContent = Quiz.getCurrentQuestion()?.xpGained || 0;
    $("combo-count").textContent = res.combo;
    $("combo-display").classList.toggle("active", res.combo >= 2);

    // ライフ更新
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((h, i) => h.classList.toggle("lost", i >= res.lives));

    // ゲームオーバー確認
    if (res.finished) {
      $("btn-next").textContent = "結果を見る →";
    }
  }

  $("btn-next").onclick = () => {
    const { done } = Quiz.next();
    if (done) {
      showResult();
    } else {
      renderQuestion();
    }
  };

  $("quiz-back-btn").onclick = () => {
    if (confirm("クイズを中断しますか？")) {
      Quiz.reset();
      showScreen("screen-home");
    }
  };

  // ── 正解エフェクト ────────────────────────────
  function showCorrectEffect(xp) {
    const el = $("correct-effect");
    $("xp-gained-text").textContent = `+${xp} XP`;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 900);
  }

  function showComboEffect(combo) {
    const el    = $("combo-effect");
    const msgs  = ["","","","3連続！🔥","4連続！🔥","5連続！⚡","6連続！⚡",
                   "7連続！💥","8連続！💥","9連続！✨","10連続！🌟"];
    const label = combo < msgs.length ? msgs[combo] : `${combo}連続！👑`;
    $("combo-effect-text").textContent = label;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 1100);
  }

  // ── 結果画面 ──────────────────────────────────
  async function showResult() {
    const res = Quiz.getResult();
    if (!res) return;

    if (_isDaily) await Storage.completeDailyChallenge();

    // DB保存・XP加算
    const prevProfile = await Storage.getProfile();
    const prevLvInfo  = WordData.calcUserLevel(prevProfile.totalXp);
    const updatedP    = await Storage.saveQuizResult(res);
    const newLvInfo   = WordData.calcUserLevel(updatedP.totalXp);

    // バッジチェック
    await Storage.checkAndAwardBadges(updatedP);

    showScreen("screen-result");

    // 絵文字・タイトル
    let emoji = "😊", title = "クイズ完了！";
    if (res.accuracy >= 90) { emoji = "🎉"; title = "素晴らしい！"; }
    else if (res.accuracy >= 70) { emoji = "😄"; title = "よくできました！"; }
    else if (res.accuracy >= 50) { emoji = "🙂"; title = "まずまず！"; }
    else { emoji = "😅"; title = "もう一度チャレンジ！"; }
    $("result-emoji").textContent = emoji;
    $("result-title").textContent = title;

    // スコア
    $("result-correct").textContent = res.correct;
    $("result-total").textContent   = res.answered;
    $("result-accuracy").textContent = `正答率 ${res.accuracy}%`;

    // 統計
    $("result-xp").textContent       = `+${res.xpGained} XP`;
    $("result-max-combo").textContent = res.maxCombo;
    $("result-time").textContent      = res.timeStr;

    // レベルアップ
    const luBanner = $("level-up-banner");
    if (newLvInfo.level > prevLvInfo.level) {
      $("lu-new-level").textContent = `Lv.${newLvInfo.level}`;
      luBanner.classList.add("show");
      showLevelUpModal(newLvInfo.level);
    } else {
      luBanner.classList.remove("show");
    }

    // 間違えた問題
    const wrongSection = $("wrong-answers-section");
    const wrongList    = $("wrong-list");
    if (res.wrong.length > 0) {
      wrongList.innerHTML = res.wrong.map(w => `
        <div class="wrong-item">
          <span class="wrong-word">${w.word}</span>
          <span class="wrong-meaning">${w.meaning}</span>
          <span class="wrong-etymology">${w.etymology}</span>
        </div>
      `).join("");
      wrongSection.style.display = "block";
    } else {
      wrongSection.style.display = "none";
    }

    // ボタン
    $("btn-retry").onclick = () => {
      if (res.mode && res.affixKey) {
        const label = res.mode === "prefix"
          ? WordData.getPrefixInfo(res.affixKey).label
          : WordData.getSuffixInfo(res.affixKey).label;
        startQuiz(res.mode, res.affixKey, label);
      }
    };
    $("btn-home-from-result").onclick = () => {
      showScreen("screen-home");
      initHome();
    };

    Quiz.reset();
  }

  // ── レベルアップモーダル ────────────────────
  function showLevelUpModal(level) {
    $("modal-new-level").textContent    = `Lv.${level}`;
    $("modal-new-title").textContent    = WordData.getLevelTitle(level);
    $("levelup-modal").classList.add("show");
    $("btn-close-levelup").onclick = () => {
      $("levelup-modal").classList.remove("show");
    };
  }

  // ── プロフィール画面 ──────────────────────────
  $("btn-profile").onclick = async () => {
    await renderProfile();
    showScreen("screen-profile");
  };

  $("profile-back-btn").onclick = () => {
    showScreen("screen-home");
  };

  async function renderProfile() {
    const p      = await Storage.getProfile();
    const lvInfo = WordData.calcUserLevel(p.totalXp);

    $("profile-level-badge").textContent = `Lv.${lvInfo.level}`;
    $("profile-user-title").textContent  = WordData.getLevelTitle(lvInfo.level);
    const pct = Math.min((lvInfo.currentXp / lvInfo.nextXp) * 100, 100);
    $("profile-xp-fill").style.width = pct + "%";
    $("profile-xp-text").textContent = `${lvInfo.currentXp} / ${lvInfo.nextXp} XP`;

    $("ps-streak").textContent     = p.currentStreak || 0;
    $("ps-total-days").textContent  = p.totalDays || 0;
    $("ps-total-correct").textContent = (p.totalCorrect || 0).toLocaleString();
    const acc = p.totalAnswered > 0
      ? Math.round((p.totalCorrect / p.totalAnswered) * 100) : 0;
    $("ps-accuracy").textContent   = acc + "%";
    $("ps-total-quizzes").textContent = p.totalQuizzes || 0;
    $("ps-max-combo").textContent   = p.maxCombo || 0;

    // 苦手語根
    const weakEl = $("weak-roots-list");
    const weak   = await Storage.getWeakAffixes("prefix", 5);
    if (weak.length === 0) {
      weakEl.innerHTML = `<p class="no-data-text">まだデータがありません。クイズをやって実力を測ろう！</p>`;
    } else {
      weakEl.innerHTML = weak.map(s => {
        const pct  = Math.round((s.correct / s.total) * 100);
        const info = WordData.getPrefixInfo(s.affixKey);
        return `
          <div class="weak-root-item">
            <span class="weak-root-name">${info.label}</span>
            <div class="weak-root-bar-container">
              <div class="weak-root-bar">
                <div class="weak-root-fill" style="width:${pct}%"></div>
              </div>
              <span class="weak-root-stats">${pct}% (${s.total}問)</span>
            </div>
          </div>
        `;
      }).join("");
    }

    // バッジ
    const badgeDefs = Storage.getBadgeDefs();
    const earned    = p.badges || [];
    const badgesEl  = $("badges-grid");
    badgesEl.innerHTML = badgeDefs.map(b => `
      <div class="badge-item ${earned.includes(b.id) ? "earned" : "locked"}">
        <div class="badge-icon">${b.icon}</div>
        <span class="badge-name">${b.name}</span>
      </div>
    `).join("");
  }

  // ── データリセット ───────────────────────────
  $("btn-reset-data").onclick = () => {
    $("confirm-title").textContent   = "データリセット";
    $("confirm-message").textContent = "すべての学習データを削除します。この操作は元に戻せません。";
    $("confirm-modal").classList.add("show");
    $("confirm-ok").onclick = async () => {
      await Storage.resetAll();
      $("confirm-modal").classList.remove("show");
      showScreen("screen-home");
      initHome();
    };
    $("confirm-cancel").onclick = () => {
      $("confirm-modal").classList.remove("show");
    };
  };

  // ── 設定（暫定：リロード） ────────────────────
  $("btn-settings").onclick = () => {
    alert("設定機能は今後追加予定です！");
  };

  // ── Service Worker 登録 ──────────────────────
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
