/**
 * storage.js — IndexedDB による学習データ管理
 */
const Storage = (function(){
  const DB_NAME    = "EtymologyEnglish";
  const DB_VERSION = 1;
  const STORE_PROFILE  = "profile";
  const STORE_HISTORY  = "quiz_history";
  const STORE_AFFIX    = "affix_stats";

  let _db = null;

  // ── DB初期化 ────────────────────────────────
  function init() {
    return new Promise((resolve, reject) => {
      if (_db) { resolve(_db); return; }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_PROFILE)) {
          db.createObjectStore(STORE_PROFILE, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_HISTORY)) {
          const hs = db.createObjectStore(STORE_HISTORY, { keyPath: "id", autoIncrement: true });
          hs.createIndex("date", "date");
        }
        if (!db.objectStoreNames.contains(STORE_AFFIX)) {
          db.createObjectStore(STORE_AFFIX, { keyPath: "key" });
        }
      };
      req.onsuccess = e => { _db = e.target.result; resolve(_db); };
      req.onerror   = e => reject(e.target.error);
    });
  }

  function _tx(store, mode = "readonly") {
    return _db.transaction(store, mode).objectStore(store);
  }

  function _get(store, key) {
    return new Promise((res, rej) => {
      const req = _tx(store).get(key);
      req.onsuccess = () => res(req.result);
      req.onerror   = () => rej(req.error);
    });
  }

  function _put(store, value) {
    return new Promise((res, rej) => {
      const req = _tx(store, "readwrite").put(value);
      req.onsuccess = () => res(req.result);
      req.onerror   = () => rej(req.error);
    });
  }

  function _getAll(store) {
    return new Promise((res, rej) => {
      const req = _tx(store).getAll();
      req.onsuccess = () => res(req.result);
      req.onerror   = () => rej(req.error);
    });
  }

  // ── プロフィール ─────────────────────────────
  const DEFAULT_PROFILE = {
    id: "main",
    totalXp: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    totalQuizzes: 0,
    maxCombo: 0,
    currentStreak: 0,
    lastPlayDate: null,
    totalDays: 0,
    selectedLevel: 0, // 0=初級...3=マスター
    badges: [],
  };

  async function getProfile() {
    const p = await _get(STORE_PROFILE, "main");
    return p ? { ...DEFAULT_PROFILE, ...p } : { ...DEFAULT_PROFILE };
  }

  async function saveProfile(profile) {
    await _put(STORE_PROFILE, { ...profile, id: "main" });
  }

  // ストリーク更新（ログイン時に呼ぶ）
  async function updateStreak() {
    const p = await getProfile();
    const today = _dateStr(new Date());
    if (p.lastPlayDate === today) return p; // 今日すでに更新済み
    const yesterday = _dateStr(new Date(Date.now() - 86400000));
    if (p.lastPlayDate === yesterday) {
      p.currentStreak = (p.currentStreak || 0) + 1;
    } else {
      p.currentStreak = 1;
    }
    p.lastPlayDate = today;
    p.totalDays = (p.totalDays || 0) + 1;
    await saveProfile(p);
    return p;
  }

  // ── クイズ履歴 ───────────────────────────────
  async function saveQuizResult(result) {
    // result: { mode, affixKey, level, correct, total, xpGained, maxCombo, timeMs, wrongWords }
    const record = { ...result, date: new Date().toISOString() };
    await _put(STORE_HISTORY, record);

    // プロフィール更新
    const p = await getProfile();
    p.totalCorrect   = (p.totalCorrect  || 0) + result.correct;
    p.totalAnswered  = (p.totalAnswered || 0) + result.total;
    p.totalQuizzes   = (p.totalQuizzes  || 0) + 1;
    p.totalXp        = (p.totalXp       || 0) + result.xpGained;
    p.maxCombo       = Math.max(p.maxCombo || 0, result.maxCombo || 0);
    await saveProfile(p);

    // 語根統計更新
    await updateAffixStat(result.mode, result.affixKey, result.correct, result.total);

    return p;
  }

  // ── 語根統計（接頭語/接尾語ごとの正答率） ────
  async function getAffixStat(mode, affixKey) {
    const key = `${mode}:${affixKey}`;
    const stat = await _get(STORE_AFFIX, key);
    return stat || { key, mode, affixKey, correct: 0, total: 0 };
  }

  async function updateAffixStat(mode, affixKey, correct, total) {
    const stat = await getAffixStat(mode, affixKey);
    stat.correct += correct;
    stat.total   += total;
    await _put(STORE_AFFIX, stat);
  }

  async function getAllAffixStats() {
    return _getAll(STORE_AFFIX);
  }

  // 苦手語根トップ5
  async function getWeakAffixes(mode, topN = 5) {
    const all = await getAllAffixStats();
    const filtered = all
      .filter(s => s.mode === mode && s.total >= 5)
      .map(s => ({ ...s, accuracy: s.correct / s.total }))
      .sort((a, b) => a.accuracy - b.accuracy);
    return filtered.slice(0, topN);
  }

  // ── バッジ管理 ───────────────────────────────
  const BADGE_DEFS = [
    { id:"first_correct",   name:"初正解",       icon:"⭐", desc:"初めて正解した",           check: p => p.totalCorrect >= 1 },
    { id:"ten_correct",     name:"10問正解",      icon:"🌟", desc:"合計10問正解した",         check: p => p.totalCorrect >= 10 },
    { id:"hundred_correct", name:"100問正解",     icon:"💫", desc:"合計100問正解した",        check: p => p.totalCorrect >= 100 },
    { id:"first_quiz",      name:"初クイズ",      icon:"🎯", desc:"初めてクイズを完了した",   check: p => p.totalQuizzes >= 1 },
    { id:"ten_quizzes",     name:"10回クイズ",    icon:"🏆", desc:"クイズを10回完了した",     check: p => p.totalQuizzes >= 10 },
    { id:"streak3",         name:"3日連続",       icon:"🔥", desc:"3日連続でプレイした",      check: p => p.currentStreak >= 3 },
    { id:"streak7",         name:"7日連続",       icon:"🌈", desc:"7日連続でプレイした",      check: p => p.currentStreak >= 7 },
    { id:"streak30",        name:"30日連続",      icon:"👑", desc:"30日連続でプレイした",     check: p => p.currentStreak >= 30 },
    { id:"combo10",         name:"10連続コンボ",  icon:"⚡", desc:"10問連続正解した",         check: p => p.maxCombo >= 10 },
    { id:"combo20",         name:"20連続コンボ",  icon:"💥", desc:"20問連続正解した",         check: p => p.maxCombo >= 20 },
    { id:"combo30",         name:"全問パーフェクト",icon:"✨",desc:"30問全問正解した",        check: p => p.maxCombo >= 30 },
    { id:"xp1000",          name:"1000XP",        icon:"💎", desc:"合計1000XP獲得した",      check: p => p.totalXp >= 1000 },
    { id:"xp10000",         name:"10000XP",       icon:"🏅", desc:"合計10000XP獲得した",     check: p => p.totalXp >= 10000 },
  ];

  async function checkAndAwardBadges(profile) {
    const newBadges = [];
    for (const def of BADGE_DEFS) {
      if (!profile.badges.includes(def.id) && def.check(profile)) {
        profile.badges.push(def.id);
        newBadges.push(def);
      }
    }
    if (newBadges.length > 0) await saveProfile(profile);
    return newBadges;
  }

  function getBadgeDefs() { return BADGE_DEFS; }

  // ── デイリーチャレンジ ────────────────────────
  async function getDailyChallengeStatus() {
    const today = _dateStr(new Date());
    const p = await getProfile();
    return {
      completed: p.lastDailyDate === today,
      today,
    };
  }

  async function completeDailyChallenge() {
    const today = _dateStr(new Date());
    const p = await getProfile();
    p.lastDailyDate = today;
    await saveProfile(p);
  }

  // ── データリセット ───────────────────────────
  async function resetAll() {
    await _put(STORE_PROFILE, { ...DEFAULT_PROFILE, id: "main" });
    // 履歴・語根統計もクリア
    await new Promise((res, rej) => {
      const tx = _db.transaction([STORE_HISTORY, STORE_AFFIX], "readwrite");
      tx.objectStore(STORE_HISTORY).clear();
      tx.objectStore(STORE_AFFIX).clear();
      tx.oncomplete = res;
      tx.onerror    = () => rej(tx.error);
    });
  }

  // ── ユーティリティ ────────────────────────────
  function _dateStr(date) {
    return date.toISOString().slice(0, 10);
  }

  return {
    init,
    getProfile,
    saveProfile,
    updateStreak,
    saveQuizResult,
    getAffixStat,
    getAllAffixStats,
    getWeakAffixes,
    checkAndAwardBadges,
    getBadgeDefs,
    getDailyChallengeStatus,
    completeDailyChallenge,
    resetAll,
  };
})();
