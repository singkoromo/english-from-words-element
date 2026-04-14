/**
 * data-root-7.js — 語根データ（-act-, -ann-, -apt-, -arch-, -brev-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -act-（行う・駆り立てる） ──────────────────
  {word:"act",           meaning:"行動・行為する",            etymology:"act（行う）",                             root:"-act-", level:0, pos:"名詞・動詞"},
  {word:"action",        meaning:"行動・活動",                etymology:"act（行う）+ ion（行為）",                root:"-act-", level:0, pos:"名詞"},
  {word:"actor",         meaning:"俳優・行為者",              etymology:"act（行う）+ or（人）",                  root:"-act-", level:0, pos:"名詞"},
  {word:"active",        meaning:"活動的な・積極的な",         etymology:"act（行う）+ ive（性質）",               root:"-act-", level:0, pos:"形容詞"},
  {word:"react",         meaning:"反応する",                  etymology:"re（再び）+ act（行う）",                root:"-act-", level:0, pos:"動詞"},
  {word:"exact",         meaning:"正確な・要求する",           etymology:"ex（完全に）+ act（駆る）",              root:"-act-", level:1, pos:"形容詞・動詞"},
  {word:"extract",       meaning:"抽出する・引き抜く",         etymology:"ex（外に）+ tract（引く）",              root:"-act-", level:1, pos:"動詞"},
  {word:"transact",      meaning:"取引する・業務を行う",       etymology:"trans（横断して）+ act（行う）",          root:"-act-", level:2, pos:"動詞・名詞"},
  {word:"enact",         meaning:"制定する・演じる",           etymology:"en（〜にする）+ act（行う）",             root:"-act-", level:2, pos:"動詞"},
  {word:"interact",      meaning:"相互作用する",               etymology:"inter（互いに）+ act（行う）",            root:"-act-", level:1, pos:"動詞"},
  {word:"activate",      meaning:"活性化する",                etymology:"act（行う）+ ivate（〜にする）",          root:"-act-", level:1, pos:"動詞"},
  {word:"proactive",     meaning:"積極的な・先手を打つ",       etymology:"pro（前に）+ active（活動的）",           root:"-act-", level:2, pos:"形容詞・動詞"},
  {word:"counteract",    meaning:"相殺する・中和する",         etymology:"counter（反対に）+ act（行う）",          root:"-act-", level:2, pos:"動詞"},
  {word:"reenact",       meaning:"再現する・再制定する",        etymology:"re（再び）+ enact（制定する）",           root:"-act-", level:2, pos:"動詞"},
  {word:"actualize",     meaning:"現実化する",                etymology:"actual（現実の）+ ize（〜する）",         root:"-act-", level:2, pos:"動詞"},
  {word:"transaction",   meaning:"取引・業務",                etymology:"trans（横断して）+ action（行為）",       root:"-act-", level:1, pos:"名詞"},
  {word:"interaction",   meaning:"相互作用・交流",             etymology:"inter（互いに）+ action（行為）",         root:"-act-", level:1, pos:"名詞"},
  {word:"overreact",     meaning:"過剰反応する",               etymology:"over（過度に）+ react（反応する）",       root:"-act-", level:1, pos:"動詞"},
  {word:"hyperactive",   meaning:"多動性の・過活動の",         etymology:"hyper（超えて）+ active（活動的）",       root:"-act-", level:2, pos:"形容詞"},
  {word:"inactive",      meaning:"不活性の・不活発な",         etymology:"in（否定）+ active（活動的）",            root:"-act-", level:1, pos:"形容詞"},

  // ── -ann-/-enn-（年・年ごとの） ──────────────────
  {word:"annual",        meaning:"年1回の・年次の",           etymology:"ann（年）+ ual（〜の）",                 root:"-ann-", level:1, pos:"形容詞"},
  {word:"anniversary",   meaning:"記念日・周年",              etymology:"anni（年）+ versary（回る）",            root:"-ann-", level:0, pos:"名詞"},
  {word:"annuity",       meaning:"年金・年賦",                etymology:"ann（年）+ uity（〜の状態）",            root:"-ann-", level:2, pos:"名詞"},
  {word:"annals",        meaning:"年代記・年報",              etymology:"ann（年）+ als（〜のもの）",             root:"-ann-", level:3, pos:"名詞"},
  {word:"biennial",      meaning:"2年ごとの・2年生の",        etymology:"bi（二）+ ennial（年）",                root:"-ann-", level:2, pos:"形容詞"},
  {word:"centennial",    meaning:"100周年の",                 etymology:"cent（百）+ ennial（年）",              root:"-ann-", level:2, pos:"形容詞"},
  {word:"millennium",    meaning:"千年期・ミレニアム",          etymology:"milli（千）+ ennium（年）",             root:"-ann-", level:2, pos:"名詞"},
  {word:"perennial",     meaning:"多年生の・永続する",         etymology:"per（通じて）+ ennial（年）",            root:"-ann-", level:2, pos:"形容詞・動詞"},
  {word:"triennial",     meaning:"3年ごとの",                 etymology:"tri（三）+ ennial（年）",               root:"-ann-", level:3, pos:"形容詞"},
  {word:"quadrennial",   meaning:"4年ごとの",                 etymology:"quadr（四）+ ennial（年）",             root:"-ann-", level:3, pos:"形容詞"},
  {word:"sesquicentennial",meaning:"150周年の",              etymology:"sesqui（1.5倍）+ centennial（百年）",    root:"-ann-", level:3, pos:"形容詞"},
  {word:"semiannual",    meaning:"半年ごとの",                etymology:"semi（半）+ annual（年ごとの）",          root:"-ann-", level:2, pos:"形容詞"},
  {word:"superannuated", meaning:"老齢の・時代遅れの",         etymology:"super（超えて）+ ann（年）+ ated（された）",root:"-ann-",level:3, pos:"形容詞"},
  {word:"anno",          meaning:"紀元（Anno Domini）",       etymology:"ann（年）+ o（の）",                    root:"-ann-", level:2, pos:"名詞"},
  {word:"annualize",     meaning:"年換算する",                etymology:"annual（年次の）+ ize（〜する）",         root:"-ann-", level:2, pos:"動詞"},

  // ── -apt-（適する・適合する） ──────────────────
  {word:"apt",           meaning:"適切な・〜しがちな",         etymology:"apt（適する）",                          root:"-apt-", level:1, pos:"形容詞"},
  {word:"adapt",         meaning:"適応する・改造する",         etymology:"ad（〜に）+ apt（適する）",              root:"-apt-", level:1, pos:"動詞"},
  {word:"aptitude",      meaning:"素質・適性",                etymology:"apt（適する）+ itude（状態）",           root:"-apt-", level:2, pos:"名詞"},
  {word:"aptly",         meaning:"適切に・うまく",             etymology:"apt（適切な）+ ly（〜に）",              root:"-apt-", level:1, pos:"副詞・動詞"},
  {word:"inept",         meaning:"不適切な・無能な",           etymology:"in（否定）+ ept（適する）",              root:"-apt-", level:2, pos:"形容詞"},
  {word:"adept",         meaning:"熟達した・達人",             etymology:"ad（〜に）+ ept（適する）",              root:"-apt-", level:2, pos:"形容詞・名詞"},
  {word:"adoption",      meaning:"採用・養子縁組",             etymology:"ad（〜に）+ opt（選ぶ）+ ion（行為）",   root:"-apt-", level:1, pos:"名詞"},
  {word:"adaptive",      meaning:"適応的な・適応性のある",     etymology:"adapt（適応する）+ ive（性質）",         root:"-apt-", level:2, pos:"形容詞・動詞"},
  {word:"maladaptive",   meaning:"適応不全の",                etymology:"mal（悪い）+ adaptive（適応的）",        root:"-apt-", level:3, pos:"形容詞"},
  {word:"aptness",       meaning:"適切さ・妥当性",             etymology:"apt（適切な）+ ness（状態）",            root:"-apt-", level:2, pos:"名詞"},
  {word:"unapt",         meaning:"不適切な・〜しそうにない",    etymology:"un（否定）+ apt（適切な）",              root:"-apt-", level:2, pos:"形容詞"},
  {word:"adaptability",  meaning:"適応性",                    etymology:"adapt（適応する）+ ability（能力）",      root:"-apt-", level:2, pos:"名詞"},
  {word:"readapt",       meaning:"再適応する",                etymology:"re（再び）+ adapt（適応する）",           root:"-apt-", level:2, pos:"動詞"},
  {word:"apterous",      meaning:"翅のない（昆虫）",           etymology:"a（否定）+ pter（翼）+ ous（〜の）",     root:"-apt-", level:3, pos:"名詞"},

  // ── -arch-（統治する・最初の） ──────────────────
  {word:"monarch",       meaning:"君主・国王",                etymology:"mono（一人）+ arch（統治する）",          root:"-arch-", level:1, pos:"名詞"},
  {word:"anarchy",       meaning:"無政府状態",                etymology:"an（否定）+ arch（統治）",               root:"-arch-", level:2, pos:"名詞"},
  {word:"patriarch",     meaning:"家父長・長老",              etymology:"patri（父）+ arch（統治する）",           root:"-arch-", level:2, pos:"名詞"},
  {word:"architect",     meaning:"建築家・設計者",             etymology:"arch（最初の）+ tect（作る人）",         root:"-arch-", level:1, pos:"名詞"},
  {word:"archive",       meaning:"公文書館・アーカイブ",        etymology:"arch（最初の）+ ive（〜の場所）",        root:"-arch-", level:2, pos:"名詞"},
  {word:"archetype",     meaning:"原型・典型",                etymology:"arch（最初の）+ type（型）",             root:"-arch-", level:2, pos:"名詞"},
  {word:"archaeology",   meaning:"考古学",                    etymology:"arch（古い）+ aeology（学問）",          root:"-arch-", level:2, pos:"名詞"},
  {word:"hierarchy",     meaning:"階層組織",                  etymology:"hier（神聖な）+ arch（統治する）",        root:"-arch-", level:2, pos:"名詞"},
  {word:"oligarch",      meaning:"寡頭支配者",                etymology:"oligo（少数）+ arch（統治する）",         root:"-arch-", level:3, pos:"名詞"},
  {word:"matriarch",     meaning:"女家長・母系社会の長",        etymology:"matri（母）+ arch（統治する）",          root:"-arch-", level:2, pos:"名詞"},
  {word:"anarchist",     meaning:"無政府主義者",               etymology:"an（否定）+ arch（統治）+ ist（人）",    root:"-arch-", level:2, pos:"名詞"},
  {word:"archenemy",     meaning:"最大の敵・宿敵",             etymology:"arch（最初の・最高の）+ enemy（敵）",    root:"-arch-", level:2, pos:"名詞"},
  {word:"archaic",       meaning:"古風な・時代遅れの",          etymology:"arch（古い）+ aic（〜の）",              root:"-arch-", level:2, pos:"形容詞"},
  {word:"archangel",     meaning:"大天使",                    etymology:"arch（最高の）+ angel（天使）",          root:"-arch-", level:2, pos:"名詞"},

  // ── -brev-（短い） ──────────────────
  {word:"brief",         meaning:"簡潔な・短い・概要",         etymology:"brev（短い）→ brief",                   root:"-brev-", level:0, pos:"形容詞・名詞"},
  {word:"brevity",       meaning:"簡潔さ・短さ",              etymology:"brev（短い）+ ity（状態）",              root:"-brev-", level:2, pos:"名詞"},
  {word:"abbreviate",    meaning:"略する・短縮する",           etymology:"ab（から）+ brev（短い）+ iate（する）", root:"-brev-", level:1, pos:"動詞"},
  {word:"abbreviation",  meaning:"略語・短縮",                etymology:"abbreviate（略する）+ ion（行為）",      root:"-brev-", level:1, pos:"名詞"},
  {word:"breve",         meaning:"長音符（音楽・言語学）",     etymology:"brev（短い）→ イタリア語 breve",         root:"-brev-", level:3, pos:"名詞"},
  {word:"breviary",      meaning:"聖務日課書",                etymology:"brev（短い）+ iary（〜のもの）",         root:"-brev-", level:3, pos:"名詞"},
  {word:"abridge",       meaning:"要約する・削減する",         etymology:"a（〜に）+ bridge（橋渡し）→短縮",       root:"-brev-", level:2, pos:"動詞"},
  {word:"abridgment",    meaning:"要約・縮約版",               etymology:"abridge（要約する）+ ment（結果）",      root:"-brev-", level:2, pos:"名詞"},
  {word:"unabridged",    meaning:"完全版の・無削除の",         etymology:"un（否定）+ abridged（要約された）",      root:"-brev-", level:2, pos:"形容詞"},
  {word:"brevi-",        meaning:"短い（複合語の要素）",       etymology:"brev（短い）→ 接頭語",                  root:"-brev-", level:3, pos:"名詞"},
  {word:"brevilineal",   meaning:"短肢型の（体型）",           etymology:"brev（短い）+ lineal（線の）",           root:"-brev-", level:3, pos:"名詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
