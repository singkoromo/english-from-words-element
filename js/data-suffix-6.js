/**
 * data-suffix-6.js — 接尾語データ（-lysis, -pathy, -scope, -cracy, -archy等）
 * 形式: { word, meaning, etymology, suffix, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -lysis（分解・溶解・崩壊） ──────────────────
  {word:"analysis",      meaning:"分析・解析",                etymology:"ana（分けて）+ lysis（分解）",             suffix:"-lysis", level:4, pos:"名詞"},
  {word:"paralysis",     meaning:"麻痺・まひ",                etymology:"para（横に）+ lysis（崩壊）",             suffix:"-lysis", level:5, pos:"名詞"},
  {word:"electrolysis",  meaning:"電気分解",                  etymology:"electro（電気）+ lysis（分解）",          suffix:"-lysis", level:6, pos:"名詞"},
  {word:"hydrolysis",    meaning:"加水分解",                  etymology:"hydro（水）+ lysis（分解）",             suffix:"-lysis", level:5, pos:"名詞"},
  {word:"dialysis",      meaning:"透析・ダイアリシス",         etymology:"dia（通じて）+ lysis（分解）",            suffix:"-lysis", level:5, pos:"名詞"},
  {word:"hemolysis",     meaning:"溶血",                      etymology:"hemo（血）+ lysis（溶解）",              suffix:"-lysis", level:6, pos:"名詞"},
  {word:"photolysis",    meaning:"光分解",                    etymology:"photo（光）+ lysis（分解）",             suffix:"-lysis", level:6, pos:"名詞"},
  {word:"thermolysis",   meaning:"熱分解",                    etymology:"thermo（熱）+ lysis（分解）",            suffix:"-lysis", level:6, pos:"名詞"},
  {word:"bacteriolysis", meaning:"細菌溶解",                  etymology:"bacterio（細菌）+ lysis（溶解）",        suffix:"-lysis", level:7, pos:"名詞"},
  {word:"glycolysis",    meaning:"解糖（グルコース分解）",     etymology:"glyco（糖）+ lysis（分解）",             suffix:"-lysis", level:6, pos:"名詞"},
  {word:"catalysis",     meaning:"触媒作用",                  etymology:"cata（下に）+ lysis（分解）",            suffix:"-lysis", level:6, pos:"名詞"},
  {word:"proteolysis",   meaning:"タンパク質分解",             etymology:"proteo（タンパク）+ lysis（分解）",      suffix:"-lysis", level:6, pos:"名詞"},
  {word:"lipolysis",     meaning:"脂肪分解",                  etymology:"lipo（脂肪）+ lysis（分解）",            suffix:"-lysis", level:6, pos:"名詞"},
  {word:"autolysis",     meaning:"自己融解",                  etymology:"auto（自分）+ lysis（溶解）",            suffix:"-lysis", level:6, pos:"名詞"},
  {word:"neurolysis",    meaning:"神経解離",                  etymology:"neuro（神経）+ lysis（解離）",           suffix:"-lysis", level:6, pos:"名詞"},

  // ── -pathy（感情・疾患・療法） ──────────────────
  {word:"sympathy",      meaning:"同情・共感",                etymology:"sym（共に）+ pathy（感情）",              suffix:"-pathy", level:3, pos:"名詞"},
  {word:"empathy",       meaning:"感情移入・共感",             etymology:"em（中に）+ pathy（感情）",               suffix:"-pathy", level:3, pos:"名詞"},
  {word:"apathy",        meaning:"無気力・無感動",             etymology:"a（否定）+ pathy（感情）",               suffix:"-pathy", level:5, pos:"名詞"},
  {word:"antipathy",     meaning:"反感・嫌悪",                etymology:"anti（反対）+ pathy（感情）",            suffix:"-pathy", level:5, pos:"名詞"},
  {word:"pathology",     meaning:"病理学",                    etymology:"patho（疾患）+ logy（学問）",            suffix:"-pathy", level:5, pos:"名詞"},
  {word:"telepathy",     meaning:"テレパシー・精神感応",       etymology:"tele（遠くの）+ pathy（感情）",           suffix:"-pathy", level:5, pos:"名詞"},
  {word:"osteopathy",    meaning:"整骨療法",                  etymology:"osteo（骨）+ pathy（療法）",             suffix:"-pathy", level:6, pos:"名詞"},
  {word:"homeopathy",    meaning:"ホメオパシー・同種療法",     etymology:"homeo（同じ）+ pathy（療法）",           suffix:"-pathy", level:6, pos:"名詞"},
  {word:"neuropathy",    meaning:"神経障害・神経症",           etymology:"neuro（神経）+ pathy（疾患）",           suffix:"-pathy", level:6, pos:"名詞"},
  {word:"psychopathy",   meaning:"精神病質・サイコパシー",     etymology:"psycho（精神）+ pathy（疾患）",          suffix:"-pathy", level:6, pos:"名詞"},
  {word:"cardiopathy",   meaning:"心臓病",                    etymology:"cardio（心臓）+ pathy（疾患）",          suffix:"-pathy", level:6, pos:"名詞"},
  {word:"sociopathy",    meaning:"社会病質",                  etymology:"socio（社会）+ pathy（疾患）",           suffix:"-pathy", level:6, pos:"名詞"},
  {word:"idiopathy",     meaning:"特発性疾患",                etymology:"idio（独自の）+ pathy（疾患）",          suffix:"-pathy", level:6, pos:"名詞"},
  {word:"myopathy",      meaning:"筋疾患",                    etymology:"myo（筋肉）+ pathy（疾患）",             suffix:"-pathy", level:6, pos:"名詞"},
  {word:"nephropathy",   meaning:"腎症",                      etymology:"nephro（腎臓）+ pathy（疾患）",          suffix:"-pathy", level:6, pos:"名詞"},

  // ── -scope（観察する器具・見る） ──────────────────
  {word:"telescope",     meaning:"望遠鏡",                    etymology:"tele（遠くの）+ scope（見る）",           suffix:"-scope", level:2, pos:"名詞"},
  {word:"microscope",    meaning:"顕微鏡",                    etymology:"micro（小さい）+ scope（見る）",          suffix:"-scope", level:2, pos:"名詞"},
  {word:"periscope",     meaning:"潜望鏡",                    etymology:"peri（周囲を）+ scope（見る）",           suffix:"-scope", level:3, pos:"名詞"},
  {word:"stethoscope",   meaning:"聴診器",                    etymology:"stetho（胸）+ scope（聴く器具）",         suffix:"-scope", level:5, pos:"名詞"},
  {word:"horoscope",     meaning:"星占い・ホロスコープ",       etymology:"horo（時刻）+ scope（観察）",            suffix:"-scope", level:3, pos:"形容詞・名詞"},
  {word:"kaleidoscope",  meaning:"万華鏡",                    etymology:"kalos（美しい）+ eido（形）+ scope（見る）",suffix:"-scope", level:5, pos:"名詞"},
  {word:"endoscope",     meaning:"内視鏡",                    etymology:"endo（内部に）+ scope（見る）",           suffix:"-scope", level:5, pos:"名詞"},
  {word:"oscilloscope",  meaning:"オシロスコープ",             etymology:"oscillo（振動）+ scope（見る）",          suffix:"-scope", level:6, pos:"名詞"},
  {word:"bronchoscope",  meaning:"気管支鏡",                  etymology:"broncho（気管支）+ scope（見る）",        suffix:"-scope", level:6, pos:"名詞"},
  {word:"ophthalmoscope",meaning:"眼底鏡",                   etymology:"ophthalmo（目）+ scope（見る）",         suffix:"-scope", level:6, pos:"名詞"},
  {word:"arthroscope",   meaning:"関節鏡",                    etymology:"arthro（関節）+ scope（見る）",          suffix:"-scope", level:6, pos:"名詞"},
  {word:"laparoscope",   meaning:"腹腔鏡",                    etymology:"laparo（腹壁）+ scope（見る）",          suffix:"-scope", level:6, pos:"名詞"},
  {word:"spectroscope",  meaning:"分光器",                    etymology:"spectro（スペクトル）+ scope（見る）",    suffix:"-scope", level:6, pos:"名詞"},
  {word:"gyroscope",     meaning:"ジャイロスコープ",           etymology:"gyro（回転）+ scope（見る）",            suffix:"-scope", level:5, pos:"名詞"},

  // ── -cracy（統治・支配） ──────────────────
  {word:"democracy",     meaning:"民主主義",                  etymology:"demo（民衆）+ cracy（統治）",            suffix:"-cracy", level:2, pos:"名詞"},
  {word:"autocracy",     meaning:"独裁政治",                  etymology:"auto（自分）+ cracy（統治）",            suffix:"-cracy", level:5, pos:"名詞"},
  {word:"aristocracy",   meaning:"貴族政治・貴族階級",         etymology:"aristo（最善の）+ cracy（統治）",        suffix:"-cracy", level:6, pos:"名詞"},
  {word:"bureaucracy",   meaning:"官僚制・お役所仕事",         etymology:"bureau（机・事務所）+ cracy（統治）",    suffix:"-cracy", level:5, pos:"名詞"},
  {word:"technocracy",   meaning:"技術官僚制",                etymology:"techno（技術）+ cracy（統治）",          suffix:"-cracy", level:6, pos:"名詞"},
  {word:"plutocracy",    meaning:"財閥政治・金権政治",         etymology:"pluto（富）+ cracy（統治）",             suffix:"-cracy", level:6, pos:"名詞"},
  {word:"meritocracy",   meaning:"能力主義社会",              etymology:"merit（功績）+ cracy（統治）",           suffix:"-cracy", level:6, pos:"名詞"},
  {word:"theocracy",     meaning:"神権政治",                  etymology:"theo（神）+ cracy（統治）",              suffix:"-cracy", level:6, pos:"名詞"},
  {word:"ochlocracy",    meaning:"衆愚政治",                  etymology:"ochlo（群衆）+ cracy（統治）",           suffix:"-cracy", level:6, pos:"名詞"},
  {word:"kleptocracy",   meaning:"収奪政治・腐敗政治",         etymology:"klepto（盗む）+ cracy（統治）",          suffix:"-cracy", level:6, pos:"名詞"},
  {word:"corporatocracy",meaning:"企業支配（社会）",           etymology:"corporat（企業）+ cracy（統治）",        suffix:"-cracy", level:7, pos:"名詞"},
  {word:"kakistocracy",  meaning:"最悪者による政治",           etymology:"kakisto（最悪の）+ cracy（統治）",       suffix:"-cracy", level:7, pos:"名詞"},
  {word:"gerontocracy",  meaning:"老人支配（政治）",           etymology:"geronto（老人）+ cracy（統治）",         suffix:"-cracy", level:7, pos:"名詞"},
  {word:"stratocracy",   meaning:"軍事独裁",                  etymology:"strato（軍隊）+ cracy（統治）",          suffix:"-cracy", level:6, pos:"名詞"},

  // ── -archy（支配・統治の形） ──────────────────
  {word:"monarchy",      meaning:"君主制",                    etymology:"mono（一人）+ archy（統治）",            suffix:"-archy", level:3, pos:"名詞"},
  {word:"anarchy",       meaning:"無政府状態・混乱",           etymology:"an（否定）+ archy（統治）",              suffix:"-archy", level:5, pos:"名詞"},
  {word:"hierarchy",     meaning:"階層組織・ヒエラルキー",     etymology:"hier（神聖な）+ archy（統治）",          suffix:"-archy", level:5, pos:"名詞"},
  {word:"oligarchy",     meaning:"寡頭政治",                  etymology:"oligo（少数）+ archy（統治）",           suffix:"-archy", level:5, pos:"名詞"},
  {word:"patriarchy",    meaning:"家父長制",                  etymology:"patri（父）+ archy（統治）",             suffix:"-archy", level:5, pos:"名詞"},
  {word:"matriarchy",    meaning:"母系社会・母権制",           etymology:"matri（母）+ archy（統治）",            suffix:"-archy", level:5, pos:"名詞"},
  {word:"tetrarchy",     meaning:"四頭政治",                  etymology:"tetra（四）+ archy（統治）",             suffix:"-archy", level:6, pos:"名詞"},
  {word:"diarchy",       meaning:"二頭政治",                  etymology:"di（二）+ archy（統治）",               suffix:"-archy", level:6, pos:"名詞"},
  {word:"polyarchy",     meaning:"多頭支配",                  etymology:"poly（多くの）+ archy（統治）",          suffix:"-archy", level:6, pos:"名詞"},
  {word:"gynarchy",      meaning:"女性支配",                  etymology:"gyn（女性）+ archy（統治）",             suffix:"-archy", level:6, pos:"名詞"},
  {word:"plutarchy",     meaning:"富豪支配",                  etymology:"plut（富）+ archy（統治）",              suffix:"-archy", level:6, pos:"名詞"},
  {word:"exarchy",       meaning:"総督管区（東方正教会）",     etymology:"ex（外の）+ archy（統治）",              suffix:"-archy", level:6, pos:"名詞"},
  {word:"triarchy",      meaning:"三頭政治",                  etymology:"tri（三）+ archy（統治）",              suffix:"-archy", level:6, pos:"名詞"},
  {word:"heptarchy",     meaning:"七王国時代（英国）",         etymology:"hepta（七）+ archy（統治）",            suffix:"-archy", level:6, pos:"名詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
