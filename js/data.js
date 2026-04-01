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
  ];

  // 語根マスター
  const ROOTS = [
    { key:"-cap-",      label:"-cap-/-cept-",  meaning:"取る・つかむ",         color:"#FF6B9D" },
    { key:"-cred-",     label:"-cred-",        meaning:"信じる",               color:"#C77DFF" },
    { key:"-cur-",      label:"-cur-/-curs-",  meaning:"走る・流れる",         color:"#74C0FC" },
    { key:"-dict-",     label:"-dict-",        meaning:"言う・告げる",         color:"#69DB7C" },
    { key:"-duc-",      label:"-duc-/-duct-",  meaning:"導く・引く",           color:"#FFD43B" },
    { key:"-fer-",      label:"-fer-",         meaning:"運ぶ・もたらす",       color:"#FFA94D" },
    { key:"-grad-",     label:"-grad-/-gress-",meaning:"歩む・進む",           color:"#FF6B6B" },
    { key:"-graph-",    label:"-graph-/-gram-",meaning:"書く・記録する",       color:"#CC5DE8" },
    { key:"-grat-",     label:"-grat-",        meaning:"喜ぶ・感謝する",       color:"#339AF0" },
    { key:"-here-",     label:"-here-/-hes-",  meaning:"くっつく",             color:"#51CF66" },
    { key:"-ject-",     label:"-ject-",        meaning:"投げる",               color:"#FF8787" },
    { key:"-jur-",      label:"-jur-/-jus-",   meaning:"誓う・法・正義",       color:"#F783AC" },
    { key:"-labor-",    label:"-labor-",       meaning:"働く・努力する",       color:"#A9E34B" },
    { key:"-lect-",     label:"-lect-/-leg-",  meaning:"選ぶ・集める・読む",   color:"#FFD43B" },
    { key:"-liber-",    label:"-liber-",       meaning:"自由",                 color:"#B197FC" },
    { key:"-lingu-",    label:"-lingu-",       meaning:"言語・舌",             color:"#63E6BE" },
    { key:"-liter-",    label:"-liter-",       meaning:"文字・文学",           color:"#FF6B9D" },
    { key:"-loc-",      label:"-loc-",         meaning:"場所",                 color:"#74C0FC" },
    { key:"-log-",      label:"-log-/-logue-", meaning:"言葉・学問・論理",     color:"#C77DFF" },
    { key:"-loqu-",     label:"-loqu-",        meaning:"話す",                 color:"#69DB7C" },
    { key:"-luc-",      label:"-luc-/-lum-",   meaning:"光",                   color:"#FFA94D" },
    { key:"-man-",      label:"-man-/-manu-",  meaning:"手",                   color:"#FF6B6B" },
    { key:"-med-",      label:"-med-/-medi-",  meaning:"中間・医療",           color:"#CC5DE8" },
    { key:"-mem-",      label:"-mem-",         meaning:"記憶する",             color:"#339AF0" },
    { key:"-mit-",      label:"-mit-/-miss-",  meaning:"送る",                 color:"#51CF66" },
    { key:"-mor-",      label:"-mor-/-mort-",  meaning:"死",                   color:"#FF8787" },
    { key:"-mot-",      label:"-mot-/-mov-",   meaning:"動く",                 color:"#F783AC" },
    { key:"-nat-",      label:"-nat-/-nasc-",  meaning:"生まれる",             color:"#A9E34B" },
    { key:"-nom-",      label:"-nom-/-nym-",   meaning:"名前・法則",           color:"#FFD43B" },
    { key:"-path-",     label:"-path-",        meaning:"感情・苦しみ",         color:"#B197FC" },
    { key:"-ped-",      label:"-ped-/-pod-",   meaning:"足",                   color:"#63E6BE" },
    { key:"-pend-",     label:"-pend-/-pens-", meaning:"ぶら下がる・支払う",   color:"#FF6B9D" },
    { key:"-phil-",     label:"-phil-",        meaning:"愛する",               color:"#74C0FC" },
    { key:"-phon-",     label:"-phon-",        meaning:"音・声",               color:"#C77DFF" },
    { key:"-plic-",     label:"-plic-/-ply-",  meaning:"折る・重ねる",         color:"#69DB7C" },
    { key:"-port-",     label:"-port-",        meaning:"運ぶ",                 color:"#FFA94D" },
    { key:"-pos-",      label:"-pos-/-pon-",   meaning:"置く",                 color:"#FF6B6B" },
    { key:"-press-",    label:"-press-",       meaning:"押す",                 color:"#CC5DE8" },
    { key:"-prim-",     label:"-prim-/-princ-",meaning:"最初・主要な",         color:"#339AF0" },
    { key:"-prob-",     label:"-prob-/-prov-", meaning:"証明する・試す",       color:"#51CF66" },
    { key:"-put-",      label:"-put-",         meaning:"考える・計算する",     color:"#FF8787" },
    { key:"-quer-",     label:"-quer-/-quest-",meaning:"求める・尋ねる",       color:"#F783AC" },
    { key:"-reg-",      label:"-reg-/-rect-",  meaning:"支配する・導く",       color:"#A9E34B" },
    { key:"-rog-",      label:"-rog-",         meaning:"尋ねる・求める",       color:"#FFD43B" },
    { key:"-rupt-",     label:"-rupt-",        meaning:"壊す・破る",           color:"#B197FC" },
    { key:"-sacr-",     label:"-sacr-/-sanct-",meaning:"神聖な",               color:"#63E6BE" },
    { key:"-sci-",      label:"-sci-",         meaning:"知る",                 color:"#FF6B9D" },
    { key:"-scop-",     label:"-scop-",        meaning:"見る・観察する",       color:"#74C0FC" },
    { key:"-scrib-",    label:"-scrib-/-script-",meaning:"書く",               color:"#C77DFF" },
    { key:"-sec-",      label:"-sec-/-sect-",  meaning:"切る",                 color:"#69DB7C" },
    { key:"-sens-",     label:"-sens-/-sent-", meaning:"感じる",               color:"#FFA94D" },
    { key:"-sequ-",     label:"-sequ-/-secut-",meaning:"従う・続く",           color:"#FF6B6B" },
    { key:"-sign-",     label:"-sign-",        meaning:"印・合図",             color:"#CC5DE8" },
    { key:"-simil-",    label:"-simil-/-simul-",meaning:"似ている",             color:"#339AF0" },
    { key:"-sol-",      label:"-sol-",         meaning:"太陽・一人",           color:"#51CF66" },
    { key:"-solv-",     label:"-solv-/-solu-", meaning:"解く・緩める",         color:"#FF8787" },
    { key:"-soph-",     label:"-soph-",        meaning:"知恵・賢さ",           color:"#F783AC" },
    { key:"-spect-",    label:"-spect-/-spic-",meaning:"見る",                 color:"#A9E34B" },
    { key:"-spir-",     label:"-spir-",        meaning:"息をする・精神",       color:"#FFD43B" },
    { key:"-string-",   label:"-string-/-strict-",meaning:"縛る・締める",      color:"#B197FC" },
    { key:"-stru-",     label:"-stru-/-struct-",meaning:"積む・構造",          color:"#63E6BE" },
    { key:"-tang-",     label:"-tang-/-tact-", meaning:"触れる",               color:"#FF6B9D" },
    { key:"-tempor-",   label:"-tempor-",      meaning:"時間",                 color:"#74C0FC" },
    { key:"-ten-",      label:"-ten-/-tain-",  meaning:"持つ・保つ",           color:"#C77DFF" },
    { key:"-terr-",     label:"-terr-",        meaning:"土地・大地",           color:"#69DB7C" },
    { key:"-the-",      label:"-the-/-theo-",  meaning:"神",                   color:"#FFA94D" },
    { key:"-tract-",    label:"-tract-",       meaning:"引く",                 color:"#FF6B6B" },
    { key:"-vac-",      label:"-vac-",         meaning:"空の",                 color:"#CC5DE8" },
    { key:"-val-",      label:"-val-/-vail-",  meaning:"強い・価値がある",     color:"#339AF0" },
    { key:"-ven-",      label:"-ven-/-vent-",  meaning:"来る",                 color:"#51CF66" },
    { key:"-ver-",      label:"-ver-/-veri-",  meaning:"真実",                 color:"#FF8787" },
    { key:"-vid-",      label:"-vid-/-vis-",   meaning:"見る",                 color:"#F783AC" },
    { key:"-viv-",      label:"-viv-/-vit-",   meaning:"生きる",               color:"#A9E34B" },
    { key:"-voc-",      label:"-voc-/-vok-",   meaning:"声・呼ぶ",             color:"#FFD43B" },
    { key:"-scend-",    label:"-scend-/-scens-",meaning:"登る・上がる",        color:"#B197FC" },
    { key:"-geo-",      label:"-geo-",         meaning:"地球・土地",           color:"#63E6BE" },
    { key:"-anthropo-", label:"-anthropo-",    meaning:"人間",                 color:"#FF6B9D" },
    { key:"-vert-",     label:"-vert-",        meaning:"向ける・回す",         color:"#74C0FC" },
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

  function _buildIndex() {
    if (_byPrefix) return;
    _byPrefix = {};
    _bySuffix = {};
    _byRoot = {};
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
    getWordsByPrefix,
    getWordsBySuffix,
    getWordsByRoot,
    getAllWords,
    getPrefixInfo,
    getSuffixInfo,
    getRootInfo,
    getPrefixWordCount,
    getSuffixWordCount,
    getRootWordCount,
    getLevelName,
    getLevelTitle,
    getXpForLevel,
    calcUserLevel,
    shuffle,
  };
})();
