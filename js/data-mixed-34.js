/**
 * data-mixed-34.js — 芸術・音楽・建築・文学用語（95語）
 * 形式: { word, meaning, etymology, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  /* ── 美術・視覚芸術 25語 ── */
  {word:"aesthetic",          meaning:"美的な・審美的",              etymology:"aistheta（感じる）+ ic（〜の）←ギリシャ語",     level:2, pos:"形容詞"},
  {word:"perspective",        meaning:"遠近法・見方",                etymology:"per（通して）+ spect（見る）+ ive（〜の）",     level:2, pos:"名詞"},
  {word:"composition",        meaning:"構図・作品",                  etymology:"com（共に）+ posit（置く）+ ion",               level:2, pos:"名詞"},
  {word:"chiaroscuro",        meaning:"明暗法・キアロスクーロ",      etymology:"chiaro（明るい）+ scuro（暗い）←イタリア語",    level:3, pos:"名詞"},
  {word:"impressionism",      meaning:"印象主義",                    etymology:"impression（印象）+ ism（主義）",               level:2, pos:"名詞"},
  {word:"expressionism",      meaning:"表現主義",                    etymology:"expression（表現）+ ism（主義）",               level:2, pos:"名詞"},
  {word:"surrealism",         meaning:"シュルレアリスム",            etymology:"sur（超えた）+ realism（現実主義）",            level:2, pos:"名詞"},
  {word:"cubism",             meaning:"キュビズム",                  etymology:"cube（立方体）+ ism（主義）",                   level:2, pos:"名詞"},
  {word:"abstraction",        meaning:"抽象・抽象化",                etymology:"ab（離れて）+ tract（引く）+ ion",              level:2, pos:"名詞"},
  {word:"figurative",         meaning:"具象的な",                    etymology:"figur（形）+ ative（〜の）",                   level:2, pos:"形容詞"},
  {word:"palette",            meaning:"パレット・色彩",              etymology:"palette（フランス語：小さな板）",               level:1, pos:"名詞"},
  {word:"fresco",             meaning:"フレスコ画",                  etymology:"fresco（イタリア語：新鮮な）→湿った壁に描く",   level:2, pos:"名詞"},
  {word:"pigment",            meaning:"顔料・色素",                  etymology:"pigment（ラテン語：塗料）",                     level:2, pos:"名詞"},
  {word:"juxtaposition",      meaning:"並列・対照",                  etymology:"juxta（隣に）+ position（位置）",               level:3, pos:"名詞"},
  {word:"gilded",             meaning:"金箔を張った",                etymology:"gild（金箔を張る）+ ed（〜された）",            level:2, pos:"形容詞"},
  {word:"trompe l'oeil",      meaning:"だまし絵",                    etymology:"trompe（だます）+ l'oeil（目）←フランス語",     level:3, pos:"名詞"},
  {word:"vignette",           meaning:"小品・縁模様",                etymology:"vigne（ぶどう）+ ette（小さい）",               level:3, pos:"名詞"},
  {word:"silhouette",         meaning:"シルエット・影絵",            etymology:"Silhouette（フランス財務大臣の名前）",          level:1, pos:"名詞"},
  {word:"mosaic",             meaning:"モザイク・寄せ絵",            etymology:"mosaicum（ラテン語：ムーサ女神の作）",          level:1, pos:"名詞"},
  {word:"pointillism",        meaning:"点描法",                      etymology:"pointill（点）+ ism（主義）",                   level:3, pos:"名詞"},
  {word:"sfumato",            meaning:"スフマート・ぼかし技法",      etymology:"sfumato（煙のような）←イタリア語",              level:3, pos:"名詞"},
  {word:"bas-relief",         meaning:"浅浮き彫り",                  etymology:"bas（低い）+ relief（浮き彫り）←フランス語",    level:3, pos:"名詞"},
  {word:"impasto",            meaning:"インパスト・厚塗り",          etymology:"impasto（練り混ぜた）←イタリア語",              level:3, pos:"名詞"},
  {word:"negative space",     meaning:"余白",                        etymology:"negative（否定的）+ space（空間）",             level:2, pos:"名詞"},
  {word:"medium",             meaning:"画材・媒体",                  etymology:"medium（ラテン語：中間）",                      level:1, pos:"名詞"},

  /* ── 音楽用語 25語 ── */
  {word:"harmony",            meaning:"和声・調和",                  etymology:"harmon（つなぐ）+ y（状態）←ギリシャ語",       level:1, pos:"名詞"},
  {word:"melody",             meaning:"旋律・メロディー",            etymology:"melos（歌）+ ody（歌）",                        level:1, pos:"名詞"},
  {word:"rhythm",             meaning:"リズム・拍子",                etymology:"rhythmos（流れ）←ギリシャ語",                  level:1, pos:"名詞"},
  {word:"tempo",              meaning:"テンポ・速度",                etymology:"tempo（イタリア語：時間）",                     level:1, pos:"名詞"},
  {word:"cadence",            meaning:"カデンツ・音の流れ",          etymology:"cadent（落ちる）+ e←ラテン語cadere",           level:2, pos:"名詞"},
  {word:"dissonance",         meaning:"不協和音",                    etymology:"dis（分離）+ son（音）+ ance（状態）",          level:2, pos:"名詞"},
  {word:"crescendo",          meaning:"クレッシェンド・次第に強く",  etymology:"crescendo（イタリア語：成長する）",             level:2, pos:"名詞・動詞"},
  {word:"staccato",           meaning:"スタッカート・音を切って",    etymology:"staccato（イタリア語：切り離された）",          level:2, pos:"名詞"},
  {word:"legato",             meaning:"レガート・なめらかに",        etymology:"legato（イタリア語：結ばれた）",               level:2, pos:"名詞・副詞"},
  {word:"vibrato",            meaning:"ビブラート・声の震え",        etymology:"vibrato（イタリア語：震わせた）",              level:2, pos:"名詞"},
  {word:"counterpoint",       meaning:"対位法",                      etymology:"contra（反対）+ point（点・音）",               level:3, pos:"名詞"},
  {word:"modulation",         meaning:"転調",                        etymology:"modul（調節）+ ation（行為）",                  level:3, pos:"名詞"},
  {word:"improvisation",      meaning:"即興演奏",                    etymology:"im（否定）+ provis（見通す）+ ation",          level:2, pos:"名詞"},
  {word:"overture",           meaning:"序曲",                        etymology:"over（超えて）+ ture（行為）←フランス語",       level:2, pos:"名詞"},
  {word:"aria",               meaning:"アリア・独唱曲",              etymology:"aria（イタリア語：空気・曲）",                  level:2, pos:"名詞"},
  {word:"opus",               meaning:"作品番号",                    etymology:"opus（ラテン語：作品）",                        level:2, pos:"名詞"},
  {word:"octave",             meaning:"オクターブ・8度音程",        etymology:"oct（八）+ ave←ラテン語octava",                 level:1, pos:"名詞"},
  {word:"timbre",             meaning:"音色",                        etymology:"timbre（フランス語：音の質）",                  level:2, pos:"名詞"},
  {word:"syncopation",        meaning:"シンコペーション",            etymology:"syn（共に）+ cop（切る）+ ation",               level:3, pos:"名詞"},
  {word:"pentatonic",         meaning:"五音音階の",                  etymology:"penta（五つ）+ ton（音）+ ic（〜の）",          level:3, pos:"形容詞"},
  {word:"pizzicato",          meaning:"ピチカート・弦をはじく",      etymology:"pizzicato（イタリア語：つねった）",             level:3, pos:"名詞・動詞"},
  {word:"polyphony",          meaning:"多声音楽",                    etymology:"poly（多くの）+ phony（音）",                   level:3, pos:"名詞"},
  {word:"symphony",           meaning:"交響曲",                      etymology:"sym（共に）+ phon（音）+ y",                   level:1, pos:"名詞"},
  {word:"libretto",           meaning:"台本・歌詞",                  etymology:"libro（本）+ etto（小さい）←イタリア語",        level:3, pos:"名詞"},
  {word:"diminuendo",         meaning:"ディミヌエンド・次第に弱く",  etymology:"diminuendo（イタリア語：小さくなる）",          level:2, pos:"名詞・動詞"},

  /* ── 建築・文学用語 20語 ── */
  {word:"facade",             meaning:"正面・ファサード",            etymology:"facade（フランス語：顔・表面）",               level:2, pos:"名詞"},
  {word:"baroque",            meaning:"バロック・過度に装飾された",  etymology:"barroco（歪んだ真珠）←ポルトガル語",           level:2, pos:"名詞・形容詞"},
  {word:"renaissance",        meaning:"ルネサンス・文芸復興",        etymology:"re（再び）+ naissance（生まれること）←フランス語",level:2, pos:"名詞"},
  {word:"gothic",             meaning:"ゴシック式の",                etymology:"Goth（ゲルマン民族）+ ic（〜の）",              level:2, pos:"形容詞"},
  {word:"vernacular",         meaning:"地方固有の・庶民的な",        etymology:"vernaculus（土着の）←ラテン語",                level:3, pos:"形容詞"},
  {word:"minimalist",         meaning:"ミニマリストの",              etymology:"minim（最小）+ alist（〜の人）",               level:2, pos:"形容詞"},
  {word:"atrium",             meaning:"アトリウム・中庭",            etymology:"atrium（ラテン語：前室）",                      level:2, pos:"名詞"},
  {word:"metaphor",           meaning:"比喩・メタファー",            etymology:"meta（超えて）+ phor（運ぶ）",                  level:2, pos:"名詞"},
  {word:"allegory",           meaning:"寓話・アレゴリー",            etymology:"allos（他の）+ agoria（語り）",                 level:2, pos:"名詞"},
  {word:"irony",              meaning:"皮肉・反語",                  etymology:"eiron（シラを切る人）←ギリシャ語",             level:2, pos:"名詞"},
  {word:"satire",             meaning:"風刺",                        etymology:"satira（ラテン語：混合詩）",                    level:2, pos:"名詞"},
  {word:"hyperbole",          meaning:"誇張法",                      etymology:"hyper（過ぎて）+ bole（投げる）",               level:2, pos:"名詞"},
  {word:"paradox",            meaning:"逆説",                        etymology:"para（超えて）+ dox（意見）",                   level:2, pos:"名詞"},
  {word:"protagonist",        meaning:"主人公",                      etymology:"proto（最初の）+ agonist（競争者）",           level:2, pos:"名詞"},
  {word:"antagonist",         meaning:"悪役・対立者",                etymology:"anti（反対）+ agonist（競争者）",              level:2, pos:"名詞"},
  {word:"denouement",         meaning:"大団円・解決",                etymology:"de（解く）+ nouer（結ぶ）+ ment←フランス語",   level:3, pos:"名詞"},
  {word:"foreshadowing",      meaning:"伏線・前兆",                  etymology:"fore（前に）+ shadow（影）+ ing",              level:2, pos:"名詞"},
  {word:"motif",              meaning:"モチーフ・主題",              etymology:"motif（フランス語：動機・主題）",               level:2, pos:"名詞"},
  {word:"elegy",              meaning:"哀歌・悲歌",                  etymology:"elegeia（ギリシャ語：悲しみの歌）",             level:2, pos:"名詞"},
  {word:"oxymoron",           meaning:"撞着語法",                    etymology:"oxy（鋭い）+ moron（鈍い）",                   level:3, pos:"名詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
