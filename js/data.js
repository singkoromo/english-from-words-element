/**
 * data.js — 単語データ統合・インデックス生成
 * 全データファイル読み込み後に呼び出される
 */

const WordData = (function(){
  // 接頭語マスター
  const PREFIXES = [
    { key:"pre-",    label:"pre-",    meaning:"前に・あらかじめ", color:"#FF6B9D" },
    { key:"un-",     label:"un-",     meaning:"否定・元に戻す",   color:"#C77DFF" },
    { key:"re-",     label:"re-",     meaning:"再び・元に戻す",   color:"#74C0FC" },
    { key:"dis-",    label:"dis-",    meaning:"否定・分離",       color:"#69DB7C" },
    { key:"mis-",    label:"mis-",    meaning:"誤って・悪く",     color:"#FFD43B" },
    { key:"over-",   label:"over-",   meaning:"過度に・上に",     color:"#FFA94D" },
    { key:"under-",  label:"under-",  meaning:"不十分に・下に",   color:"#FF6B6B" },
    { key:"out-",    label:"out-",    meaning:"外に・超えて",     color:"#CC5DE8" },
    { key:"sub-",    label:"sub-",    meaning:"下に・副",         color:"#339AF0" },
    { key:"super-",  label:"super-",  meaning:"超えて・上位",     color:"#51CF66" },
    { key:"inter-",  label:"inter-",  meaning:"間に・相互に",     color:"#FF8787" },
    { key:"trans-",  label:"trans-",  meaning:"横断して・超えて", color:"#74C0FC" },
    { key:"anti-",   label:"anti-",   meaning:"反対・抵抗",       color:"#FF6B9D" },
    { key:"auto-",   label:"auto-",   meaning:"自動・自己",       color:"#A9E34B" },
    { key:"bi-",     label:"bi-",     meaning:"二つ",             color:"#F783AC" },
    { key:"co-",     label:"co-",     meaning:"共に・一緒に",     color:"#FFD43B" },
    { key:"counter-",label:"counter-",meaning:"反対・対抗",       color:"#FFA94D" },
    { key:"de-",     label:"de-",     meaning:"下に・除去",       color:"#B197FC" },
    { key:"en-",     label:"en-",     meaning:"〜にする・中に",   color:"#63E6BE" },
    { key:"ex-",     label:"ex-",     meaning:"外に・前の",       color:"#FF6B9D" },
    { key:"fore-",   label:"fore-",   meaning:"前に・あらかじめ", color:"#74C0FC" },
    { key:"in-",     label:"in-",     meaning:"否定・中に",       color:"#C77DFF" },
    { key:"macro-",  label:"macro-",  meaning:"大きい・大規模",   color:"#51CF66" },
    { key:"micro-",  label:"micro-",  meaning:"小さい・微小",     color:"#339AF0" },
    { key:"mono-",   label:"mono-",   meaning:"一つ",             color:"#FF8787" },
    { key:"multi-",  label:"multi-",  meaning:"多くの",           color:"#FFA94D" },
    { key:"non-",    label:"non-",    meaning:"非・不",           color:"#F783AC" },
    { key:"post-",   label:"post-",   meaning:"後に",             color:"#A9E34B" },
    { key:"semi-",   label:"semi-",   meaning:"半分・部分的に",   color:"#FFD43B" },
    { key:"tri-",    label:"tri-",    meaning:"三つ",             color:"#B197FC" },
    { key:"retro-",  label:"retro-",  meaning:"後ろへ・逆に・昔の", color:"#FF6B9D" },
    { key:"proto-",  label:"proto-",  meaning:"最初の・原始の",    color:"#74C0FC" },
    { key:"ante-",   label:"ante-",   meaning:"前に・先に",        color:"#A9E34B" },
    { key:"mega-",   label:"mega-",   meaning:"巨大な・百万",      color:"#FFA94D" },
    { key:"meta-",   label:"meta-",   meaning:"超えて・変化・後の", color:"#C77DFF" },
    { key:"infra-",  label:"infra-",  meaning:"下に・以下・内部に", color:"#69DB7C" },
    { key:"supra-",  label:"supra-",  meaning:"上に・超えて",      color:"#FF8787" },
    { key:"peri-",   label:"peri-",   meaning:"周囲に・近くに",    color:"#B197FC" },
    { key:"endo-",   label:"endo-",   meaning:"内部に・中に",      color:"#63E6BE" },
    { key:"ecto-",   label:"ecto-",   meaning:"外側に・外部の",    color:"#FFD43B" },
  ];

  // 接尾語マスター
  const SUFFIXES = [
    { key:"-tion",  label:"-tion/-sion", meaning:"行為・状態・結果",    color:"#FF6B9D" },
    { key:"-ment",  label:"-ment",       meaning:"行為の結果・状態",    color:"#C77DFF" },
    { key:"-ness",  label:"-ness",       meaning:"状態・性質",          color:"#74C0FC" },
    { key:"-able",  label:"-able/-ible", meaning:"可能・ふさわしい",    color:"#69DB7C" },
    { key:"-ful",   label:"-ful",        meaning:"〜に満ちた",          color:"#FFD43B" },
    { key:"-less",  label:"-less",       meaning:"〜がない",            color:"#FFA94D" },
    { key:"-ous",   label:"-ous/-ious",  meaning:"〜の性質を持つ",      color:"#FF6B6B" },
    { key:"-ive",   label:"-ive",        meaning:"傾向のある・〜的な",  color:"#CC5DE8" },
    { key:"-al",    label:"-al",         meaning:"〜に関する",          color:"#339AF0" },
    { key:"-ly",    label:"-ly",         meaning:"〜に・〜のような",    color:"#51CF66" },
    { key:"-er",    label:"-er/-or",     meaning:"する人・もの",        color:"#FF8787" },
    { key:"-ist",   label:"-ist",        meaning:"〜する人・〜主義者",  color:"#F783AC" },
    { key:"-ize",   label:"-ize/-ise",   meaning:"〜にする・〜化する",  color:"#A9E34B" },
    { key:"-fy",    label:"-fy",         meaning:"〜にする・〜化する",  color:"#FFD43B" },
    { key:"-ward",  label:"-ward",       meaning:"方向・傾向",          color:"#B197FC" },
    { key:"-dom",   label:"-dom",        meaning:"領域・状態",          color:"#63E6BE" },
    { key:"-hood",  label:"-hood",       meaning:"状態・身分・集団",    color:"#FF6B9D" },
    { key:"-ship",  label:"-ship",       meaning:"状態・技術・関係",    color:"#74C0FC" },
    { key:"-ism",   label:"-ism",        meaning:"主義・思想・行動",    color:"#C77DFF" },
    { key:"-ity",   label:"-ity",        meaning:"性質・状態・程度",    color:"#69DB7C" },
    { key:"-ence",  label:"-ence/-ance", meaning:"状態・性質",          color:"#FFA94D" },
    { key:"-ing",   label:"-ing",        meaning:"動作・過程",          color:"#FF8787" },
    { key:"-ed",    label:"-ed",         meaning:"過去・完了・状態",    color:"#51CF66" },
    { key:"-en",    label:"-en",         meaning:"〜にする",            color:"#339AF0" },
    { key:"-ure",   label:"-ure",        meaning:"行為・状態・結果",    color:"#F783AC" },
    { key:"-age",   label:"-age",        meaning:"行為・状態・集合",    color:"#A9E34B" },
    { key:"-ate",   label:"-ate",        meaning:"〜にする・〜な状態",  color:"#FFD43B" },
    { key:"-ary",   label:"-ary/-ory",   meaning:"〜に関係する・場所",  color:"#B197FC" },
    { key:"-ic",    label:"-ic",         meaning:"〜の・〜に関係する",  color:"#FF6B9D" },
    { key:"-sion",  label:"-sion",       meaning:"行為・状態",          color:"#63E6BE" },
    { key:"-esque", label:"-esque",      meaning:"〜風の・〜のような",   color:"#FF6B9D" },
    { key:"-oid",   label:"-oid",        meaning:"〜に似た・〜形の",     color:"#74C0FC" },
    { key:"-phyte", label:"-phyte",      meaning:"植物・生物体",         color:"#A9E34B" },
    { key:"-cide",  label:"-cide",       meaning:"殺すもの・殺すこと",   color:"#FF6B6B" },
    { key:"-gamy",  label:"-gamy",       meaning:"婚姻・生殖",           color:"#F783AC" },
    { key:"-lysis", label:"-lysis",      meaning:"分解・溶解・崩壊",     color:"#C77DFF" },
    { key:"-pathy", label:"-pathy",      meaning:"感情・疾患・療法",      color:"#FFA94D" },
    { key:"-scope", label:"-scope",      meaning:"観察する器具",          color:"#51CF66" },
    { key:"-cracy", label:"-cracy",      meaning:"統治・支配",            color:"#FFD43B" },
    { key:"-archy", label:"-archy",      meaning:"支配・統治の形",        color:"#B197FC" },
  ];

  // 語根マスター
  const ROOTS = [
    { key:"-graph-",  label:"-graph-",  meaning:"書く・記録する",     color:"#FF6B9D" },
    { key:"-port-",   label:"-port-",   meaning:"運ぶ・持つ",         color:"#C77DFF" },
    { key:"-ject-",   label:"-ject-",   meaning:"投げる",             color:"#74C0FC" },
    { key:"-duct-",   label:"-duct-",   meaning:"導く・引く",         color:"#69DB7C" },
    { key:"-spec-",   label:"-spec-",   meaning:"見る・観察する",     color:"#FFD43B" },
    { key:"-scrib-",  label:"-scrib-",  meaning:"書く",               color:"#FFA94D" },
    { key:"-vert-",   label:"-vert-",   meaning:"向ける・変える",     color:"#FF6B6B" },
    { key:"-dict-",   label:"-dict-",   meaning:"言う・述べる",       color:"#CC5DE8" },
    { key:"-struct-", label:"-struct-", meaning:"構築する",           color:"#339AF0" },
    { key:"-rupt-",   label:"-rupt-",   meaning:"破る・壊す",         color:"#51CF66" },
    { key:"-cred-",   label:"-cred-",   meaning:"信じる",             color:"#FF8787" },
    { key:"-aud-",    label:"-aud-",    meaning:"聞く",               color:"#F783AC" },
    { key:"-vis-",    label:"-vis-",    meaning:"見る",               color:"#A9E34B" },
    { key:"-sent-",   label:"-sent-",   meaning:"感じる・送る",       color:"#FFD43B" },
    { key:"-ped-",    label:"-ped-",    meaning:"足・子供",           color:"#B197FC" },
    { key:"-phil-",   label:"-phil-",   meaning:"愛する",             color:"#63E6BE" },
    { key:"-phob-",   label:"-phob-",   meaning:"恐れる",             color:"#FF6B9D" },
    { key:"-gen-",    label:"-gen-",    meaning:"生まれる・生み出す", color:"#74C0FC" },
    { key:"-morph-",  label:"-morph-",  meaning:"形・形態",           color:"#C77DFF" },
    { key:"-chron-",  label:"-chron-",  meaning:"時間",               color:"#69DB7C" },
    { key:"-loc-",    label:"-loc-",    meaning:"場所",               color:"#FFD43B" },
    { key:"-mot-",    label:"-mot-",    meaning:"動く・動かす",       color:"#FFA94D" },
    { key:"-nat-",    label:"-nat-",    meaning:"生まれる・本来の",   color:"#FF6B6B" },
    { key:"-nom-",    label:"-nom-",    meaning:"名前・法則",         color:"#CC5DE8" },
    { key:"-pend-",   label:"-pend-",   meaning:"ぶら下がる・量る",   color:"#339AF0" },
    { key:"-sci-",    label:"-sci-",    meaning:"知る・知識",         color:"#51CF66" },
    { key:"-sign-",   label:"-sign-",   meaning:"印・示す",           color:"#FF8787" },
    { key:"-sol-",    label:"-sol-",    meaning:"太陽・一人・慰める", color:"#F783AC" },
    { key:"-tang-",   label:"-tang-",   meaning:"触れる・接触",       color:"#A9E34B" },
    { key:"-tempor-", label:"-tempor-", meaning:"時間・時期",         color:"#FFD43B" },
    { key:"-ten-",    label:"-ten-",    meaning:"保つ・持つ",         color:"#B197FC" },
    { key:"-tort-",   label:"-tort-",   meaning:"ねじる・歪める",     color:"#63E6BE" },
    { key:"-tract-",  label:"-tract-",  meaning:"引く",               color:"#FF6B9D" },
    { key:"-act-",    label:"-act-",    meaning:"行う・駆り立てる",   color:"#FF8787" },
    { key:"-ann-",    label:"-ann-",    meaning:"年・年ごとの",       color:"#A9E34B" },
    { key:"-apt-",    label:"-apt-",    meaning:"適する・適合する",   color:"#FFA94D" },
    { key:"-arch-",   label:"-arch-",   meaning:"統治する・最初の",   color:"#C77DFF" },
    { key:"-brev-",   label:"-brev-",   meaning:"短い",               color:"#69DB7C" },
    { key:"-cede-",   label:"-cede-",   meaning:"行く・譲る",         color:"#74C0FC" },
    { key:"-cert-",   label:"-cert-",   meaning:"確かな・明確な",     color:"#B197FC" },
    { key:"-cide-",   label:"-cide-",   meaning:"切る・殺す",         color:"#FF6B6B" },
    { key:"-claim-",  label:"-claim-",  meaning:"叫ぶ・宣言する",     color:"#F783AC" },
    { key:"-clar-",   label:"-clar-",   meaning:"明確な・輝く",       color:"#FFD43B" },
    { key:"-clud-",   label:"-clud-",   meaning:"閉じる・含む",       color:"#51CF66" },
    { key:"-cogn-",   label:"-cogn-",   meaning:"知る・認識する",     color:"#63E6BE" },
    { key:"-cord-",   label:"-cord-",   meaning:"心・合意・弦",       color:"#FF6B9D" },
    { key:"-corp-",   label:"-corp-",   meaning:"体・物体",           color:"#74C0FC" },
    { key:"-cosm-",   label:"-cosm-",   meaning:"世界・宇宙",         color:"#C77DFF" },
    { key:"-cur-",    label:"-cur-",    meaning:"走る・流れる",       color:"#A9E34B" },
    { key:"-doc-",    label:"-doc-",    meaning:"教える・正式の",     color:"#FFA94D" },
    { key:"-dur-",    label:"-dur-",    meaning:"硬い・続く・耐える", color:"#FF8787" },
    { key:"-equ-",    label:"-equ-",    meaning:"等しい・公平な",     color:"#69DB7C" },
    { key:"-err-",    label:"-err-",    meaning:"さまよう・間違える", color:"#B197FC" },
    { key:"-fid-",    label:"-fid-",    meaning:"信じる・信頼する",   color:"#FF6B9D" },
    { key:"-fin-",    label:"-fin-",    meaning:"終わり・限界・目的", color:"#FFD43B" },
    { key:"-firm-",   label:"-firm-",   meaning:"固い・強固な",       color:"#51CF66" },
    { key:"-flex-",   label:"-flex-",   meaning:"曲げる・反射する",   color:"#F783AC" },
    { key:"-flu-",    label:"-flu-",    meaning:"流れる",             color:"#74C0FC" },
    { key:"-form-",   label:"-form-",   meaning:"形・形作る",         color:"#C77DFF" },
    { key:"-fort-",   label:"-fort-",   meaning:"強い・要塞",         color:"#63E6BE" },
    { key:"-frag-",   label:"-frag-",   meaning:"砕く・破る",         color:"#FF8787" },
    { key:"-fund-",   label:"-fund-",   meaning:"注ぐ・広がる",       color:"#A9E34B" },
    { key:"-grat-",   label:"-grat-",   meaning:"感謝・好意",         color:"#FFA94D" },
    { key:"-grav-",   label:"-grav-",   meaning:"重い・重力",         color:"#FF6B6B" },
    { key:"-hab-",    label:"-hab-",    meaning:"持つ・保つ・住む",   color:"#B197FC" },
    { key:"-her-",    label:"-her-",    meaning:"くっつく・固守する", color:"#F783AC" },
    { key:"-jud-",    label:"-jud-",    meaning:"判断する・誓う",     color:"#FFD43B" },
    { key:"-junct-",  label:"-junct-",  meaning:"結合する・接合する", color:"#51CF66" },
    { key:"-lat-",    label:"-lat-",    meaning:"運ぶ・広がる",       color:"#74C0FC" },
    { key:"-leg-",    label:"-leg-",    meaning:"選ぶ・読む・集める", color:"#C77DFF" },
    { key:"-liber-",  label:"-liber-",  meaning:"自由・解放",         color:"#69DB7C" },
    { key:"-ling-",   label:"-ling-",   meaning:"言語・舌",           color:"#FF6B9D" },
    { key:"-liter-",  label:"-liter-",  meaning:"文字・文学",         color:"#A9E34B" },
    { key:"-magn-",   label:"-magn-",   meaning:"大きい・偉大な",     color:"#FFA94D" },
    { key:"-medi-",   label:"-medi-",   meaning:"中間・中央",         color:"#FF8787" },
    { key:"-memor-",  label:"-memor-",  meaning:"覚える・記憶",       color:"#B197FC" },
    { key:"-migr-",   label:"-migr-",   meaning:"移動する・移住する", color:"#63E6BE" },
    { key:"-min-",    label:"-min-",    meaning:"小さい・突き出る",   color:"#FFD43B" },
    { key:"-miss-",   label:"-miss-",   meaning:"送る・放つ",         color:"#51CF66" },
    { key:"-mord-",   label:"-mord-",   meaning:"噛む・死",           color:"#FF6B6B" },
    { key:"-navig-",  label:"-navig-",  meaning:"船・航行する",       color:"#F783AC" },
    { key:"-nomin-",  label:"-nomin-",  meaning:"名前・法則",         color:"#74C0FC" },
    { key:"-nov-",    label:"-nov-",    meaning:"新しい",             color:"#C77DFF" },
  ];

  // カテゴリマスター
  const CATEGORIES = [
    { key:"TOEFL",    label:"TOEFL/IELTS", meaning:"TOEFL・IELTS頻出語", color:"#339AF0" },
    { key:"GRE",      label:"GRE/SAT",     meaning:"GRE・SAT頻出語",     color:"#CC5DE8" },
    { key:"business", label:"ビジネス",    meaning:"ビジネス用語",       color:"#51CF66" },
    { key:"academic", label:"学術",        meaning:"学術用語",           color:"#FFD43B" },
    { key:"medical",  label:"医学",        meaning:"医学・医療用語",     color:"#FF6B6B" },
    { key:"SAT",      label:"SAT",         meaning:"SAT頻出語",          color:"#FF8787" },
    { key:"IELTS",    label:"IELTS",       meaning:"IELTS頻出語",        color:"#74C0FC" },
    { key:"Business", label:"ビジネス2",   meaning:"ビジネス英語",       color:"#A9E34B" },
    { key:"Academic", label:"学術2",       meaning:"学術英語",           color:"#FFA94D" },
  ];

  // レベル名
  const LEVEL_NAMES = ["初級", "中級", "上級", "マスター"];
  const LEVEL_TITLES = [
    ["ビギナー","初心者","見習い","探求者"],
    ["語学ファン","単語マスター","語彙戦士","英語の達人"],
    ["語源ハンター","上級者","エキスパート","語源博士"],
    ["マスター","グランドマスター","語源の神","語源神話"]
  ];

  // XPテーブル（レベルアップに必要なXP）
  const XP_TABLE = [
    100, 200, 350, 550, 800,        // Lv1-5
    1100, 1500, 2000, 2600, 3300,   // Lv6-10
    4100, 5000, 6000, 7200, 8500,   // Lv11-15
    10000, 11700, 13600, 15700, 18000 // Lv16-20
  ];

  let _byPrefix = null;
  let _bySuffix = null;
  let _byRoot = null;
  let _byCategory = null;

  function _buildIndex() {
    if (_byPrefix) return;
    _byPrefix = {};
    _bySuffix = {};
    _byRoot = {};
    _byCategory = {};
    const raw = window.WORD_DATA_RAW || [];
    for (const w of raw) {
      if (w.prefix) {
        if (!_byPrefix[w.prefix]) _byPrefix[w.prefix] = [];
        _byPrefix[w.prefix].push(w);
      }
      if (w.suffix) {
        // -sion は -tion にまとめる
        const sk = w.suffix === "-sion" ? "-tion" : w.suffix;
        // -or は -er にまとめる
        const sk2 = sk === "-or" ? "-er" : sk;
        // -ible は -able にまとめる
        const sk3 = sk2 === "-ible" ? "-able" : sk2;
        // -ance は -ence にまとめる
        const sk4 = sk3 === "-ance" ? "-ence" : sk3;
        // -ory は -ary にまとめる
        const sk5 = sk4 === "-ory" ? "-ary" : sk4;
        // -ious は -ous にまとめる
        const sk6 = sk5 === "-ious" ? "-ous" : sk5;
        if (!_bySuffix[sk6]) _bySuffix[sk6] = [];
        _bySuffix[sk6].push(w);
      }
      if (w.root) {
        if (!_byRoot[w.root]) _byRoot[w.root] = [];
        _byRoot[w.root].push(w);
      }
      if (w.category) {
        if (!_byCategory[w.category]) _byCategory[w.category] = [];
        _byCategory[w.category].push(w);
      }
    }
  }

  function getWordsByPrefix(prefix, level) {
    _buildIndex();
    let words = _byPrefix[prefix] || [];
    if (level !== undefined) words = words.filter(w => w.level <= level);
    return words;
  }

  function getWordsBySuffix(suffix, level) {
    _buildIndex();
    let words = _bySuffix[suffix] || [];
    if (level !== undefined) words = words.filter(w => w.level <= level);
    return words;
  }

  function getAllWords(level) {
    const raw = window.WORD_DATA_RAW || [];
    if (level === undefined) return raw;
    return raw.filter(w => w.level <= level);
  }

  function getPrefixInfo(key) {
    return PREFIXES.find(p => p.key === key) || { key, label: key, meaning:"", color:"#C77DFF" };
  }

  function getSuffixInfo(key) {
    return SUFFIXES.find(s => s.key === key) || { key, label: key, meaning:"", color:"#FF6B9D" };
  }

  function getPrefixWordCount(prefix, level) {
    return getWordsByPrefix(prefix, level).length;
  }

  function getSuffixWordCount(suffix, level) {
    return getWordsBySuffix(suffix, level).length;
  }

  function getWordsByRoot(root, level) {
    _buildIndex();
    let words = _byRoot[root] || [];
    if (level !== undefined) words = words.filter(w => w.level <= level);
    return words;
  }

  function getRootInfo(key) {
    return ROOTS.find(r => r.key === key) || { key, label: key, meaning:"", color:"#74C0FC" };
  }

  function getRootWordCount(root, level) {
    return getWordsByRoot(root, level).length;
  }

  function getWordsByCategory(category, level) {
    _buildIndex();
    let words = _byCategory[category] || [];
    if (level !== undefined) words = words.filter(w => w.level <= level);
    return words;
  }

  function getCategoryInfo(key) {
    return CATEGORIES.find(c => c.key === key) || { key, label: key, meaning:"", color:"#FFA94D" };
  }

  function getCategoryWordCount(category, level) {
    return getWordsByCategory(category, level).length;
  }

  function getLevelName(level) {
    return LEVEL_NAMES[level] || "不明";
  }

  function getLevelTitle(userLevel) {
    const row = Math.min(Math.floor(userLevel / 5), 3);
    const col = Math.min(userLevel % 5, 3);
    return LEVEL_TITLES[row][col];
  }

  function getXpForLevel(level) {
    return XP_TABLE[Math.min(level, XP_TABLE.length - 1)] || 99999;
  }

  function calcUserLevel(totalXp) {
    let xp = totalXp;
    let level = 1;
    while (level < 20 && xp >= getXpForLevel(level)) {
      xp -= getXpForLevel(level);
      level++;
    }
    return { level, currentXp: xp, nextXp: getXpForLevel(level) };
  }

  // ランダムシャッフル（Fisher-Yates）
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return {
    PREFIXES,
    SUFFIXES,
    ROOTS,
    CATEGORIES,
    getWordsByPrefix,
    getWordsBySuffix,
    getAllWords,
    getPrefixInfo,
    getSuffixInfo,
    getPrefixWordCount,
    getSuffixWordCount,
    getWordsByRoot,
    getRootInfo,
    getRootWordCount,
    getWordsByCategory,
    getCategoryInfo,
    getCategoryWordCount,
    getLevelName,
    getLevelTitle,
    getXpForLevel,
    calcUserLevel,
    shuffle,
  };
})();
