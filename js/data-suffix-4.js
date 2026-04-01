/**
 * data-suffix-4.js — 接尾語データ追加 vol.4
 * 接尾語: -ology, -graphy, -phobia, -mania, -cide, -logue,
 *         -nomy, -metry, -archy, -cracy, -ent/-ant, -tion（補充）,
 *         -ous（補充）, -ify（補充）, -ize（補充）
 * 形式: { word, meaning, etymology, suffix, level }
 */
(function(){
  var d = [

  // ── -ology（〜学・〜論） ─────────────────────────
  {word:"biology",      meaning:"生物学",                 etymology:"bio（生命）+ ology（学問）",                   suffix:"-ology", level:0},
  {word:"psychology",   meaning:"心理学",                 etymology:"psycho（心）+ ology（学問）",                  suffix:"-ology", level:1},
  {word:"sociology",    meaning:"社会学",                 etymology:"socio（社会）+ ology（学問）",                 suffix:"-ology", level:1},
  {word:"technology",   meaning:"技術・テクノロジー",     etymology:"techno（技術）+ ology（学問）",                suffix:"-ology", level:0},
  {word:"ecology",      meaning:"生態学・エコロジー",     etymology:"eco（家・環境）+ ology（学問）",               suffix:"-ology", level:1},
  {word:"meteorology",  meaning:"気象学",                 etymology:"meteoro（大気）+ ology（学問）",               suffix:"-ology", level:2},
  {word:"geology",      meaning:"地質学",                 etymology:"geo（地球）+ ology（学問）",                   suffix:"-ology", level:1},
  {word:"neurology",    meaning:"神経学",                 etymology:"neuro（神経）+ ology（学問）",                 suffix:"-ology", level:2},
  {word:"oncology",     meaning:"腫瘍学",                 etymology:"onco（腫瘍）+ ology（学問）",                  suffix:"-ology", level:3},
  {word:"criminology",  meaning:"犯罪学",                 etymology:"crimino（犯罪）+ ology（学問）",               suffix:"-ology", level:2},
  {word:"etymology",    meaning:"語源学",                 etymology:"etymo（真の意味）+ ology（学問）",             suffix:"-ology", level:2},
  {word:"terminology",  meaning:"専門用語・術語",         etymology:"termino（境界・用語）+ ology（学問）",         suffix:"-ology", level:2},
  {word:"ideology",     meaning:"イデオロギー・思想体系", etymology:"ideo（考え）+ ology（学問）",                  suffix:"-ology", level:2},
  {word:"virology",     meaning:"ウイルス学",             etymology:"viro（ウイルス）+ ology（学問）",              suffix:"-ology", level:3},
  {word:"cardiology",   meaning:"心臓学",                 etymology:"cardio（心臓）+ ology（学問）",                suffix:"-ology", level:2},

  // ── -graphy（書くこと・記録） ───────────────────
  {word:"biography",    meaning:"伝記",                   etymology:"bio（生命）+ graphy（書く）",                  suffix:"-graphy", level:1},
  {word:"geography",    meaning:"地理学",                 etymology:"geo（地球）+ graphy（書く）",                  suffix:"-graphy", level:1},
  {word:"photography",  meaning:"写真撮影",               etymology:"photo（光）+ graphy（書く）→ 光で書く",        suffix:"-graphy", level:1},
  {word:"typography",   meaning:"印刷術・タイポグラフィ", etymology:"typo（活字）+ graphy（書く）",                 suffix:"-graphy", level:2},
  {word:"choreography", meaning:"振付・コレオグラフィ",  etymology:"choreo（踊り）+ graphy（書く）",               suffix:"-graphy", level:2},
  {word:"cryptography", meaning:"暗号学",                 etymology:"crypto（隠す）+ graphy（書く）",               suffix:"-graphy", level:3},
  {word:"cartography",  meaning:"地図製作",               etymology:"carto（地図）+ graphy（書く）",                suffix:"-graphy", level:2},
  {word:"calligraphy",  meaning:"書道・美文字",           etymology:"calli（美しい）+ graphy（書く）",              suffix:"-graphy", level:2},
  {word:"oceanography", meaning:"海洋学",                 etymology:"oceano（海）+ graphy（書く）",                 suffix:"-graphy", level:2},
  {word:"demography",   meaning:"人口統計学",             etymology:"demo（民衆）+ graphy（書く）",                 suffix:"-graphy", level:2},

  // ── -phobia（恐怖症・嫌悪） ─────────────────────
  {word:"claustrophobia",meaning:"閉所恐怖症",           etymology:"claustro（閉じた）+ phobia（恐怖）",            suffix:"-phobia", level:2},
  {word:"agoraphobia",  meaning:"広場恐怖症",             etymology:"agora（広場）+ phobia（恐怖）",                suffix:"-phobia", level:2},
  {word:"xenophobia",   meaning:"外国人嫌悪",             etymology:"xeno（外国人）+ phobia（恐怖）",               suffix:"-phobia", level:2},
  {word:"acrophobia",   meaning:"高所恐怖症",             etymology:"acro（高い）+ phobia（恐怖）",                 suffix:"-phobia", level:2},
  {word:"technophobia", meaning:"テクノフォビア",         etymology:"techno（技術）+ phobia（恐怖）",               suffix:"-phobia", level:2},
  {word:"hydrophobia",  meaning:"水恐怖症",               etymology:"hydro（水）+ phobia（恐怖）",                  suffix:"-phobia", level:3},

  // ── -mania（狂気・熱狂） ─────────────────────────
  {word:"kleptomania",  meaning:"盗癖・クレプトマニア",   etymology:"klepto（盗む）+ mania（狂気）",                suffix:"-mania", level:3},
  {word:"pyromania",    meaning:"放火癖",                 etymology:"pyro（火）+ mania（狂気）",                    suffix:"-mania", level:3},
  {word:"megalomania",  meaning:"誇大妄想",               etymology:"megalo（大きい）+ mania（狂気）",              suffix:"-mania", level:3},
  {word:"bibliomania",  meaning:"書物狂・本の収集狂",     etymology:"biblio（本）+ mania（狂気）",                  suffix:"-mania", level:3},

  // ── -cide（殺すこと） ───────────────────────────
  {word:"suicide",      meaning:"自殺",                   etymology:"sui（自分）+ cide（殺す）",                    suffix:"-cide", level:1},
  {word:"homicide",     meaning:"殺人",                   etymology:"homi（人間）+ cide（殺す）",                   suffix:"-cide", level:2},
  {word:"pesticide",    meaning:"殺虫剤・農薬",           etymology:"pest（害虫）+ icide（殺す）",                  suffix:"-cide", level:2},
  {word:"herbicide",    meaning:"除草剤",                 etymology:"herbi（草）+ cide（殺す）",                    suffix:"-cide", level:2},
  {word:"genocide",     meaning:"大量虐殺・ジェノサイド", etymology:"geno（民族）+ cide（殺す）",                   suffix:"-cide", level:2},
  {word:"infanticide",  meaning:"嬰児殺し",               etymology:"infanti（幼児）+ cide（殺す）",                suffix:"-cide", level:3},
  {word:"regicide",     meaning:"国王殺し・君主暗殺",     etymology:"regi（王）+ cide（殺す）",                     suffix:"-cide", level:3},

  // ── -nomy（法則・管理） ─────────────────────────
  {word:"astronomy",    meaning:"天文学",                 etymology:"astro（星）+ nomy（法則）",                    suffix:"-nomy", level:1},
  {word:"economy",      meaning:"経済・節約",             etymology:"eco（家）+ nomy（管理）→ 家の管理",            suffix:"-nomy", level:0},
  {word:"autonomy",     meaning:"自治・自律",             etymology:"auto（自分）+ nomy（法則）",                   suffix:"-nomy", level:2},
  {word:"gastronomy",   meaning:"美食学・料理法",         etymology:"gastro（胃）+ nomy（法則）",                   suffix:"-nomy", level:3},
  {word:"taxonomy",     meaning:"分類学",                 etymology:"taxo（配列）+ nomy（法則）",                   suffix:"-nomy", level:3},
  {word:"agronomy",     meaning:"農学・農業経済",         etymology:"agro（田畑）+ nomy（法則）",                   suffix:"-nomy", level:3},

  // ── -metry（測定・計量） ─────────────────────────
  {word:"geometry",     meaning:"幾何学",                 etymology:"geo（土地）+ metry（測る）",                   suffix:"-metry", level:1},
  {word:"symmetry",     meaning:"対称・均整",             etymology:"sym（共に）+ metry（測る）",                   suffix:"-metry", level:2},
  {word:"asymmetry",    meaning:"非対称・不均整",         etymology:"a（否定）+ sym（共に）+ metry（測る）",        suffix:"-metry", level:2},
  {word:"trigonometry", meaning:"三角法",                 etymology:"trigono（三角）+ metry（測る）",               suffix:"-metry", level:2},
  {word:"biometry",     meaning:"生物測定学",             etymology:"bio（生命）+ metry（測る）",                   suffix:"-metry", level:3},

  // ── -archy（支配・統治） ─────────────────────────
  {word:"hierarchy",    meaning:"階層制・序列",           etymology:"hierо（聖なる）+ archy（支配）",               suffix:"-archy", level:2},
  {word:"monarchy",     meaning:"君主制・王政",           etymology:"mono（一人）+ archy（支配）",                  suffix:"-archy", level:2},
  {word:"anarchy",      meaning:"無政府状態",             etymology:"an（否定）+ archy（支配）",                    suffix:"-archy", level:2},
  {word:"oligarchy",    meaning:"寡頭政治",               etymology:"oligo（少数）+ archy（支配）",                 suffix:"-archy", level:3},
  {word:"matriarchy",   meaning:"母系社会・女性支配",     etymology:"matri（母）+ archy（支配）",                   suffix:"-archy", level:3},
  {word:"patriarchy",   meaning:"父家長制・男性支配",     etymology:"patri（父）+ archy（支配）",                   suffix:"-archy", level:2},

  // ── -cracy（政治体制・権力） ─────────────────────
  {word:"democracy",    meaning:"民主主義",               etymology:"demo（民衆）+ cracy（支配）",                  suffix:"-cracy", level:1},
  {word:"bureaucracy",  meaning:"官僚主義・お役所仕事",   etymology:"bureau（机）+ cracy（支配）",                  suffix:"-cracy", level:2},
  {word:"autocracy",    meaning:"独裁政治",               etymology:"auto（自分）+ cracy（支配）",                  suffix:"-cracy", level:2},
  {word:"theocracy",    meaning:"神権政治",               etymology:"theo（神）+ cracy（支配）",                    suffix:"-cracy", level:3},
  {word:"plutocracy",   meaning:"財閥政治・金権政治",     etymology:"pluto（富）+ cracy（支配）",                   suffix:"-cracy", level:3},
  {word:"technocracy",  meaning:"技術官僚主義",           etymology:"techno（技術）+ cracy（支配）",                suffix:"-cracy", level:3},
  {word:"meritocracy",  meaning:"能力主義",               etymology:"merito（功績）+ cracy（支配）",                suffix:"-cracy", level:3},

  // ── -ent/-ant（〜する・〜な状態の） ────────────────
  {word:"confident",    meaning:"自信がある",             etymology:"con（共に）+ fid（信じる）+ ent",              suffix:"-ent", level:1},
  {word:"independent",  meaning:"独立した・自立した",     etymology:"in（否定）+ de（離れて）+ pend（ぶら下がる）+ ent",suffix:"-ent", level:1},
  {word:"dependent",    meaning:"依存している",           etymology:"de（離れて）+ pend（ぶら下がる）+ ent",        suffix:"-ent", level:1},
  {word:"coherent",     meaning:"一貫した・筋の通った",   etymology:"co（共に）+ her（くっつく）+ ent",             suffix:"-ent", level:2},
  {word:"transparent",  meaning:"透明な・明白な",         etymology:"trans（〜を通して）+ par（見せる）+ ent",      suffix:"-ent", level:1},
  {word:"eloquent",     meaning:"雄弁な",                 etymology:"e（外に）+ loqu（話す）+ ent",                 suffix:"-ent", level:2},
  {word:"relevant",     meaning:"関連のある・適切な",     etymology:"re（再び）+ levant（持ち上げる）",             suffix:"-ant", level:1},
  {word:"significant",  meaning:"重要な・意味のある",     etymology:"signi（記号）+ fic（作る）+ ant",              suffix:"-ant", level:1},
  {word:"dominant",     meaning:"支配的な・優勢な",       etymology:"domin（主人）+ ant（〜の）",                   suffix:"-ant", level:1},
  {word:"tolerant",     meaning:"寛容な・我慢強い",       etymology:"toler（耐える）+ ant",                         suffix:"-ant", level:2},
  {word:"reluctant",    meaning:"気が進まない・渋々の",   etymology:"re（後ろに）+ luct（戦う）+ ant",              suffix:"-ant", level:2},
  {word:"arrogant",     meaning:"傲慢な・横柄な",         etymology:"ar（〜に）+ rogant（尋ねる）→ 過剰に要求する", suffix:"-ant", level:2},
  {word:"abundant",     meaning:"豊富な",                 etymology:"ab（完全に）+ und（波打つ）+ ant",             suffix:"-ant", level:2},
  {word:"vigilant",     meaning:"警戒している・注意深い", etymology:"vigil（目覚めている）+ ant",                   suffix:"-ant", level:2},
  {word:"militant",     meaning:"好戦的な・闘争的な",     etymology:"milit（兵士）+ ant",                           suffix:"-ant", level:2},

  // ── -tion 補充（TOEIC/英検頻出） ───────────────
  {word:"innovation",   meaning:"革新・イノベーション",   etymology:"in（中に）+ nov（新しい）+ ation",             suffix:"-tion", level:1},
  {word:"imagination",  meaning:"想像力・想像",           etymology:"imag（像）+ in（〜にする）+ ation",            suffix:"-tion", level:1},
  {word:"documentation",meaning:"文書化・書類",           etymology:"document（文書）+ ation",                      suffix:"-tion", level:2},
  {word:"administration",meaning:"行政・管理",            etymology:"admin（管理）+ istration",                     suffix:"-tion", level:2},
  {word:"accommodation",meaning:"宿泊施設・適応",         etymology:"ac（〜へ）+ commodation（便宜）",              suffix:"-tion", level:2},
  {word:"recommendation",meaning:"推薦・勧告",            etymology:"re（再び）+ commend（勧める）+ ation",         suffix:"-tion", level:2},
  {word:"determination",meaning:"決意・判定",             etymology:"de（完全に）+ termin（境界）+ ation",          suffix:"-tion", level:2},
  {word:"collaboration",meaning:"協力・コラボレーション", etymology:"col（共に）+ labor（働く）+ ation",            suffix:"-tion", level:2},
  {word:"interpretation",meaning:"解釈・通訳",            etymology:"inter（間に）+ pret（交渉する）+ ation",       suffix:"-tion", level:2},
  {word:"observation",  meaning:"観察・観測",             etymology:"ob（〜に）+ serv（守る）+ ation",              suffix:"-tion", level:1},
  {word:"sophistication",meaning:"洗練・精巧さ",          etymology:"sophistic（洗練する）+ ation",                 suffix:"-tion", level:3},
  {word:"manipulation", meaning:"操作・操作すること",     etymology:"manipul（手で扱う）+ ation",                   suffix:"-tion", level:2},

  // ── -ous 補充（形容詞） ───────────────────────
  {word:"notorious",    meaning:"悪名高い",               etymology:"notori（知られた）+ ous",                      suffix:"-ous", level:2},
  {word:"glamorous",    meaning:"魅力的な・華やかな",     etymology:"glamour（魅惑）+ ous",                         suffix:"-ous", level:2},
  {word:"unanimous",    meaning:"全会一致の",             etymology:"un（一つ）+ anim（心）+ ous",                  suffix:"-ous", level:2},
  {word:"vigorous",     meaning:"精力的な・元気な",       etymology:"vigor（活力）+ ous",                           suffix:"-ous", level:2},
  {word:"humorous",     meaning:"ユーモラスな・おかしな", etymology:"humor（体液・気質）+ ous",                     suffix:"-ous", level:1},
  {word:"rigorous",     meaning:"厳格な・厳密な",         etymology:"rigor（厳しさ）+ ous",                         suffix:"-ous", level:2},
  {word:"treacherous",  meaning:"裏切りの・危険な",       etymology:"treacher（裏切る）+ ous",                      suffix:"-ous", level:3},
  {word:"prosperous",   meaning:"繁栄している・裕福な",   etymology:"prosper（繁栄する）+ ous",                     suffix:"-ous", level:2},
  {word:"indigenous",   meaning:"土着の・固有の",         etymology:"indi（内に）+ gen（生まれ）+ ous",             suffix:"-ous", level:3},
  {word:"ambiguous",    meaning:"あいまいな",             etymology:"ambi（両方）+ gu（動く）+ ous",                suffix:"-ous", level:2},
  {word:"autonomous",   meaning:"自律的な・自治の",       etymology:"auto（自分）+ nom（法則）+ ous",               suffix:"-ous", level:2},
  {word:"courageous",   meaning:"勇敢な",                 etymology:"courage（勇気）+ ous",                         suffix:"-ous", level:1},
  {word:"outrageous",   meaning:"不当な・ひどい",         etymology:"outrage（激怒）+ ous",                         suffix:"-ous", level:2},
  {word:"miscellaneous",meaning:"雑多な・様々な",         etymology:"miscell（混ぜる）+ aneous",                    suffix:"-ous", level:2},

  // ── -ize 補充 ───────────────────────────────
  {word:"prioritize",   meaning:"優先する",               etymology:"priority（優先）+ ize（〜にする）",            suffix:"-ize", level:2},
  {word:"optimize",     meaning:"最適化する",             etymology:"optim（最良）+ ize（〜にする）",               suffix:"-ize", level:2},
  {word:"minimize",     meaning:"最小化する",             etymology:"minim（最小）+ ize（〜にする）",               suffix:"-ize", level:1},
  {word:"maximize",     meaning:"最大化する",             etymology:"maxim（最大）+ ize（〜にする）",               suffix:"-ize", level:1},
  {word:"symbolize",    meaning:"象徴する",               etymology:"symbol（象徴）+ ize（〜にする）",              suffix:"-ize", level:2},
  {word:"characterize", meaning:"特徴づける",             etymology:"character（特徴）+ ize（〜にする）",           suffix:"-ize", level:2},
  {word:"jeopardize",   meaning:"危険にさらす",           etymology:"jeopard（危険）+ ize（〜にする）",             suffix:"-ize", level:3},
  {word:"memorize",     meaning:"暗記する",               etymology:"memory（記憶）+ ize（〜にする）",              suffix:"-ize", level:1},
  {word:"emphasize",    meaning:"強調する",               etymology:"emphasis（強調）+ ize（〜にする）",            suffix:"-ize", level:1},
  {word:"agonize",      meaning:"苦悩する",               etymology:"agony（苦悩）+ ize（〜にする）",               suffix:"-ize", level:2},

  // ── -ify 補充 ───────────────────────────────
  {word:"simplify",     meaning:"単純化する",             etymology:"simple（単純）+ fy（〜にする）",               suffix:"-fy", level:1},
  {word:"clarify",      meaning:"明確にする",             etymology:"clar（明らか）+ ify（〜にする）",              suffix:"-fy", level:2},
  {word:"verify",       meaning:"確認する・証明する",     etymology:"veri（真実）+ fy（〜にする）",                 suffix:"-fy", level:2},
  {word:"qualify",      meaning:"資格を得る・適任である", etymology:"qual（質）+ ify（〜にする）",                  suffix:"-fy", level:1},
  {word:"identify",     meaning:"識別する・特定する",     etymology:"ident（同じ）+ ify（〜にする）",               suffix:"-fy", level:1},
  {word:"intensify",    meaning:"強化する・激しくなる",   etymology:"intens（強い）+ ify（〜にする）",              suffix:"-fy", level:2},
  {word:"exemplify",    meaning:"例示する・典型を示す",   etymology:"exempli（例）+ fy（〜にする）",               suffix:"-fy", level:3},
  {word:"glorify",      meaning:"讃える・神聖化する",     etymology:"glory（栄光）+ fy（〜にする）",               suffix:"-fy", level:2},
  {word:"horrify",      meaning:"ぞっとさせる",           etymology:"horror（恐怖）+ fy（〜にする）",               suffix:"-fy", level:2},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
