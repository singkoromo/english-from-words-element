/**
 * data-root-8.js — 語根データ（-cede-, -cert-, -cide-, -claim-, -clar-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -cede-/-ceed-/-cess-（行く・譲る） ──────────────────
  {word:"proceed",       meaning:"進む・続ける",               etymology:"pro（前に）+ ceed（行く）",               root:"-cede-", level:3, pos:"動詞"},
  {word:"succeed",       meaning:"成功する・後継する",          etymology:"suc（後に）+ ceed（行く）",              root:"-cede-", level:1, pos:"動詞"},
  {word:"exceed",        meaning:"超える・上回る",              etymology:"ex（外に）+ ceed（行く）",               root:"-cede-", level:3, pos:"動詞"},
  {word:"precede",       meaning:"先行する・前に来る",           etymology:"pre（前に）+ cede（行く）",              root:"-cede-", level:5, pos:"動詞"},
  {word:"recede",        meaning:"後退する・引く",              etymology:"re（後ろに）+ cede（行く）",             root:"-cede-", level:5, pos:"動詞"},
  {word:"concede",       meaning:"認める・譲歩する",            etymology:"con（共に）+ cede（行く）→譲歩する",     root:"-cede-", level:5, pos:"動詞"},
  {word:"secede",        meaning:"脱退する・離脱する",           etymology:"se（離れて）+ cede（行く）",             root:"-cede-", level:6, pos:"動詞"},
  {word:"accede",        meaning:"同意する・就任する",           etymology:"ac（〜に）+ cede（行く）",              root:"-cede-", level:6, pos:"動詞"},
  {word:"intercede",     meaning:"仲裁する・口添えする",         etymology:"inter（間に）+ cede（行く）",            root:"-cede-", level:6, pos:"動詞"},
  {word:"process",       meaning:"過程・処理する",              etymology:"pro（前に）+ cess（行く）",              root:"-cede-", level:1, pos:"名詞・動詞"},
  {word:"success",       meaning:"成功",                       etymology:"suc（後に）+ cess（行く）",             root:"-cede-", level:1, pos:"名詞"},
  {word:"excess",        meaning:"超過・余剰",                  etymology:"ex（外に）+ cess（行く）",              root:"-cede-", level:3, pos:"名詞"},
  {word:"recess",        meaning:"休憩・奥まった場所",           etymology:"re（後ろに）+ cess（行く）",            root:"-cede-", level:3, pos:"名詞"},
  {word:"concession",    meaning:"譲歩・利権",                  etymology:"con（共に）+ cession（行くこと）",       root:"-cede-", level:5, pos:"名詞"},
  {word:"recession",     meaning:"景気後退・後退",              etymology:"re（後ろに）+ cession（行くこと）",      root:"-cede-", level:5, pos:"名詞"},
  {word:"predecessor",   meaning:"前任者・前身",                etymology:"pre（前に）+ decessor（行く人）",        root:"-cede-", level:5, pos:"名詞"},
  {word:"secession",     meaning:"分離独立・脱退",              etymology:"se（離れて）+ cession（行くこと）",      root:"-cede-", level:6, pos:"名詞"},
  {word:"precedent",     meaning:"前例・先例",                  etymology:"pre（前に）+ cedent（行く）",            root:"-cede-", level:5, pos:"名詞"},
  {word:"unprecedented", meaning:"前例のない",                  etymology:"un（否定）+ precedented（前例のある）",  root:"-cede-", level:6, pos:"形容詞"},
  {word:"accession",     meaning:"就任・加盟・増加",             etymology:"ac（〜に）+ cession（行くこと）",        root:"-cede-", level:6, pos:"名詞"},

  // ── -cert-（確かな・明確な） ──────────────────
  {word:"certain",       meaning:"確かな・確信している",         etymology:"cert（確かな）+ ain（〜の）",            root:"-cert-", level:1, pos:"形容詞・動詞"},
  {word:"certify",       meaning:"証明する・認定する",           etymology:"cert（確かな）+ ify（〜にする）",        root:"-cert-", level:3, pos:"動詞"},
  {word:"certificate",   meaning:"証明書・資格証",              etymology:"cert（確かな）+ ificate（〜のもの）",    root:"-cert-", level:4, pos:"名詞"},
  {word:"concern",       meaning:"関心・心配する",               etymology:"con（共に）+ cern（確かめる）",          root:"-cert-", level:3, pos:"名詞・動詞"},
  {word:"discern",       meaning:"識別する・見分ける",           etymology:"dis（分けて）+ cern（確かめる）",        root:"-cert-", level:5, pos:"動詞"},
  {word:"concert",       meaning:"コンサート・協調",             etymology:"con（共に）+ cert（確かな）→合わせる",   root:"-cert-", level:1, pos:"名詞"},
  {word:"uncertain",     meaning:"不確かな・不確実な",           etymology:"un（否定）+ certain（確かな）",          root:"-cert-", level:2, pos:"形容詞"},
  {word:"ascertain",     meaning:"確認する・確かめる",           etymology:"as（〜に）+ certain（確かな）+ する",   root:"-cert-", level:5, pos:"動詞"},
  {word:"certitude",     meaning:"確信・確実性",                etymology:"cert（確かな）+ itude（状態）",          root:"-cert-", level:6, pos:"名詞"},
  {word:"discernment",   meaning:"識別力・洞察力",              etymology:"discern（識別する）+ ment（結果）",      root:"-cert-", level:6, pos:"名詞"},
  {word:"incertitude",   meaning:"不確実性",                    etymology:"in（否定）+ certitude（確実性）",        root:"-cert-", level:6, pos:"名詞"},
  {word:"concerted",     meaning:"共同の・一致した",             etymology:"concert（協調）+ ed（〜された）",       root:"-cert-", level:5, pos:"形容詞"},
  {word:"certification", meaning:"認証・証明",                  etymology:"certify（証明する）+ ation（行為）",     root:"-cert-", level:6, pos:"名詞"},
  {word:"discernible",   meaning:"識別できる・認識できる",        etymology:"discern（識別する）+ ible（できる）",    root:"-cert-", level:5, pos:"動詞"},

  // ── -cide-（切る・殺す） ──────────────────
  {word:"decide",        meaning:"決める・決断する",            etymology:"de（完全に）+ cide（切る）→迷いを断ち切る",root:"-cide-",level:1, pos:"動詞"},
  {word:"precise",       meaning:"正確な・精密な",              etymology:"pre（前に）+ cise（切る）→正確に切る",   root:"-cide-", level:3, pos:"形容詞"},
  {word:"incision",      meaning:"切開・切り込み",              etymology:"in（中に）+ cision（切ること）",         root:"-cide-", level:5, pos:"名詞"},
  {word:"concise",       meaning:"簡潔な・短い",                etymology:"con（完全に）+ cise（切る）",           root:"-cide-", level:5, pos:"形容詞"},
  {word:"decision",      meaning:"決定・判断",                  etymology:"de（完全に）+ cision（切ること）",       root:"-cide-", level:2, pos:"名詞"},
  {word:"decisive",      meaning:"決定的な・はっきりした",        etymology:"de（完全に）+ cis（切る）+ ive（性質）", root:"-cide-", level:3, pos:"形容詞"},
  {word:"excision",      meaning:"切除",                        etymology:"ex（外に）+ cision（切ること）",        root:"-cide-", level:6, pos:"名詞"},
  {word:"scissors",      meaning:"はさみ",                      etymology:"sciss（切る）+ ors（道具）",            root:"-cide-", level:1, pos:"名詞"},
  {word:"incisive",      meaning:"鋭い・鋭利な",                etymology:"in（中に）+ cis（切る）+ ive（性質）",   root:"-cide-", level:5, pos:"形容詞"},
  {word:"circumcision",  meaning:"割礼",                        etymology:"circum（周囲を）+ cision（切ること）",   root:"-cide-", level:6, pos:"名詞"},
  {word:"indecision",    meaning:"優柔不断",                    etymology:"in（否定）+ decision（決定）",          root:"-cide-", level:5, pos:"名詞"},
  {word:"decisiveness",  meaning:"決断力",                      etymology:"decisive（決定的な）+ ness（状態）",     root:"-cide-", level:6, pos:"名詞"},

  // ── -claim-/-clam-（叫ぶ・宣言する） ──────────────────
  {word:"claim",         meaning:"主張する・要求する",           etymology:"clam（叫ぶ）→ claim",                   root:"-claim-", level:3, pos:"動詞"},
  {word:"exclaim",       meaning:"叫ぶ・声に出す",              etymology:"ex（外に）+ claim（叫ぶ）",              root:"-claim-", level:3, pos:"動詞"},
  {word:"proclaim",      meaning:"宣言する・公表する",           etymology:"pro（前に）+ claim（叫ぶ）",             root:"-claim-", level:5, pos:"動詞"},
  {word:"reclaim",       meaning:"取り戻す・矯正する",           etymology:"re（再び）+ claim（要求する）",          root:"-claim-", level:5, pos:"動詞"},
  {word:"disclaim",      meaning:"否認する・放棄する",           etymology:"dis（否定）+ claim（主張する）",         root:"-claim-", level:5, pos:"動詞"},
  {word:"declaim",       meaning:"演説する・強調して語る",        etymology:"de（完全に）+ claim（叫ぶ）",            root:"-claim-", level:6, pos:"動詞"},
  {word:"acclaim",       meaning:"称賛する・歓声を上げる",        etymology:"ac（〜に）+ claim（叫ぶ）",              root:"-claim-", level:5, pos:"動詞"},
  {word:"clamor",        meaning:"騒ぎ・叫び声",                etymology:"clam（叫ぶ）+ or（〜するもの）",         root:"-claim-", level:5, pos:"名詞"},
  {word:"claimant",      meaning:"請求者・申請者",              etymology:"claim（要求する）+ ant（人）",           root:"-claim-", level:5, pos:"名詞"},
  {word:"proclamation",  meaning:"宣言・布告",                  etymology:"proclaim（宣言する）+ ation（行為）",    root:"-claim-", level:5, pos:"名詞"},
  {word:"disclaimer",    meaning:"免責事項・放棄",              etymology:"disclaim（否認する）+ er（〜するもの）", root:"-claim-", level:5, pos:"名詞"},
  {word:"exclamation",   meaning:"感嘆・叫び",                  etymology:"exclaim（叫ぶ）+ ation（行為）",         root:"-claim-", level:4, pos:"名詞"},
  {word:"reclamation",   meaning:"干拓・矯正・回収",             etymology:"reclaim（取り戻す）+ ation（行為）",     root:"-claim-", level:5, pos:"名詞"},
  {word:"clamorous",     meaning:"騒々しい・うるさい",           etymology:"clamor（騒ぎ）+ ous（〜な）",           root:"-claim-", level:5, pos:"形容詞"},

  // ── -clar-（明確な・輝く） ──────────────────
  {word:"clear",         meaning:"明確な・澄んだ",              etymology:"clar（明確な）→ clear",                  root:"-clar-", level:1, pos:"形容詞"},
  {word:"clarify",       meaning:"明確にする・解明する",         etymology:"clar（明確な）+ ify（〜にする）",        root:"-clar-", level:3, pos:"動詞"},
  {word:"clarity",       meaning:"明確さ・透明性",              etymology:"clar（明確な）+ ity（状態）",            root:"-clar-", level:5, pos:"名詞"},
  {word:"declare",       meaning:"宣言する・申告する",           etymology:"de（完全に）+ clar（明確な）+ e（する）",root:"-clar-", level:3, pos:"動詞"},
  {word:"clarinet",      meaning:"クラリネット",                etymology:"clar（明確な音）+ inet（小さい）",        root:"-clar-", level:3, pos:"名詞"},
  {word:"claret",        meaning:"赤ワイン（ボルドー）",         etymology:"clar（明確な・明るい色）+ et（小さい）",  root:"-clar-", level:6, pos:"名詞"},
  {word:"declaration",   meaning:"宣言・申告",                  etymology:"declare（宣言する）+ ation（行為）",     root:"-clar-", level:4, pos:"名詞"},
  {word:"clarification", meaning:"説明・解明",                  etymology:"clarify（明確にする）+ ation（行為）",   root:"-clar-", level:6, pos:"名詞"},
  {word:"clairvoyant",   meaning:"千里眼の・透視能力のある",     etymology:"clair（明確な）+ voyant（見る）",        root:"-clar-", level:6, pos:"形容詞・動詞"},
  {word:"eclair",        meaning:"エクレア（菓子）",             etymology:"e（外に）+ clair（輝く）→光るもの",     root:"-clar-", level:5, pos:"名詞"},
  {word:"elucidation",   meaning:"解明・説明",                  etymology:"e（外に）+ lucid（明確な）+ ation（行為）",root:"-clar-",level:7, pos:"名詞"},
  {word:"unclarity",     meaning:"不明確さ",                    etymology:"un（否定）+ clarity（明確さ）",          root:"-clar-", level:5, pos:"名詞"},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
