/**
 * data-root-10.js — 語根データ（-cur-, -doc-, -dur-, -equ-, -err-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -cur-/-cour-（走る・流れる・起こる） ──────────────────
  {word:"occur",         meaning:"起こる・発生する",            etymology:"oc（〜に）+ cur（走る）→走り込む→起こる", root:"-cur-", level:1, pos:"動詞"},
  {word:"current",       meaning:"現在の・流れ",               etymology:"cur（走る）+ rent（〜の状態）",           root:"-cur-", level:1, pos:"形容詞・名詞"},
  {word:"course",        meaning:"コース・進路・過程",           etymology:"cour（走る）+ se→流れの道",              root:"-cur-", level:1, pos:"名詞"},
  {word:"concur",        meaning:"同意する・同時に起こる",       etymology:"con（共に）+ cur（走る）",               root:"-cur-", level:5, pos:"動詞"},
  {word:"recur",         meaning:"再発する・繰り返す",           etymology:"re（再び）+ cur（走る）",               root:"-cur-", level:5, pos:"動詞"},
  {word:"incur",         meaning:"招く・被る（損失など）",       etymology:"in（中に）+ cur（走る）",               root:"-cur-", level:5, pos:"動詞・名詞"},
  {word:"excursion",     meaning:"遠足・小旅行",               etymology:"ex（外に）+ curs（走る）+ ion（行為）",   root:"-cur-", level:5, pos:"名詞"},
  {word:"currency",      meaning:"通貨・流通",                  etymology:"cur（流れる）+ rency（状態）",            root:"-cur-", level:3, pos:"名詞"},
  {word:"precursor",     meaning:"前駆者・先駆け",              etymology:"pre（前に）+ curs（走る）+ or（もの）",  root:"-cur-", level:6, pos:"名詞"},
  {word:"discourse",     meaning:"談話・論説",                  etymology:"dis（離れて）+ course（流れ）",           root:"-cur-", level:5, pos:"名詞"},
  {word:"cursory",       meaning:"ざっとした・急いだ",           etymology:"curs（走る）+ ory（性質）",              root:"-cur-", level:6, pos:"形容詞"},
  {word:"cursor",        meaning:"カーソル・走る人",             etymology:"curs（走る）+ or（〜するもの）",         root:"-cur-", level:3, pos:"名詞"},
  {word:"occurrence",    meaning:"発生・出来事",                etymology:"occur（起こる）+ rence（状態）",          root:"-cur-", level:3, pos:"名詞"},
  {word:"concurrent",    meaning:"同時の・並行した",            etymology:"con（共に）+ current（流れる）",          root:"-cur-", level:5, pos:"形容詞"},
  {word:"courier",       meaning:"クーリエ・急使",              etymology:"cour（走る）+ ier（人）",                root:"-cur-", level:5, pos:"名詞"},
  {word:"recurrence",    meaning:"再発・繰り返し",              etymology:"recur（再発する）+ rence（状態）",        root:"-cur-", level:5, pos:"名詞"},
  {word:"intercourse",   meaning:"交流・性交",                  etymology:"inter（間に）+ course（流れ）",           root:"-cur-", level:5, pos:"名詞"},
  {word:"incursion",     meaning:"侵入・侵略",                  etymology:"in（中に）+ curs（走る）+ ion（行為）",  root:"-cur-", level:6, pos:"名詞"},

  // ── -doc-/-doct-（教える・正式の） ──────────────────
  {word:"doctor",        meaning:"医師・博士",                 etymology:"doc（教える）+ tor（人）",               root:"-doc-", level:1, pos:"名詞"},
  {word:"document",      meaning:"書類・文書",                 etymology:"doc（正式な）+ ument（結果）",            root:"-doc-", level:2, pos:"名詞"},
  {word:"doctrine",      meaning:"教義・主義",                 etymology:"doct（教える）+ rine（〜のもの）",        root:"-doc-", level:5, pos:"名詞"},
  {word:"docile",        meaning:"従順な・おとなしい",          etymology:"doc（教える）+ ile（できる）→教えやすい", root:"-doc-", level:5, pos:"形容詞"},
  {word:"documentary",   meaning:"記録映画・文書の",            etymology:"document（書類）+ ary（〜に関する）",     root:"-doc-", level:4, pos:"名詞・形容詞"},
  {word:"doctorate",     meaning:"博士号",                     etymology:"doctor（博士）+ ate（地位）",            root:"-doc-", level:5, pos:"名詞"},
  {word:"indoctrinate",  meaning:"思想を植え付ける",            etymology:"in（中に）+ doctrine（教義）+ ate（する）",root:"-doc-",level:6, pos:"動詞"},
  {word:"documentation", meaning:"文書化・資料",               etymology:"document（書類）+ ation（行為）",         root:"-doc-", level:6, pos:"名詞"},
  {word:"unorthodox",    meaning:"型破りの・正統でない",        etymology:"un（否定）+ orthodox（正統な）",          root:"-doc-", level:5, pos:"形容詞"},
  {word:"orthodox",      meaning:"正統的な・保守的な",          etymology:"ortho（正しい）+ dox（意見）",           root:"-doc-", level:5, pos:"形容詞"},
  {word:"paradox",       meaning:"逆説・パラドックス",          etymology:"para（反対の）+ dox（意見）",            root:"-doc-", level:5, pos:"名詞"},
  {word:"dogma",         meaning:"教義・独断",                 etymology:"dog（思う）+ ma（〜のもの）",            root:"-doc-", level:6, pos:"名詞"},
  {word:"dogmatic",      meaning:"独断的な・教条的な",          etymology:"dogma（教義）+ tic（〜の）",             root:"-doc-", level:6, pos:"形容詞"},
  {word:"docent",        meaning:"学芸員・非常勤講師",          etymology:"doc（教える）+ ent（する人）",           root:"-doc-", level:6, pos:"名詞"},

  // ── -dur-（硬い・続く・耐える） ──────────────────
  {word:"during",        meaning:"〜の間",                     etymology:"dur（続く）+ ing（〜しながら）",          root:"-dur-", level:1, pos:"名詞"},
  {word:"endure",        meaning:"耐える・続く",               etymology:"en（中に）+ dure（続く）",               root:"-dur-", level:3, pos:"動詞"},
  {word:"durable",       meaning:"耐久性のある・長持ちする",    etymology:"dur（続く）+ able（できる）",            root:"-dur-", level:5, pos:"動詞"},
  {word:"duration",      meaning:"継続時間・期間",              etymology:"dur（続く）+ ation（行為）",             root:"-dur-", level:5, pos:"名詞"},
  {word:"duress",        meaning:"強制・脅迫",                  etymology:"dur（硬い）+ ess（状態）",               root:"-dur-", level:6, pos:"名詞"},
  {word:"obdurate",      meaning:"頑固な・頑迷な",              etymology:"ob（完全に）+ dur（硬い）+ ate（〜な）",  root:"-dur-", level:6, pos:"形容詞"},
  {word:"perdure",       meaning:"存続する・永続する",           etymology:"per（完全に）+ dure（続く）",            root:"-dur-", level:6, pos:"動詞"},
  {word:"indurate",      meaning:"硬化する・鈍感にする",        etymology:"in（中に）+ dur（硬い）+ ate（する）",   root:"-dur-", level:6, pos:"動詞"},
  {word:"durability",    meaning:"耐久性",                      etymology:"durable（耐久性のある）+ ity（状態）",   root:"-dur-", level:6, pos:"名詞"},
  {word:"endurance",     meaning:"忍耐・耐久力",               etymology:"endure（耐える）+ ance（状態）",         root:"-dur-", level:3, pos:"名詞"},
  {word:"durance",       meaning:"監禁・束縛",                  etymology:"dur（続く）+ ance（状態）",              root:"-dur-", level:6, pos:"名詞"},
  {word:"dura mater",    meaning:"硬膜（脳膜）",               etymology:"dura（硬い）+ mater（母）",              root:"-dur-", level:6, pos:"名詞"},
  {word:"durum",         meaning:"デュラム小麦",                etymology:"dur（硬い）+ um（〜の）",               root:"-dur-", level:6, pos:"名詞"},

  // ── -equ-/-equi-（等しい・公平な） ──────────────────
  {word:"equal",         meaning:"等しい・平等な",              etymology:"equ（等しい）+ al（〜の）",              root:"-equ-", level:1, pos:"形容詞"},
  {word:"equip",         meaning:"装備する・準備する",           etymology:"equip（等しくする→準備する）",            root:"-equ-", level:3, pos:"動詞"},
  {word:"equity",        meaning:"公平・株式",                  etymology:"equ（等しい）+ ity（状態）",             root:"-equ-", level:5, pos:"名詞"},
  {word:"equate",        meaning:"等しいと見なす",               etymology:"equ（等しい）+ ate（する）",             root:"-equ-", level:5, pos:"動詞"},
  {word:"equinox",       meaning:"春分・秋分（昼夜等分）",       etymology:"equi（等しい）+ nox（夜）",              root:"-equ-", level:5, pos:"名詞"},
  {word:"adequate",      meaning:"十分な・適切な",              etymology:"ad（〜に）+ equate（等しくする）",        root:"-equ-", level:3, pos:"形容詞"},
  {word:"equable",       meaning:"平静な・安定した",             etymology:"equ（等しい）+ able（できる）",          root:"-equ-", level:6, pos:"形容詞"},
  {word:"equanimity",    meaning:"平静さ・冷静",                etymology:"equi（等しい）+ animity（精神）",         root:"-equ-", level:7, pos:"名詞"},
  {word:"equivocate",    meaning:"言葉を曖昧にする",             etymology:"equi（等しい）+ voc（声）+ ate（する）→二通りの意味を言う",root:"-equ-",level:6, pos:"動詞"},
  {word:"equilibrium",   meaning:"均衡・平衡",                  etymology:"equi（等しい）+ librium（重さ）",         root:"-equ-", level:5, pos:"名詞"},
  {word:"equality",      meaning:"平等・同等",                  etymology:"equal（等しい）+ ity（状態）",           root:"-equ-", level:2, pos:"名詞"},
  {word:"equitable",     meaning:"公正な・公平な",              etymology:"equity（公平）+ able（できる）",          root:"-equ-", level:5, pos:"形容詞"},
  {word:"unequal",       meaning:"不平等な",                    etymology:"un（否定）+ equal（等しい）",            root:"-equ-", level:2, pos:"形容詞"},
  {word:"equation",      meaning:"方程式・等式",                etymology:"equate（等しくする）+ ion（行為）",       root:"-equ-", level:3, pos:"名詞"},
  {word:"equilateral",   meaning:"等辺の",                      etymology:"equi（等しい）+ lateral（側の）",        root:"-equ-", level:6, pos:"形容詞"},

  // ── -err-（さまよう・間違える） ──────────────────
  {word:"error",         meaning:"誤り・エラー",                etymology:"err（間違える）+ or（状態）",            root:"-err-", level:1, pos:"名詞"},
  {word:"erratic",       meaning:"不規則な・一定しない",         etymology:"err（さまよう）+ atic（〜な）",           root:"-err-", level:5, pos:"形容詞"},
  {word:"errant",        meaning:"さまよう・誤った",             etymology:"err（さまよう）+ ant（〜な）",            root:"-err-", level:6, pos:"名詞・形容詞"},
  {word:"err",           meaning:"誤る・間違える",              etymology:"err（間違える）",                        root:"-err-", level:5, pos:"動詞"},
  {word:"erroneous",     meaning:"誤った・間違った",             etymology:"err（間違える）+ oneous（〜な）",        root:"-err-", level:5, pos:"形容詞"},
  {word:"aberrant",      meaning:"逸脱した・異常な",             etymology:"ab（離れて）+ err（さまよう）+ ant（〜な）",root:"-err-",level:6, pos:"形容詞"},
  {word:"aberration",    meaning:"逸脱・収差",                  etymology:"ab（離れて）+ err（さまよう）+ ation（行為）",root:"-err-",level:6, pos:"名詞"},
  {word:"erratum",       meaning:"正誤表・誤植",                etymology:"err（間違える）+ atum（〜のもの）",       root:"-err-", level:6, pos:"名詞"},
  {word:"inerrancy",     meaning:"無謬性",                      etymology:"in（否定）+ err（間違える）+ ancy（状態）",root:"-err-",level:6, pos:"名詞"},
  {word:"knight-errant", meaning:"遍歴の騎士",                  etymology:"knight（騎士）+ errant（さまよう）",     root:"-err-", level:6, pos:"名詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
