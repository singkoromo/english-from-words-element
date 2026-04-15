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
    // スプラッシュは fixed オーバーレイとして独立管理するため除外
    document.querySelectorAll(".screen").forEach(s => {
      if (s.id !== 'screen-splash') s.classList.remove("active");
    });
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
    window.scrollTo(0, 0);
  }

  // スプラッシュ → ホーム
  // スプラッシュは毎回2秒表示。その間にホームを裏側でセットアップし、
  // 2秒後にフェードアウト → display:none でコンテンツが最上部に現れる。
  const _splashEl = document.getElementById('screen-splash');

  // ホーム画面をスプラッシュの裏側で即座にセットアップ
  showScreen("screen-home");
  initHome();
  _updateSoundButtons();
  document.getElementById('btn-sound-toggle-home').onclick = () => SoundManager.toggle();
  document.getElementById('btn-sound-toggle').onclick      = () => SoundManager.toggle();

  // 2秒後にスプラッシュをフェードアウト → 完全非表示
  setTimeout(() => {
    if (_splashEl) {
      _splashEl.classList.add('splash-fade-out');       // opacity: 0 へ
      setTimeout(() => {
        _splashEl.classList.remove('active', 'splash-fade-out'); // display: none へ
      }, 420); // CSS transition (0.4s) + 余裕
    }
  }, 2000);

  // ── 状態 ─────────────────────────────────────
  let selectedLevel  = profile.selectedLevel || 0;
  let selectedMode   = "etymology";
  // 間違えた単語リストの状態
  let _wwlState = { filter: "active", sort: "recent", page: 1 };
  const WWL_PAGE_SIZE = 20;
  let selectedAffix  = null;   // { mode, key, label }
  // 問題数（0 = 全問）。localStorageで永続化
  let selectedQuizCount = parseInt(localStorage.getItem('quizQuestionCount') || '20', 10);
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
        $("etymology-grid").classList.toggle("hidden", selectedMode !== "etymology");
        $("weak-section").classList.toggle("hidden", selectedMode !== "weak");
        selectedAffix = null;
        renderAffixGrid();
        if (selectedMode === "weak") renderWeakSection();
      };
    });

    // 問題数バー
    renderQuizCountBar();

    renderAffixGrid();
    await renderDailyChallenge();
  }

  // ── 問題数選択バー ────────────────────────────
  function renderQuizCountBar() {
    const bar = $("quiz-count-bar");
    if (!bar) return;
    const options = [10, 20, 30, 50, 0];
    const labels  = { 10:"10問", 20:"20問", 30:"30問", 50:"50問", 0:"全問" };
    bar.innerHTML =
      `<span class="qcb-label">問題数</span><div class="qcb-btns">` +
      options.map(n =>
        `<button class="qcb-btn${selectedQuizCount === n ? ' active' : ''}" data-count="${n}">${labels[n]}</button>`
      ).join("") +
      `</div>`;
    bar.querySelectorAll(".qcb-btn").forEach(btn => {
      btn.onclick = () => {
        selectedQuizCount = parseInt(btn.dataset.count, 10);
        localStorage.setItem("quizQuestionCount", selectedQuizCount);
        bar.querySelectorAll(".qcb-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      };
    });
  }

  // 語源グリッド描画（接頭語・語根・接尾語を統合）
  async function renderAffixGrid() {
    const allStats = await Storage.getAllAffixStats();
    const statsMap  = {};
    allStats.forEach(s => { statsMap[`${s.mode}:${s.affixKey}`] = s; });

    const container = $("etymology-grid");
    container.innerHTML = "";

    // タイプ別ラベル（バッジ表示用）
    const TYPE_LABEL = { prefix: "接頭語", root: "語根", suffix: "接尾語" };

    // セクション定義: 接頭語 → 語根 → 接尾語 の順
    const sections = [
      { title: "接頭語系", items: WordData.PREFIXES, type: "prefix" },
      { title: "語根系",   items: WordData.ROOTS,    type: "root"   },
      { title: "接尾語系", items: WordData.SUFFIXES,  type: "suffix" },
    ];

    sections.forEach(({ title, items, type }) => {
      // このセクションに単語がある項目だけ絞り込む
      const visibleItems = items.filter(item =>
        WordData.getEtymologyWordCount(item.key, selectedLevel) > 0
      );
      if (visibleItems.length === 0) return;

      // セクション見出し
      const heading = document.createElement("div");
      heading.className = "etym-section-heading";
      heading.textContent = title;
      container.appendChild(heading);

      visibleItems.forEach(item => {
        const count = WordData.getEtymologyWordCount(item.key, selectedLevel);
        // stats は既存の "prefix:" / "suffix:" / "root:" キーも、新しい "etymology:" キーも両方チェック
        const stat = statsMap[`etymology:${item.key}`]
                  || statsMap[`${type}:${item.key}`];

        const btn = document.createElement("button");
        btn.className = "affix-btn";
        if (selectedAffix && selectedAffix.key === item.key) {
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
          selectedAffix = { mode: "etymology", key: item.key, label: item.label };
          document.querySelectorAll(".affix-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          showStartArea(item);
        };
        container.appendChild(btn);
      });
    });

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
        WordData.getEtymologyWordCount(item.key, selectedLevel)
      }語)</p>
      <button class="btn-primary" id="btn-start-quiz">
        🚀 クイズを始める！
      </button>
    `;

    const section = document.querySelector(".section:nth-child(2)");
    section.appendChild(area);

    $("btn-start-quiz").onclick = () => startQuiz(selectedMode, item.key, item.label);
  }

  // ── 苦手克服セクション ────────────────────────
  async function renderWeakSection() {
    const weakEntries = await Storage.getActiveWeakWords();  // 未卒業のみ
    const count       = weakEntries.length;
    const infoEl      = $("weak-info-text");
    const startBtn    = $("btn-start-weak");
    const countDisp   = $("weak-count-display");

    if (count === 0) {
      infoEl.textContent = "まだ苦手単語がありません。クイズで間違えた単語が自動で登録されます！";
      startBtn.disabled  = true;
      if (countDisp) countDisp.style.display = "none";
    } else {
      const countEl = $("weak-word-count");
      if (countEl) countEl.textContent = count;
      if (countDisp) countDisp.style.display = "flex";
      infoEl.textContent = "苦手な単語をまとめて練習しよう！";
      startBtn.disabled  = false;
      startBtn.onclick   = () => startWeakModeQuiz();
    }
  }

  // 苦手克服クイズ起動
  async function startWeakModeQuiz() {
    const weakEntries = await Storage.getActiveWeakWords();  // 未卒業のみ
    const wordPool    = weakEntries.map(e => e.word);

    if (wordPool.length < 4) {
      alert("苦手リストの単語が少なすぎます（最低4問必要）。クイズに挑戦して苦手単語を増やしましょう！");
      return;
    }

    const quizSize = selectedQuizCount === 0 ? 99999 : selectedQuizCount;
    const result   = Quiz.startWithWords(wordPool, quizSize);
    if (result.error) {
      alert(result.error);
      return;
    }
    _isDaily = false;
    showScreen("screen-quiz");
    $("quiz-mode-label").textContent = "苦手克服";
    renderQuestion();
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
        // 今日のおすすめ語源をランダムに選ぶ（全語源から）
        const today = new Date();
        const idx   = today.getDate() % WordData.ALL_ETYMOLOGIES.length;
        const p     = WordData.ALL_ETYMOLOGIES[idx];
        startQuiz("etymology", p.key, p.label, true);
      };
    }
  }

  // ── クイズ起動（語源/デイリー） ──────────────
  function startQuiz(mode, affixKey, label, isDaily = false) {
    const quizSize = selectedQuizCount === 0 ? 99999 : selectedQuizCount;
    const result   = Quiz.start(mode, affixKey, selectedLevel, { quizSize });
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

    // 品詞表示（posフィールドがある場合のみ）
    const posEl  = $("question-pos");
    const posTag = $("pos-tag");
    if (posEl && posTag) {
      if (q.word.pos) {
        posTag.textContent     = q.word.pos;
        posEl.style.display    = "flex";
      } else {
        posEl.style.display    = "none";
      }
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

    // 語源 + 品詞（posがある場合）を解説パネルに表示
    let breakdownHTML = `<strong>語源:</strong> ${res.explanation.etymology}`;
    if (res.explanation.pos) {
      breakdownHTML += ` &nbsp;·&nbsp; <strong>品詞:</strong> <span class="pos-inline">${res.explanation.pos}</span>`;
    }
    $("explanation-breakdown").innerHTML = breakdownHTML;

    // 単語の成り立ち（origin データがある場合のみ）
    const originBox  = $("origin-box");
    const originText = $("origin-text");
    if (originBox && originText) {
      if (res.explanation.origin) {
        // \n\n で段落分割
        originText.innerHTML = res.explanation.origin
          .split("\n\n")
          .map(p => `<p>${p}</p>`)
          .join("");
        originBox.style.display = "block";
      } else {
        originBox.style.display = "none";
      }
    }

    // 用例表示（example データがある場合のみ）
    const exBox = $("example-box");
    const exEn  = $("example-en");
    const exJa  = $("example-ja");
    if (exBox && exEn && exJa && res.explanation.example) {
      // 対象単語をハイライト
      const word = res.explanation.word;
      const re   = new RegExp(`(${word})`, "gi");
      exEn.innerHTML = res.explanation.example.replace(re, `<span class="example-highlight">$1</span>`);
      exJa.textContent = res.explanation.exampleJa;
      exBox.style.display = "block";
    } else if (exBox) {
      exBox.style.display = "none";
    }

    // 派生語（derivatives データがある場合のみ）
    const derivBox  = $("derivatives-box");
    const derivList = $("derivatives-list");
    if (derivBox && derivList) {
      if (res.explanation.derivatives && res.explanation.derivatives.length > 0) {
        derivList.innerHTML = res.explanation.derivatives
          .map(d => typeof d === "string"
            ? `<span class="derivative-chip">${d}</span>`
            : `<div class="word-item"><span class="word-item-word">${d.word}</span><span class="word-item-desc">${d.desc}</span></div>`)
          .join("");
        derivBox.style.display = "block";
      } else {
        derivBox.style.display = "none";
      }
    }

    // 語源ネットワーク（family データがある場合のみ）
    const famBox  = $("family-box");
    const famList = $("family-list");
    if (famBox && famList) {
      if (res.explanation.family && res.explanation.family.length > 0) {
        famList.innerHTML = res.explanation.family
          .map(f => `<div class="word-item"><span class="word-item-word">${f.word}</span><span class="word-item-desc">${f.desc}</span></div>`)
          .join("");
        famBox.style.display = "block";
      } else {
        famBox.style.display = "none";
      }
    }

    // 複合語・フレーズ（compounds データがある場合のみ）
    const cmpBox  = $("compounds-box");
    const cmpList = $("compounds-list");
    if (cmpBox && cmpList) {
      if (res.explanation.compounds && res.explanation.compounds.length > 0) {
        cmpList.innerHTML = res.explanation.compounds
          .map(c => `<div class="word-item"><span class="word-item-word">${c.phrase}</span><span class="word-item-desc">${c.desc}</span></div>`)
          .join("");
        cmpBox.style.display = "block";
      } else {
        cmpBox.style.display = "none";
      }
    }

    panel.classList.add("show");
    if (!res.isCorrect) panel.classList.add("wrong-panel");
    panel.style.display = "block";

    // 解説パネル表示後、「次の問題」ボタンが見える位置に自動スクロール
    requestAnimationFrame(() => {
      const nextBtn = $("btn-next");
      if (nextBtn) {
        nextBtn.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

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
    window.scrollTo({ top: 0, behavior: "instant" });
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

    // 苦手単語リスト更新（間違えた単語を追加、正解した苦手単語のストリーク更新）
    if (res.wrong && res.wrong.length > 0) {
      await Storage.addWeakWords(res.wrong);
    }
    if (res.correct_words && res.correct_words.length > 0) {
      await Storage.updateWeakWordStreaks(res.correct_words);
    }

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
      wrongList.innerHTML = res.wrong.map(w => {
        const re = new RegExp(`(${w.word})`, "gi");
        const exHtml = w.example
          ? `<div class="wrong-example">
               <span class="wrong-example-en">${w.example.replace(re, `<span class="example-highlight">$1</span>`)}</span>
               <span class="wrong-example-ja">${w.exampleJa}</span>
             </div>`
          : "";
        const originHtml = w.origin
          ? `<div class="wrong-origin"><span class="wrong-origin-label">📖 成り立ち</span><div class="origin-paragraphs">${w.origin.split("\n\n").map(p => `<p>${p}</p>`).join("")}</div></div>`
          : "";
        const derivHtml = (w.derivatives && w.derivatives.length > 0)
          ? `<div class="wrong-derivatives"><span class="wrong-deriv-label">🔷 派生語</span>${w.derivatives.map(d => typeof d === "string"
              ? `<span class="derivative-chip derivative-chip--sm">${d}</span>`
              : `<div class="word-item word-item--sm"><span class="word-item-word">${d.word}</span><span class="word-item-desc">${d.desc}</span></div>`).join("")}</div>`
          : "";
        const famHtml = (w.family && w.family.length > 0)
          ? `<div class="wrong-family"><span class="wrong-family-label">🌐 語源ネットワーク</span>${w.family.map(f => `<div class="word-item word-item--sm"><span class="word-item-word">${f.word}</span><span class="word-item-desc">${f.desc}</span></div>`).join("")}</div>`
          : "";
        const cmpHtml = (w.compounds && w.compounds.length > 0)
          ? `<div class="wrong-compounds"><span class="wrong-cmp-label">💬 複合語</span>${w.compounds.map(c => `<div class="word-item word-item--sm"><span class="word-item-word">${c.phrase}</span><span class="word-item-desc">${c.desc}</span></div>`).join("")}</div>`
          : "";
        return `
          <div class="wrong-item">
            <span class="wrong-word">${w.word}</span>
            ${w.pos ? `<span class="wrong-pos">${w.pos}</span>` : ""}
            <span class="wrong-meaning">${w.meaning}</span>
            <span class="wrong-etymology">${w.etymology}</span>
            ${originHtml}
            ${exHtml}
            ${derivHtml}
            ${famHtml}
            ${cmpHtml}
          </div>`;
      }).join("");
      wrongSection.style.display = "block";
    } else {
      wrongSection.style.display = "none";
    }

    // ボタン
    $("btn-retry").onclick = () => {
      if (res.mode && res.affixKey && res.mode !== "weak") {
        const label = WordData.getEtymologyInfo(res.affixKey).label;
        startQuiz(res.mode, res.affixKey, label);
      } else {
        // 苦手克服モードの再挑戦
        startWeakModeQuiz();
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

    // 苦手語源（全タイプ統合）
    const weakEl = $("weak-roots-list");
    const weak   = await Storage.getWeakAffixes("etymology", 5);
    if (weak.length === 0) {
      weakEl.innerHTML = `<p class="no-data-text">まだデータがありません。クイズをやって実力を測ろう！</p>`;
    } else {
      weakEl.innerHTML = weak.map(s => {
        const pct  = Math.round((s.correct / s.total) * 100);
        const info = WordData.getEtymologyInfo(s.affixKey);
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

    // 間違えた単語リスト
    _wwlState.page = 1; // ページはリセット、フィルタ/ソートは維持
    await renderWrongWordsList();

    // フィルタタブ
    document.querySelectorAll(".wwl-filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === _wwlState.filter);
      btn.onclick = async () => {
        _wwlState.filter = btn.dataset.filter;
        _wwlState.page   = 1;
        document.querySelectorAll(".wwl-filter-btn").forEach(b =>
          b.classList.toggle("active", b.dataset.filter === _wwlState.filter)
        );
        await renderWrongWordsList();
      };
    });

    // ソート
    const sortSel = $("wwl-sort");
    if (sortSel) {
      sortSel.value    = _wwlState.sort;
      sortSel.onchange = async () => {
        _wwlState.sort = sortSel.value;
        _wwlState.page = 1;
        await renderWrongWordsList();
      };
    }

    // 苦手克服へのボタン
    const gotoWeakBtn = $("btn-goto-weak-from-profile");
    if (gotoWeakBtn) {
      gotoWeakBtn.onclick = () => {
        showScreen("screen-home");
        // 苦手克服タブを選択
        document.querySelectorAll(".mode-tab").forEach(t => {
          const isWeak = t.dataset.mode === "weak";
          t.classList.toggle("active", isWeak);
        });
        selectedMode = "weak";
        $("etymology-grid").classList.add("hidden");
        $("weak-section").classList.remove("hidden");
        renderWeakSection();
      };
    }
  }

  // ── 間違えた単語リスト描画 ────────────────────
  async function renderWrongWordsList() {
    const listEl = $("wwl-list");
    if (!listEl) return;

    const allWords = await Storage.getWeakWords();

    // フィルタ別カウントをバッジに反映
    const activeCount    = allWords.filter(e => !e.graduated).length;
    const graduatedCount = allWords.filter(e => e.graduated).length;
    const badge = $("wwl-count-badge");
    if (badge) badge.textContent = `未卒業 ${activeCount}語 / 卒業済み ${graduatedCount}語`;

    // 苦手克服ボタン表示切り替え
    const gotoWeakArea = $("wwl-goto-weak");
    if (gotoWeakArea) gotoWeakArea.style.display = activeCount >= 4 ? "block" : "none";

    // フィルタ適用
    let filtered;
    if (_wwlState.filter === "active") {
      filtered = allWords.filter(e => !e.graduated);
    } else if (_wwlState.filter === "graduated") {
      filtered = allWords.filter(e => e.graduated);
    } else {
      filtered = allWords.slice();
    }

    // ソート適用
    if (_wwlState.sort === "wrong") {
      filtered.sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0));
    } else {
      filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    const total   = filtered.length;
    const showing = _wwlState.page * WWL_PAGE_SIZE;
    const visible = filtered.slice(0, showing);

    // 0件メッセージ
    if (total === 0) {
      const emptyMsg = {
        active:    "まだ間違えた単語はありません。\nクイズに挑戦してみよう！",
        graduated: "卒業済みの単語はまだありません。",
        all:       "まだ間違えた単語はありません。\nクイズに挑戦してみよう！",
      };
      listEl.innerHTML = `<p class="wwl-empty">${emptyMsg[_wwlState.filter].replace("\n","<br>")}</p>`;
      const mc = $("wwl-more-container");
      if (mc) mc.style.display = "none";
      return;
    }

    // リスト描画
    listEl.innerHTML = visible.map(entry => {
      const w = entry.word;
      if (!w) return "";
      const isGraduated = !!entry.graduated;

      const statusBadge = isGraduated
        ? `<span class="wwl-graduated-badge">🎓 卒業済み</span>`
        : `<span class="wwl-streak-dots" title="連続正解 ${entry.correctStreak || 0}/2">${
            ["○○","●○","●●"][Math.min(entry.correctStreak || 0, 2)]
          }</span>`;

      const exHtml = w.example
        ? `<div class="wwl-example">
             <div class="wwl-example-en">${_escHtml(w.example)}</div>
             ${w.exampleJa ? `<div class="wwl-example-ja">${_escHtml(w.exampleJa)}</div>` : ""}
           </div>`
        : "";
      const originHtml = w.origin
        ? `<div class="wwl-origin"><span class="wwl-origin-label">📖 成り立ち</span><div class="origin-paragraphs">${w.origin.split("\n\n").map(p => `<p>${_escHtml(p)}</p>`).join("")}</div></div>`
        : "";
      const derivHtml = (w.derivatives && w.derivatives.length > 0)
        ? `<div class="wwl-derivatives"><span class="wwl-deriv-label">🔷 派生語</span>${w.derivatives.map(d => typeof d === "string"
            ? `<span class="derivative-chip derivative-chip--sm">${_escHtml(d)}</span>`
            : `<div class="word-item word-item--sm"><span class="word-item-word">${_escHtml(d.word)}</span><span class="word-item-desc">${_escHtml(d.desc)}</span></div>`).join("")}</div>`
        : "";
      const famHtml = (w.family && w.family.length > 0)
        ? `<div class="wwl-family"><span class="wwl-family-label">🌐 語源ネットワーク</span>${w.family.map(f => `<div class="word-item word-item--sm"><span class="word-item-word">${_escHtml(f.word)}</span><span class="word-item-desc">${_escHtml(f.desc)}</span></div>`).join("")}</div>`
        : "";
      const cmpHtml = (w.compounds && w.compounds.length > 0)
        ? `<div class="wwl-compounds"><span class="wwl-cmp-label">💬 複合語</span>${w.compounds.map(c => `<div class="word-item word-item--sm"><span class="word-item-word">${_escHtml(c.phrase)}</span><span class="word-item-desc">${_escHtml(c.desc)}</span></div>`).join("")}</div>`
        : "";

      return `
        <div class="wwl-item${isGraduated ? " wwl-graduated" : ""}" data-key="${_escHtml(entry.wordKey)}">
          <div class="wwl-item-header">
            <div class="wwl-item-top">
              <span class="wwl-word">${_escHtml(w.word)}</span>
              ${w.pos ? `<span class="wwl-pos">${_escHtml(w.pos)}</span>` : ""}
              ${statusBadge}
              <span class="wwl-wrong-count">❌${entry.wrongCount || 0}</span>
            </div>
            <div class="wwl-item-bottom">
              <span class="wwl-meaning">${_escHtml(w.meaning)}</span>
              <div class="wwl-item-btns">
                <button class="wwl-delete-btn" data-key="${_escHtml(entry.wordKey)}" title="リストから削除">🗑️</button>
                <span class="wwl-expand-icon">▼</span>
              </div>
            </div>
          </div>
          <div class="wwl-item-body">
            <div class="wwl-etymology">📖 ${_escHtml(w.etymology || "")}</div>
            ${originHtml}
            ${exHtml}
            ${derivHtml}
            ${famHtml}
            ${cmpHtml}
          </div>
        </div>`;
    }).join("");

    // タップで展開
    listEl.querySelectorAll(".wwl-item-header").forEach(header => {
      header.addEventListener("click", e => {
        if (e.target.closest(".wwl-delete-btn")) return;
        const item = header.closest(".wwl-item");
        item.classList.toggle("wwl-open");
      });
    });

    // 削除ボタン
    listEl.querySelectorAll(".wwl-delete-btn").forEach(btn => {
      btn.addEventListener("click", async e => {
        e.stopPropagation();
        await Storage.deleteWeakWord(btn.dataset.key);
        _wwlState.page = 1;
        await renderWrongWordsList();
      });
    });

    // もっと見るボタン
    const mc = $("wwl-more-container");
    if (mc) {
      if (showing < total) {
        mc.style.display = "block";
        const moreBtn = $("wwl-more-btn");
        if (moreBtn) {
          moreBtn.textContent = `もっと見る（残り ${total - showing} 語）`;
          moreBtn.onclick = async () => {
            _wwlState.page++;
            await renderWrongWordsList();
          };
        }
      } else {
        mc.style.display = "none";
      }
    }
  }

  function _escHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
