/**
 * data-root-4.js — 語根データ vol.2
 * 語根: -log-/-logy-, -path-, -phil-, -phob-, -gen-, -morph-,
 *       -chron-, -tele-, -geo-, -bio-, -psych-, -anthropo-, -dem-/-demo-,
 *       -civ-, -jur-/-jus-, -dict-, -port-, -scrib-/-script-, -rupt-
 * 形式: { word, meaning, etymology, root, level }
 */
(function(){
  var d = [

  // ── -log-/-logy-（言葉・学問・理論） ──────────────
  {word:"logic",        meaning:"論理・論理学",           etymology:"log（理性・言葉）+ ic",                         root:"-log-", level:0},
  {word:"logical",      meaning:"論理的な",               etymology:"log（理性）+ ical（〜の）",                     root:"-log-", level:1},
  {word:"dialogue",     meaning:"対話・ダイアログ",       etymology:"dia（間に）+ logue（言葉）",                    root:"-log-", level:1},
  {word:"monologue",    meaning:"独り言・独白",           etymology:"mono（一人）+ logue（言葉）",                   root:"-log-", level:1},
  {word:"prologue",     meaning:"序文・プロローグ",       etymology:"pro（前に）+ logue（言葉）",                    root:"-log-", level:2},
  {word:"epilogue",     meaning:"後書き・エピローグ",     etymology:"epi（後に）+ logue（言葉）",                    root:"-log-", level:2},
  {word:"analogy",      meaning:"類推・類似",             etymology:"ana（同様に）+ logy（学問）",                   root:"-log-", level:2},
  {word:"apology",      meaning:"謝罪・弁明",             etymology:"apo（離れて）+ logy（言葉）→ 自己弁護",         root:"-log-", level:1},
  {word:"biology",      meaning:"生物学",                 etymology:"bio（生命）+ logy（学問）",                     root:"-log-", level:0},
  {word:"psychology",   meaning:"心理学",                 etymology:"psycho（心）+ logy（学問）",                    root:"-log-", level:1},
  {word:"sociology",    meaning:"社会学",                 etymology:"socio（社会）+ logy（学問）",                   root:"-log-", level:1},
  {word:"anthropology", meaning:"人類学",                 etymology:"anthropo（人間）+ logy（学問）",                root:"-log-", level:2},
  {word:"archaeology",  meaning:"考古学",                 etymology:"arche（古い）+ o + logy（学問）",               root:"-log-", level:2},
  {word:"ideology",     meaning:"イデオロギー・思想体系", etymology:"ideo（考え）+ logy（学問）",                    root:"-log-", level:2},
  {word:"mythology",    meaning:"神話学・神話",           etymology:"mytho（神話）+ logy（学問）",                   root:"-log-", level:1},
  {word:"theology",     meaning:"神学",                   etymology:"theo（神）+ logy（学問）",                      root:"-log-", level:2},
  {word:"lexicology",   meaning:"語彙論・語彙学",         etymology:"lexi（語）+ co + logy（学問）",                 root:"-log-", level:3},
  {word:"etymology",    meaning:"語源学",                 etymology:"etymo（真の意味）+ logy（学問）",               root:"-log-", level:2},
  {word:"catalogue",    meaning:"カタログ・目録",         etymology:"cata（下に）+ logue（言葉）→ 整理された言葉",   root:"-log-", level:1},

  // ── -path-（感じる・苦しむ・病） ──────────────────
  {word:"sympathy",     meaning:"同情・共感",             etymology:"sym（共に）+ pathy（感じる）",                  root:"-path-", level:1},
  {word:"empathy",      meaning:"共感・感情移入",         etymology:"em（中に）+ pathy（感じる）",                   root:"-path-", level:1},
  {word:"apathy",       meaning:"無関心・無気力",         etymology:"a（否定）+ pathy（感じる）→ 感じない",          root:"-path-", level:2},
  {word:"antipathy",    meaning:"反感・嫌悪",             etymology:"anti（反対）+ pathy（感じる）",                 root:"-path-", level:2},
  {word:"pathetic",     meaning:"哀れな・情けない",       etymology:"path（苦しむ）+ etic",                          root:"-path-", level:2},
  {word:"pathology",    meaning:"病理学",                 etymology:"patho（病）+ logy（学問）",                     root:"-path-", level:2},
  {word:"psychopath",   meaning:"精神病質者",             etymology:"psycho（心）+ path（苦しむ）",                  root:"-path-", level:2},
  {word:"sociopath",    meaning:"反社会的人格者",         etymology:"socio（社会）+ path（苦しむ）",                 root:"-path-", level:3},
  {word:"telepathy",    meaning:"テレパシー・念力伝達",   etymology:"tele（遠く）+ pathy（感じる）",                 root:"-path-", level:2},

  // ── -phil-（愛する・好む） ────────────────────────
  {word:"philosophy",   meaning:"哲学",                   etymology:"philo（愛する）+ sophy（知恵）",                root:"-phil-", level:1},
  {word:"philanthropist",meaning:"慈善家",               etymology:"philan（人を愛する）+ thropist（人）",           root:"-phil-", level:2},
  {word:"philanthropy", meaning:"慈善活動・博愛",         etymology:"philo（愛する）+ anthropy（人間）",             root:"-phil-", level:2},
  {word:"philharmonic", meaning:"フィルハーモニーの",     etymology:"phil（愛する）+ harmonic（調和）",              root:"-phil-", level:2},
  {word:"bibliophile",  meaning:"愛書家・本好き",         etymology:"biblio（本）+ phile（愛する人）",               root:"-phil-", level:3},
  {word:"audiophile",   meaning:"オーディオマニア",       etymology:"audio（音）+ phile（愛する人）",               root:"-phil-", level:2},
  {word:"cinephile",    meaning:"映画愛好家",             etymology:"cine（映画）+ phile（愛する人）",               root:"-phil-", level:2},

  // ── -phob-（恐怖・嫌悪） ─────────────────────────
  {word:"phobia",       meaning:"恐怖症",                 etymology:"phob（恐れる）+ ia（状態）",                    root:"-phob-", level:1},
  {word:"claustrophobia",meaning:"閉所恐怖症",           etymology:"claustro（閉じた）+ phobia（恐怖）",             root:"-phob-", level:2},
  {word:"agoraphobia",  meaning:"広場恐怖症",             etymology:"agora（広場）+ phobia（恐怖）",                 root:"-phob-", level:2},
  {word:"xenophobia",   meaning:"外国人嫌悪・排外主義",   etymology:"xeno（外国人）+ phobia（恐怖）",                root:"-phob-", level:2},
  {word:"homophobia",   meaning:"同性愛嫌悪",             etymology:"homo（同じ）+ phobia（恐怖）",                  root:"-phob-", level:2},
  {word:"hydrophobia",  meaning:"水恐怖症・狂犬病",       etymology:"hydro（水）+ phobia（恐怖）",                   root:"-phob-", level:3},

  // ── -gen-（生む・生じる・種族） ───────────────────
  {word:"generate",     meaning:"生み出す・発生させる",   etymology:"gen（生む）+ erate（〜にする）",                root:"-gen-", level:1},
  {word:"generation",   meaning:"世代・発生",             etymology:"gen（生む）+ eration（こと）",                  root:"-gen-", level:0},
  {word:"gender",       meaning:"性別・ジェンダー",       etymology:"gen（生む・種）+ der",                          root:"-gen-", level:1},
  {word:"gene",         meaning:"遺伝子",                 etymology:"gen（生む）→ 生命を生み出すもの",               root:"-gen-", level:1},
  {word:"genetic",      meaning:"遺伝の・遺伝子の",       etymology:"gen（生む）+ etic",                             root:"-gen-", level:1},
  {word:"genesis",      meaning:"起源・発生",             etymology:"gen（生む）+ esis（こと）",                     root:"-gen-", level:2},
  {word:"genius",       meaning:"天才・才能",             etymology:"gen（生む）+ ius → 生まれながらの才能",         root:"-gen-", level:1},
  {word:"genuine",      meaning:"本物の・純粋な",         etymology:"gen（生まれ）+ uine（〜の）→ 生まれながらの",   root:"-gen-", level:2},
  {word:"genre",        meaning:"ジャンル・種類",         etymology:"gen（種）+ re",                                 root:"-gen-", level:1},
  {word:"oxygen",       meaning:"酸素",                   etymology:"oxy（酸い）+ gen（生む）→ 酸を生む",            root:"-gen-", level:1},
  {word:"hydrogen",     meaning:"水素",                   etymology:"hydro（水）+ gen（生む）→ 水を生む",            root:"-gen-", level:1},
  {word:"homogeneous",  meaning:"同質の・均一な",         etymology:"homo（同じ）+ gen（種）+ eous",                 root:"-gen-", level:2},
  {word:"heterogeneous",meaning:"異質な・混合の",         etymology:"hetero（異なる）+ gen（種）+ eous",             root:"-gen-", level:2},
  {word:"indigenous",   meaning:"土着の・固有の",         etymology:"indi（内に）+ gen（生まれ）+ ous",              root:"-gen-", level:3},
  {word:"congenital",   meaning:"先天性の・生まれつきの", etymology:"con（共に）+ gen（生まれ）+ ital",              root:"-gen-", level:3},
  {word:"degenerate",   meaning:"退化する・堕落する",     etymology:"de（離れて）+ gen（生まれ）+ erate",            root:"-gen-", level:3},
  {word:"regenerate",   meaning:"再生させる・更生する",   etymology:"re（再び）+ gen（生む）+ erate",                root:"-gen-", level:2},

  // ── -morph-（形） ───────────────────────────────
  {word:"morphology",   meaning:"形態学",                 etymology:"morph（形）+ ology（学問）",                    root:"-morph-", level:2},
  {word:"metamorphosis",meaning:"変態・変容",             etymology:"meta（変化）+ morph（形）+ osis（状態）",       root:"-morph-", level:2},
  {word:"amorphous",    meaning:"無定形の・不明確な",     etymology:"a（否定）+ morph（形）+ ous",                   root:"-morph-", level:3},
  {word:"anthropomorphic",meaning:"擬人化した・人間に似た",etymology:"anthropo（人間）+ morph（形）+ ic",           root:"-morph-", level:3},
  {word:"polymorphous", meaning:"多形の・多様な",         etymology:"poly（多くの）+ morph（形）+ ous",              root:"-morph-", level:3},

  // ── -chron-（時間） ─────────────────────────────
  {word:"chronic",      meaning:"慢性の・長期の",         etymology:"chron（時間）+ ic",                             root:"-chron-", level:1},
  {word:"chronology",   meaning:"年表・年代順",           etymology:"chron（時間）+ ology（学問）",                  root:"-chron-", level:2},
  {word:"synchronize",  meaning:"同期させる・一致させる", etymology:"syn（共に）+ chron（時間）+ ize",               root:"-chron-", level:2},
  {word:"anachronism",  meaning:"時代錯誤",               etymology:"ana（逆に）+ chron（時間）+ ism",               root:"-chron-", level:3},
  {word:"chronicle",    meaning:"年代記・記録",           etymology:"chron（時間）+ icle（小さなもの）",             root:"-chron-", level:2},
  {word:"chronological",meaning:"年代順の・時系列の",     etymology:"chron（時間）+ ological（学問的）",             root:"-chron-", level:2},

  // ── -tele-（遠く） ──────────────────────────────
  {word:"telephone",    meaning:"電話",                   etymology:"tele（遠く）+ phone（声）",                     root:"-tele-", level:0},
  {word:"television",   meaning:"テレビ",                 etymology:"tele（遠く）+ vision（見る）",                  root:"-tele-", level:0},
  {word:"telescope",    meaning:"望遠鏡",                 etymology:"tele（遠く）+ scope（見る）",                   root:"-tele-", level:1},
  {word:"telegraph",    meaning:"電報",                   etymology:"tele（遠く）+ graph（書く）",                   root:"-tele-", level:1},
  {word:"telecom",      meaning:"通信",                   etymology:"tele（遠く）+ com（共に）",                     root:"-tele-", level:1},
  {word:"telepathy",    meaning:"テレパシー",             etymology:"tele（遠く）+ pathy（感じる）",                 root:"-tele-", level:2},

  // ── -geo-（地球・土地） ─────────────────────────
  {word:"geography",    meaning:"地理学",                 etymology:"geo（地球）+ graphy（書く）",                   root:"-geo-", level:1},
  {word:"geology",      meaning:"地質学",                 etymology:"geo（地球）+ logy（学問）",                     root:"-geo-", level:1},
  {word:"geometry",     meaning:"幾何学",                 etymology:"geo（土地）+ metry（測る）",                    root:"-geo-", level:1},
  {word:"geopolitics",  meaning:"地政学",                 etymology:"geo（地球）+ politics（政治）",                 root:"-geo-", level:2},
  {word:"geocentric",   meaning:"地球中心の",             etymology:"geo（地球）+ centric（中心の）",                root:"-geo-", level:2},
  {word:"geothermal",   meaning:"地熱の",                 etymology:"geo（地球）+ thermal（熱の）",                  root:"-geo-", level:2},

  // ── -bio-（生命） ───────────────────────────────
  {word:"biology",      meaning:"生物学",                 etymology:"bio（生命）+ logy（学問）",                     root:"-bio-", level:0},
  {word:"biography",    meaning:"伝記",                   etymology:"bio（生命）+ graphy（書く）",                   root:"-bio-", level:1},
  {word:"autobiography",meaning:"自伝",                   etymology:"auto（自分）+ bio（生命）+ graphy（書く）",     root:"-bio-", level:1},
  {word:"biodiversity", meaning:"生物多様性",             etymology:"bio（生命）+ diversity（多様性）",              root:"-bio-", level:2},
  {word:"biometric",    meaning:"生体認証の",             etymology:"bio（生命）+ metric（測る）",                   root:"-bio-", level:2},
  {word:"biopsy",       meaning:"生検・組織検査",         etymology:"bio（生命）+ opsy（見る）",                     root:"-bio-", level:2},
  {word:"biotechnology",meaning:"バイオテクノロジー",     etymology:"bio（生命）+ technology（技術）",               root:"-bio-", level:2},
  {word:"microbiome",   meaning:"微生物叢",               etymology:"micro（小さい）+ bio（生命）+ ome（全体）",     root:"-bio-", level:3},
  {word:"symbiosis",    meaning:"共生・共存",             etymology:"sym（共に）+ bio（生命）+ sis（状態）",         root:"-bio-", level:3},
  {word:"antibiotic",   meaning:"抗生物質",               etymology:"anti（反対）+ bio（生命）+ tic",                root:"-bio-", level:1},

  // ── -psych-（心・精神） ─────────────────────────
  {word:"psychology",   meaning:"心理学",                 etymology:"psycho（心）+ logy（学問）",                    root:"-psych-", level:1},
  {word:"psychologist", meaning:"心理学者",               etymology:"psycho（心）+ logist（学者）",                  root:"-psych-", level:1},
  {word:"psychiatric",  meaning:"精神医学の",             etymology:"psychi（心）+ atric（医療）",                   root:"-psych-", level:2},
  {word:"psychiatrist", meaning:"精神科医",               etymology:"psychi（心）+ atrist（医師）",                  root:"-psych-", level:2},
  {word:"psychoanalysis",meaning:"精神分析",              etymology:"psycho（心）+ analysis（分析）",                root:"-psych-", level:3},
  {word:"psychotherapy",meaning:"心理療法",               etymology:"psycho（心）+ therapy（治療）",                 root:"-psych-", level:2},
  {word:"psychic",      meaning:"霊能の・精神的な",       etymology:"psych（心）+ ic",                               root:"-psych-", level:2},

  // ── -anthropo-（人間） ─────────────────────────
  {word:"anthropology", meaning:"人類学",                 etymology:"anthropo（人間）+ logy（学問）",                root:"-anthropo-", level:2},
  {word:"anthropologist",meaning:"人類学者",             etymology:"anthropo（人間）+ logist（学者）",               root:"-anthropo-", level:2},
  {word:"anthropomorphic",meaning:"擬人的な",            etymology:"anthropo（人間）+ morph（形）+ ic",              root:"-anthropo-", level:3},
  {word:"misanthrope",  meaning:"人間嫌い",               etymology:"mis（嫌い）+ anthrope（人間）",                  root:"-anthropo-", level:3},
  {word:"philanthropy", meaning:"慈善活動・博愛",         etymology:"philan（愛する）+ thropy（人間）",              root:"-anthropo-", level:2},

  // ── -dem-/-demo-（民衆・人々） ─────────────────
  {word:"democracy",    meaning:"民主主義",               etymology:"demo（民衆）+ cracy（支配）",                   root:"-demo-", level:1},
  {word:"democrat",     meaning:"民主主義者",             etymology:"demo（民衆）+ crat（支配する人）",              root:"-demo-", level:1},
  {word:"demographic",  meaning:"人口統計の",             etymology:"demo（民衆）+ graphic（書く）",                 root:"-demo-", level:2},
  {word:"epidemic",     meaning:"流行病・蔓延",           etymology:"epi（上に）+ dem（民衆）+ ic",                  root:"-demo-", level:2},
  {word:"pandemic",     meaning:"パンデミック・世界的流行",etymology:"pan（全て）+ dem（民衆）+ ic",                  root:"-demo-", level:2},
  {word:"endemic",      meaning:"風土病の・その地域固有の",etymology:"en（中に）+ dem（民衆）+ ic",                  root:"-demo-", level:3},
  {word:"demagogue",    meaning:"扇動政治家",             etymology:"demo（民衆）+ agogue（導く人）",                root:"-demo-", level:3},

  // ── -civ-（市民・都市） ─────────────────────────
  {word:"civil",        meaning:"市民の・礼儀正しい",     etymology:"civ（市民）+ il（〜の）",                       root:"-civ-", level:0},
  {word:"civilian",     meaning:"民間人・一般市民",       etymology:"civ（市民）+ ilian",                            root:"-civ-", level:1},
  {word:"civilize",     meaning:"文明化する",             etymology:"civ（市民）+ ilize（〜にする）",                root:"-civ-", level:1},
  {word:"civilization", meaning:"文明・文化",             etymology:"civ（市民）+ ilization（状態）",                root:"-civ-", level:1},
  {word:"civic",        meaning:"市民の・市民的な",       etymology:"civ（市民）+ ic",                               root:"-civ-", level:2},
  {word:"uncivil",      meaning:"無礼な・粗野な",         etymology:"un（否定）+ civ（市民）+ il",                   root:"-civ-", level:2},

  // ── -jur-/-jus-（法・正義） ────────────────────
  {word:"justice",      meaning:"正義・公正",             etymology:"jus（正義・法）+ tice（こと）",                 root:"-jus-", level:0},
  {word:"judge",        meaning:"裁判官・判断する",       etymology:"jud（法）+ ge（人）",                           root:"-jus-", level:0},
  {word:"jury",         meaning:"陪審員団",               etymology:"jur（誓う）+ y",                                root:"-jus-", level:1},
  {word:"jurisdiction", meaning:"管轄権・司法権",         etymology:"juris（法）+ diction（言う）",                  root:"-jus-", level:2},
  {word:"justify",      meaning:"正当化する",             etymology:"just（正しい）+ ify（〜にする）",               root:"-jus-", level:1},
  {word:"injustice",    meaning:"不正・不公平",           etymology:"in（否定）+ justice（正義）",                   root:"-jus-", level:1},
  {word:"judicial",     meaning:"司法の・裁判の",         etymology:"judi（裁く）+ cial（〜の）",                    root:"-jus-", level:2},
  {word:"judiciary",    meaning:"司法部・裁判所",         etymology:"judici（裁く）+ ary（〜に関する）",             root:"-jus-", level:3},
  {word:"adjudicate",   meaning:"裁定する・審判する",     etymology:"ad（〜へ）+ judic（裁く）+ ate",                root:"-jus-", level:3},

  // ── -dict-（言う・宣言する） ─────────────────────
  {word:"dictate",      meaning:"口述する・命令する",     etymology:"dict（言う）+ ate（〜する）",                   root:"-dict-", level:1},
  {word:"dictionary",   meaning:"辞書・辞典",             etymology:"dict（言う）+ ionary（〜に関するもの）",        root:"-dict-", level:0},
  {word:"predict",      meaning:"予測する",               etymology:"pre（前に）+ dict（言う）",                     root:"-dict-", level:1},
  {word:"verdict",      meaning:"評決・判決",             etymology:"ver（真実）+ dict（言う）→ 真実を言う",         root:"-dict-", level:2},
  {word:"contradict",   meaning:"矛盾する・否定する",     etymology:"contra（反対）+ dict（言う）",                  root:"-dict-", level:2},
  {word:"contradiction",meaning:"矛盾・反論",             etymology:"contra（反対）+ dict（言う）+ ion",             root:"-dict-", level:2},
  {word:"indicate",     meaning:"示す・指摘する",         etymology:"in（中に）+ dic（言う）+ ate",                  root:"-dict-", level:1},
  {word:"indication",   meaning:"指示・兆候",             etymology:"in（中に）+ dic（言う）+ ation",                root:"-dict-", level:1},
  {word:"dedicate",     meaning:"捧げる・専念する",       etymology:"de（下に）+ dic（言う）+ ate → 言い渡す",       root:"-dict-", level:2},
  {word:"abdicate",     meaning:"退位する・放棄する",     etymology:"ab（離れて）+ dic（言う）+ ate",               root:"-dict-", level:3},

  // ── -port-（運ぶ） ──────────────────────────────
  {word:"port",         meaning:"港・ポート",             etymology:"port（運ぶ・港）",                              root:"-port-", level:0},
  {word:"import",       meaning:"輸入する",               etymology:"im（中に）+ port（運ぶ）",                      root:"-port-", level:0},
  {word:"export",       meaning:"輸出する",               etymology:"ex（外に）+ port（運ぶ）",                      root:"-port-", level:0},
  {word:"transport",    meaning:"輸送する・輸送",         etymology:"trans（横断して）+ port（運ぶ）",               root:"-port-", level:0},
  {word:"report",       meaning:"報告する・レポート",     etymology:"re（再び）+ port（運ぶ）→ 情報を運び戻す",      root:"-port-", level:0},
  {word:"support",      meaning:"支持する・サポート",     etymology:"sup（下から）+ port（運ぶ）→ 下から支える",     root:"-port-", level:0},
  {word:"portable",     meaning:"携帯用の・可搬の",       etymology:"port（運ぶ）+ able（できる）",                  root:"-port-", level:1},
  {word:"portfolio",    meaning:"ポートフォリオ・書類入れ",etymology:"port（運ぶ）+ folio（葉）",                    root:"-port-", level:2},
  {word:"opportunity",  meaning:"機会・チャンス",         etymology:"op（前に）+ port（港）+ unity → 入港の好機",    root:"-port-", level:1},
  {word:"important",    meaning:"重要な",                 etymology:"im（中に）+ port（運ぶ）+ ant → 中に運ばれる",  root:"-port-", level:0},
  {word:"deport",       meaning:"追放する・強制送還する", etymology:"de（離れて）+ port（運ぶ）",                    root:"-port-", level:2},
  {word:"deportment",   meaning:"身のこなし・品行",       etymology:"de（下に）+ port（運ぶ）+ ment",               root:"-port-", level:3},

  // ── -scrib-/-script-（書く） ─────────────────────
  {word:"describe",     meaning:"描写する・説明する",     etymology:"de（下に）+ scrib（書く）",                     root:"-scrib-", level:0},
  {word:"description",  meaning:"説明・描写",             etymology:"de（下に）+ script（書く）+ ion",               root:"-scrib-", level:0},
  {word:"prescribe",    meaning:"処方する・規定する",     etymology:"pre（前に）+ scrib（書く）",                    root:"-scrib-", level:2},
  {word:"subscribe",    meaning:"定期購読する・賛同する", etymology:"sub（下に）+ scrib（書く）→ 下に名前を書く",    root:"-scrib-", level:1},
  {word:"subscription", meaning:"定期購読・会費",         etymology:"sub（下に）+ script（書く）+ ion",              root:"-scrib-", level:2},
  {word:"manuscript",   meaning:"原稿・写本",             etymology:"manu（手）+ script（書く）",                    root:"-scrib-", level:2},
  {word:"inscription",  meaning:"碑文・銘文",             etymology:"in（中に）+ script（書く）+ ion",               root:"-scrib-", level:2},
  {word:"scripture",    meaning:"聖典・聖書",             etymology:"script（書く）+ ure（もの）",                   root:"-scrib-", level:2},
  {word:"transcript",   meaning:"写し・成績証明書",       etymology:"trans（越えて）+ script（書く）→ 写し取る",     root:"-scrib-", level:2},
  {word:"postscript",   meaning:"追伸・補足",             etymology:"post（後に）+ script（書く）",                  root:"-scrib-", level:2},
  {word:"conscript",    meaning:"徴兵する・新兵",         etymology:"con（共に）+ script（書く）→ 名簿に書く",       root:"-scrib-", level:3},

  // ── -rupt-（壊れる・破る） ────────────────────────
  {word:"interrupt",    meaning:"遮る・中断する",         etymology:"inter（間に）+ rupt（壊す）",                   root:"-rupt-", level:1},
  {word:"corrupt",      meaning:"腐敗した・汚職の",       etymology:"cor（完全に）+ rupt（壊す）",                   root:"-rupt-", level:2},
  {word:"corruption",   meaning:"腐敗・汚職",             etymology:"cor（完全に）+ rupt（壊す）+ ion",              root:"-rupt-", level:2},
  {word:"disrupt",      meaning:"混乱させる・妨害する",   etymology:"dis（離れて）+ rupt（壊す）",                   root:"-rupt-", level:2},
  {word:"disruption",   meaning:"混乱・破壊・分断",       etymology:"dis（離れて）+ rupt（壊す）+ ion",              root:"-rupt-", level:2},
  {word:"erupt",        meaning:"噴火する・爆発する",     etymology:"e（外に）+ rupt（壊す）",                       root:"-rupt-", level:1},
  {word:"eruption",     meaning:"噴火・爆発・発疹",       etymology:"e（外に）+ rupt（壊す）+ ion",                  root:"-rupt-", level:1},
  {word:"rupture",      meaning:"破裂・断絶",             etymology:"rupt（壊す）+ ure（こと）",                     root:"-rupt-", level:2},
  {word:"bankrupt",     meaning:"破産した・倒産した",     etymology:"bank（銀行）+ rupt（壊す）",                    root:"-rupt-", level:2},
  {word:"abrupt",       meaning:"突然の・ぶっきらぼうな", etymology:"ab（離れて）+ rupt（壊す）→ 急に切れる",        root:"-rupt-", level:2},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
