/**
 * data-root-14.js — 語根データ（-lat-, -leg-, -liber-, -ling-, -liter-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -lat-（運ぶ・広がる） ──────────────────
  {word:"relate",        meaning:"関係させる・話す",             etymology:"re（再び）+ late（運ぶ）→結び付ける",    root:"-lat-", level:1, pos:"動詞"},
  {word:"translate",     meaning:"翻訳する・移す",               etymology:"trans（横断して）+ late（運ぶ）",         root:"-lat-", level:1, pos:"動詞"},
  {word:"elate",         meaning:"意気揚々とさせる",              etymology:"e（外に）+ late（運ぶ）→高揚させる",     root:"-lat-", level:6, pos:"動詞"},
  {word:"dilate",        meaning:"拡大する・広がる",              etymology:"di（離れて）+ late（広がる）",            root:"-lat-", level:6, pos:"動詞"},
  {word:"legislate",     meaning:"立法する",                     etymology:"legis（法）+ late（運ぶ）→法を制定する", root:"-lat-", level:5, pos:"動詞"},
  {word:"collate",       meaning:"照合する・整理する",            etymology:"col（共に）+ late（運ぶ）",              root:"-lat-", level:6, pos:"動詞"},
  {word:"oblate",        meaning:"扁平な・扁球形の",              etymology:"ob（〜に対して）+ late（運ぶ）→押しつぶす",root:"-lat-",level:6, pos:"形容詞"},
  {word:"prelate",       meaning:"高位聖職者",                   etymology:"pre（前に）+ late（運ぶ）→先頭に立つ人", root:"-lat-", level:6, pos:"名詞"},
  {word:"relation",      meaning:"関係・親戚",                   etymology:"relate（関係させる）+ ion（行為）",       root:"-lat-", level:2, pos:"名詞"},
  {word:"relative",      meaning:"相対的な・親戚",               etymology:"relate（関係させる）+ ive（性質）",       root:"-lat-", level:3, pos:"形容詞・名詞"},
  {word:"translation",   meaning:"翻訳・移動",                   etymology:"translate（翻訳する）+ ion（行為）",      root:"-lat-", level:2, pos:"名詞"},
  {word:"correlation",   meaning:"相関・関連",                   etymology:"co（共に）+ relation（関係）",            root:"-lat-", level:5, pos:"名詞"},
  {word:"interpolate",   meaning:"補間する・挿入する",            etymology:"inter（間に）+ pol（磨く）+ ate（する）", root:"-lat-", level:6, pos:"動詞"},
  {word:"elation",       meaning:"意気揚々・歓喜",               etymology:"elate（高揚させる）+ ion（状態）",        root:"-lat-", level:6, pos:"名詞"},

  // ── -leg-/-lect-/-lig-（選ぶ・読む・集める） ──────────────────
  {word:"select",        meaning:"選ぶ・選択する",               etymology:"se（離れて）+ lect（選ぶ）",             root:"-leg-", level:1, pos:"動詞"},
  {word:"collect",       meaning:"集める・収集する",              etymology:"col（共に）+ lect（集める）",             root:"-leg-", level:1, pos:"動詞"},
  {word:"elect",         meaning:"選出する・選ぶ",               etymology:"e（外に）+ lect（選ぶ）",               root:"-leg-", level:3, pos:"動詞"},
  {word:"neglect",       meaning:"無視する・怠る",               etymology:"neg（否定）+ lect（選ぶ）→選ばない→放置",root:"-leg-", level:3, pos:"動詞"},
  {word:"intellect",     meaning:"知性・理解力",                 etymology:"inter（間に）+ lect（選ぶ）→識別する",   root:"-leg-", level:5, pos:"名詞"},
  {word:"eligible",      meaning:"資格のある・適格の",            etymology:"e（外に）+ lig（選ぶ）+ ible（できる）", root:"-leg-", level:5, pos:"動詞・形容詞"},
  {word:"diligent",      meaning:"勤勉な・熱心な",               etymology:"di（完全に）+ lig（選ぶ）+ ent（〜な）→好んで選ぶ",root:"-leg-",level:3, pos:"形容詞"},
  {word:"intelligent",   meaning:"知的な・頭のよい",              etymology:"inter（間に）+ lig（選ぶ）+ ent（〜な）",root:"-leg-", level:2, pos:"形容詞"},
  {word:"legend",        meaning:"伝説・凡例",                   etymology:"leg（読む）+ end（〜のもの）→読まれるもの",root:"-leg-",level:3, pos:"名詞"},
  {word:"legislation",   meaning:"立法・法律",                   etymology:"legislate（立法する）+ ion（行為）",      root:"-leg-", level:5, pos:"名詞"},
  {word:"legitimate",    meaning:"合法的な・正当な",              etymology:"legit（法）+ imate（〜にする）",         root:"-leg-", level:5, pos:"形容詞"},
  {word:"legal",         meaning:"法律の・合法的な",              etymology:"leg（法）+ al（〜の）",                 root:"-leg-", level:3, pos:"形容詞"},
  {word:"delegate",      meaning:"代表者・委任する",              etymology:"de（下に）+ leg（使者）+ ate（〜にする）",root:"-leg-",level:5, pos:"名詞・動詞"},
  {word:"intellect",     meaning:"知性・理解力",                 etymology:"intel（間に）+ lect（選ぶ）",            root:"-leg-", level:5, pos:"名詞"},

  // ── -liber-（自由・解放） ──────────────────
  {word:"liberal",       meaning:"自由主義の・気前のよい",        etymology:"liber（自由）+ al（〜の）",              root:"-liber-", level:3, pos:"形容詞"},
  {word:"liberate",      meaning:"解放する・自由にする",          etymology:"liber（自由）+ ate（する）",             root:"-liber-", level:5, pos:"動詞"},
  {word:"liberty",       meaning:"自由・解放",                   etymology:"liber（自由）+ ty（状態）",              root:"-liber-", level:3, pos:"名詞"},
  {word:"deliberate",    meaning:"熟慮した・意図的な",            etymology:"de（完全に）+ liber（自由）+ ate（する）→よく考える",root:"-liber-",level:5, pos:"形容詞"},
  {word:"deliver",       meaning:"届ける・解放する",              etymology:"de（完全に）+ liver（自由）→解放する",   root:"-liber-", level:2, pos:"動詞"},
  {word:"liberation",    meaning:"解放・自由化",                 etymology:"liberate（解放する）+ ion（行為）",       root:"-liber-", level:5, pos:"名詞"},
  {word:"libertarian",   meaning:"自由主義者",                   etymology:"liberty（自由）+ arian（主義者）",        root:"-liber-", level:6, pos:"名詞"},
  {word:"liberalism",    meaning:"自由主義",                     etymology:"liberal（自由主義の）+ ism（主義）",      root:"-liber-", level:5, pos:"名詞"},
  {word:"illiberal",     meaning:"心の狭い・非自由主義的な",      etymology:"il（否定）+ liberal（自由主義の）",       root:"-liber-", level:6, pos:"形容詞"},
  {word:"neoliberal",    meaning:"新自由主義の",                 etymology:"neo（新しい）+ liberal（自由主義の）",    root:"-liber-", level:5, pos:"形容詞"},
  {word:"liberalize",    meaning:"自由化する",                   etymology:"liberal（自由主義の）+ ize（する）",      root:"-liber-", level:5, pos:"動詞"},
  {word:"deliberation",  meaning:"熟慮・審議",                   etymology:"deliberate（熟慮した）+ ion（行為）",     root:"-liber-", level:7, pos:"名詞"},

  // ── -ling-/-lang-（言語・舌） ──────────────────
  {word:"language",      meaning:"言語・言葉",                   etymology:"lang（舌）+ uage（〜のもの）",           root:"-ling-", level:1, pos:"名詞"},
  {word:"linguistics",   meaning:"言語学",                       etymology:"ling（言語）+ uistics（学問）",           root:"-ling-", level:5, pos:"名詞"},
  {word:"bilingual",     meaning:"二言語使用の",                 etymology:"bi（二つ）+ lingual（言語の）",          root:"-ling-", level:3, pos:"形容詞"},
  {word:"multilingual",  meaning:"多言語の",                    etymology:"multi（多くの）+ lingual（言語の）",      root:"-ling-", level:5, pos:"形容詞"},
  {word:"lingual",       meaning:"舌の・言語の",                 etymology:"ling（舌）+ ual（〜の）",               root:"-ling-", level:5, pos:"形容詞"},
  {word:"lingua franca", meaning:"共通語・国際語",               etymology:"lingua（舌・言語）+ franca（フランク）",  root:"-ling-", level:6, pos:"名詞"},
  {word:"sociolinguistics",meaning:"社会言語学",                etymology:"socio（社会）+ linguistics（言語学）",    root:"-ling-", level:7, pos:"名詞"},
  {word:"psycholinguistics",meaning:"心理言語学",               etymology:"psycho（心理）+ linguistics（言語学）",   root:"-ling-", level:7, pos:"名詞"},
  {word:"monolingual",   meaning:"一言語の",                    etymology:"mono（一つ）+ lingual（言語の）",        root:"-ling-", level:4, pos:"形容詞"},
  {word:"sublingual",    meaning:"舌下の",                      etymology:"sub（下に）+ lingual（舌の）",           root:"-ling-", level:6, pos:"形容詞"},
  {word:"lingerie",      meaning:"ランジェリー",                 etymology:"linge（亜麻布）→ 下着",                  root:"-ling-", level:5, pos:"名詞"},
  {word:"lingo",         meaning:"専門語・訛り",                 etymology:"lingua（言語）→ lingo",                  root:"-ling-", level:5, pos:"名詞"},

  // ── -liter-（文字・文学） ──────────────────
  {word:"literature",    meaning:"文学・文献",                   etymology:"liter（文字）+ ature（〜のもの）",        root:"-liter-", level:2, pos:"名詞"},
  {word:"literal",       meaning:"文字通りの・字義通りの",        etymology:"liter（文字）+ al（〜の）",              root:"-liter-", level:3, pos:"形容詞"},
  {word:"literate",      meaning:"読み書きができる・教育を受けた", etymology:"liter（文字）+ ate（〜な）",             root:"-liter-", level:3, pos:"動詞・形容詞"},
  {word:"illiterate",    meaning:"文盲の・読み書きできない",       etymology:"il（否定）+ literate（読み書きができる）",root:"-liter-",level:4, pos:"形容詞"},
  {word:"literacy",      meaning:"識字能力・読み書き能力",        etymology:"literate（読み書きができる）+ cy（状態）", root:"-liter-", level:4, pos:"名詞"},
  {word:"literary",      meaning:"文学の・文学的な",             etymology:"liter（文字）+ ary（〜の）",             root:"-liter-", level:4, pos:"形容詞"},
  {word:"obliterate",    meaning:"消す・完全に取り除く",          etymology:"ob（〜に対して）+ literate（書かれた）+ ate（する）→書かれたものを消す",root:"-liter-",level:6, pos:"動詞"},
  {word:"alliteration",  meaning:"頭韻法",                       etymology:"al（〜に）+ liter（文字）+ ation（行為）",root:"-liter-",level:7, pos:"名詞"},
  {word:"transliterate", meaning:"音訳する・転写する",            etymology:"trans（超えて）+ liter（文字）+ ate（する）",root:"-liter-",level:6, pos:"動詞"},
  {word:"literal-minded",meaning:"字義どおりにしか考えない",      etymology:"literal（文字通りの）+ minded（考える）", root:"-liter-", level:6, pos:"形容詞"},
  {word:"preliterate",   meaning:"文字以前の・無文字の",          etymology:"pre（前に）+ literate（読み書き）",       root:"-liter-", level:6, pos:"形容詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
