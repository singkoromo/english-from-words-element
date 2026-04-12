/**
 * data-suffix-20.js — 接尾語補充12（-ory, -oid, -lysis）
 */
(function(){
  var d = [
  // ── -ory（場所・形容詞） ──────────────────────
  {word:"category",       meaning:"カテゴリー・範疇",       etymology:"kateg（告発する・分類する）+ ory（結果）", suffix:"-ory", level:1},
  {word:"directory",      meaning:"名簿・ディレクトリ",     etymology:"direct（導く）+ ory（場所）",             suffix:"-ory", level:1},
  {word:"victory",        meaning:"勝利",                  etymology:"victor（征服者）+ y（状態）",              suffix:"-ory", level:0},
  {word:"inventory",      meaning:"在庫・目録",             etymology:"invent（見つける）+ ory（場所）",          suffix:"-ory", level:2},
  {word:"statutory",      meaning:"法定の・法令による",     etymology:"statut（定めた）+ ory（形容詞）",          suffix:"-ory", level:3},
  {word:"supervisory",    meaning:"監督の・監視の",         etymology:"supervis（監督する）+ ory（形容詞）",      suffix:"-ory", level:2},
  {word:"regulatory",     meaning:"規制の・調整の",         etymology:"regulat（規制する）+ ory（形容詞）",       suffix:"-ory", level:2},
  {word:"expository",     meaning:"説明的な・解説の",       etymology:"exposit（説明する）+ ory（形容詞）",       suffix:"-ory", level:3},
  {word:"declaratory",    meaning:"宣言的な・表明の",       etymology:"declarat（宣言する）+ ory（形容詞）",      suffix:"-ory", level:3},
  {word:"contributory",   meaning:"貢献する・寄与する",     etymology:"contribut（貢献する）+ ory（形容詞）",     suffix:"-ory", level:3},
  {word:"reformatory",    meaning:"矯正施設・感化院",       etymology:"reform（改革する）+ atory（場所）",        suffix:"-ory", level:3},
  {word:"respiratory",    meaning:"呼吸の・呼吸器の",       etymology:"respirat（呼吸する）+ ory（形容詞）",      suffix:"-ory", level:2},
  {word:"oratory",        meaning:"雄弁術・礼拝堂",         etymology:"orat（話す）+ ory（行為・場所）",          suffix:"-ory", level:2},
  {word:"purgatory",      meaning:"煉獄・苦難の場所",       etymology:"purgat（清める）+ ory（場所）",            suffix:"-ory", level:3},
  {word:"factory",        meaning:"工場・製造所",           etymology:"fact（作る）+ ory（場所）",               suffix:"-ory", level:0},

  // ── -oid（…に似た・…形の） ──────────────────
  {word:"ellipsoid",      meaning:"楕円体・楕円形",         etymology:"ellips（楕円）+ oid（似た）",             suffix:"-oid", level:2},
  {word:"cuboid",         meaning:"直方体・立方体状の",     etymology:"cub（立方体）+ oid（似た）",              suffix:"-oid", level:2},
  {word:"sinusoid",       meaning:"正弦波形・副鼻腔様の",   etymology:"sinus（湾曲）+ oid（似た）",              suffix:"-oid", level:3},
  {word:"sigmoid",        meaning:"S字形の・S状の",         etymology:"sigma（Σ・S）+ oid（形）",                suffix:"-oid", level:2},
  {word:"diploid",        meaning:"二倍体の・二倍体",       etymology:"diplo（二重）+ oid（性質）",              suffix:"-oid", level:3},
  {word:"haploid",        meaning:"一倍体の・半数体",       etymology:"haplo（単純・一重）+ oid（性質）",         suffix:"-oid", level:3},
  {word:"polyploid",      meaning:"多倍体の",               etymology:"poly（多数）+ plo + oid（性質）",         suffix:"-oid", level:3},
  {word:"mastoid",        meaning:"乳様突起の・乳頭状の",   etymology:"masto（乳房・乳頭）+ oid（似た）",        suffix:"-oid", level:3},
  {word:"dermoid",        meaning:"皮様の・類皮性の",       etymology:"derm（皮膚）+ oid（似た）",               suffix:"-oid", level:3},
  {word:"fibroid",        meaning:"繊維腫・繊維状の",       etymology:"fibr（繊維）+ oid（似た）",               suffix:"-oid", level:2},
  {word:"mucoid",         meaning:"粘液状の・粘液様の",     etymology:"muc（粘液）+ oid（似た）",                suffix:"-oid", level:3},
  {word:"opioid",         meaning:"オピオイド・麻薬様物質", etymology:"opi（阿片）+ oid（似た）",                suffix:"-oid", level:2},
  {word:"cycloid",        meaning:"円滑線形の・循環性の",   etymology:"cyclo（円・輪）+ oid（似た）",            suffix:"-oid", level:3},
  {word:"carcinoid",      meaning:"カルチノイド腫瘍",       etymology:"carcin（がん）+ oid（似た）",             suffix:"-oid", level:3},
  {word:"xiphoid",        meaning:"剣状突起・剣状の",       etymology:"xipho（剣）+ oid（似た）",               suffix:"-oid", level:3},

  // ── -lysis（分解・溶解） ──────────────────────
  {word:"fibrinolysis",   meaning:"フィブリン溶解・線溶",   etymology:"fibrino（フィブリン）+ lysis（溶解）",    suffix:"-lysis", level:3},
  {word:"oncolysis",      meaning:"腫瘍細胞溶解",           etymology:"onco（腫瘍）+ lysis（溶解）",             suffix:"-lysis", level:3},
  {word:"radiolysis",     meaning:"放射線分解",             etymology:"radio（放射線）+ lysis（分解）",          suffix:"-lysis", level:3},
  {word:"osteolysis",     meaning:"骨溶解",                 etymology:"osteo（骨）+ lysis（溶解）",              suffix:"-lysis", level:3},
  {word:"thrombolysis",   meaning:"血栓溶解",               etymology:"thrombo（血栓）+ lysis（溶解）",          suffix:"-lysis", level:3},
  {word:"spondylolysis",  meaning:"脊椎分離症",             etymology:"spondylo（脊椎）+ lysis（分離）",         suffix:"-lysis", level:3},
  {word:"plasmolysis",    meaning:"原形質分離",             etymology:"plasmo（原形質）+ lysis（分離）",         suffix:"-lysis", level:3},
  {word:"chromatolysis",  meaning:"クロマチン溶解",         etymology:"chromato（クロマチン）+ lysis（溶解）",   suffix:"-lysis", level:3},
  {word:"urinalysis",     meaning:"尿検査・尿分析",         etymology:"urin（尿）+ analysis（分析）",            suffix:"-lysis", level:2},
  {word:"toxicolysis",    meaning:"毒素分解",               etymology:"toxico（毒）+ lysis（分解）",             suffix:"-lysis", level:3},
  {word:"spermatolysis",  meaning:"精子溶解",               etymology:"spermato（精子）+ lysis（溶解）",         suffix:"-lysis", level:3},
  {word:"sialolysis",     meaning:"唾液腺結石溶解",         etymology:"sialo（唾液）+ lysis（溶解）",            suffix:"-lysis", level:3},
  {word:"bacteriolysis",  meaning:"細菌溶解",               etymology:"bacterio（細菌）+ lysis（溶解）",         suffix:"-lysis", level:3},
  {word:"haemolysis",     meaning:"溶血・赤血球破壊",       etymology:"haemo（血）+ lysis（溶解）",              suffix:"-lysis", level:3},
  {word:"myolysis",       meaning:"筋肉溶解・筋融解",       etymology:"myo（筋肉）+ lysis（溶解）",              suffix:"-lysis", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
