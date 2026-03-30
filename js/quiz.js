/**
 * quiz.js — クイズエンジン
 */
const Quiz = (function(){
  const QUIZ_SIZE   = 30;
  const MAX_LIVES   = 3;
  const BASE_XP     = 10;   // 1問正解
  const COMBO_BONUS = [0, 0, 5, 10, 15, 20]; // コンボ数 → ボーナスXP

  let _state = null;

  // ── クイズ開始 ───────────────────────────────
  function start(mode, affixKey, level) {
    // 問題プール取得
    let pool;
    if (mode === "prefix") {
      pool = WordData.getWordsByPrefix(affixKey, level);
    } else if (mode === "suffix") {
      pool = WordData.getWordsBySuffix(affixKey, level);
    } else if (mode === "weak") {
      // 苦手モード: 全レベルからランダム
      pool = WordData.getAllWords(level);
    } else {
      pool = WordData.getAllWords(level);
    }

    if (pool.length < 4) {
      return { error: "問題数が足りません（最低4問必要）" };
    }

    const questions = _buildQuestions(pool, Math.min(QUIZ_SIZE, pool.length));

    _state = {
      mode,
      affixKey,
      level,
      questions,
      current:   0,
      score:     0,
      combo:     0,
      maxCombo:  0,
      lives:     MAX_LIVES,
      xpGained:  0,
      wrong:     [],
      startTime: Date.now(),
      answered:  false,
    };

    return { ok: true, total: questions.length };
  }

  // ── 問題構築（ダミー選択肢付き）─────────────
  function _buildQuestions(pool, size) {
    const shuffled = WordData.shuffle(pool);
    const selected = shuffled.slice(0, size);
    const allMeanings = pool.map(w => w.meaning);

    return selected.map(word => {
      // 正解の選択肢
      const correct = word.meaning;
      // 不正解の選択肢（同じ語根から優先的に選ぶ、重複なし）
      const distractors = WordData.shuffle(
        allMeanings.filter(m => m !== correct)
      ).slice(0, 3);
      // 4択をシャッフル
      const choices = WordData.shuffle([correct, ...distractors]);
      const correctIndex = choices.indexOf(correct);
      return { word, choices, correctIndex };
    });
  }

  // ── 現在問題を返す ────────────────────────────
  function getCurrentQuestion() {
    if (!_state) return null;
    const q = _state.questions[_state.current];
    return {
      index:        _state.current,
      total:        _state.questions.length,
      word:         q.word,
      choices:      q.choices,
      correctIndex: q.correctIndex,
      answered:     _state.answered,
      lives:        _state.lives,
      score:        _state.score,
      combo:        _state.combo,
      xpGained:     _state.xpGained,
    };
  }

  // ── 回答処理 ──────────────────────────────────
  function answer(choiceIndex) {
    if (!_state || _state.answered) return null;
    _state.answered = true;

    const q = _state.questions[_state.current];
    const isCorrect = choiceIndex === q.correctIndex;

    let xp = 0;
    if (isCorrect) {
      _state.combo++;
      _state.maxCombo = Math.max(_state.maxCombo, _state.combo);
      _state.score++;
      const bonusIdx = Math.min(_state.combo, COMBO_BONUS.length - 1);
      xp = BASE_XP + COMBO_BONUS[bonusIdx];
      _state.xpGained += xp;
    } else {
      _state.combo = 0;
      _state.lives--;
      _state.wrong.push(q.word);
    }

    return {
      isCorrect,
      correctIndex: q.correctIndex,
      xp,
      combo:    _state.combo,
      lives:    _state.lives,
      finished: _state.lives <= 0,
      explanation: _buildExplanation(q.word, isCorrect),
    };
  }

  function _buildExplanation(word, isCorrect) {
    return {
      isCorrect,
      word:      word.word,
      meaning:   word.meaning,
      etymology: word.etymology,
      prefix:    word.prefix || null,
      suffix:    word.suffix || null,
    };
  }

  // ── 次の問題へ ────────────────────────────────
  function next() {
    if (!_state) return null;
    _state.current++;
    _state.answered = false;

    const done = _state.current >= _state.questions.length || _state.lives <= 0;
    return { done };
  }

  // ── 結果取得 ──────────────────────────────────
  function getResult() {
    if (!_state) return null;
    const elapsed = Date.now() - _state.startTime;
    const mins    = Math.floor(elapsed / 60000);
    const secs    = Math.floor((elapsed % 60000) / 1000);
    const timeStr = `${mins}:${String(secs).padStart(2, "0")}`;

    return {
      mode:      _state.mode,
      affixKey:  _state.affixKey,
      level:     _state.level,
      correct:   _state.score,
      total:     _state.current + (_state.answered ? 0 : 0), // 実際に回答した数
      answered:  _state.current,
      xpGained:  _state.xpGained,
      maxCombo:  _state.maxCombo,
      timeStr,
      timeMs:    elapsed,
      wrong:     _state.wrong,
      accuracy:  _state.current > 0
                   ? Math.round((_state.score / _state.current) * 100)
                   : 0,
    };
  }

  function isActive() { return _state !== null; }

  function reset() { _state = null; }

  return { start, getCurrentQuestion, answer, next, getResult, isActive, reset };
})();
