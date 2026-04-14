/**
 * data-prefix-14.js — 接頭語データ（omni-, pan-, philo-, path-/patho-, xeno-, eco-, logo-, somn-, somat-, macro-補足）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [

  // ── omni-（すべて・全方位） ──────────────────
  {word:"omnipotent",        meaning:"全能の",                       etymology:"omni（すべて）+ potent（力のある）",                 prefix:"omni-",   level:2, pos:"形容詞"},
  {word:"omniscient",        meaning:"全知の・すべてを知る",         etymology:"omni（すべて）+ scient（知っている）",               prefix:"omni-",   level:2, pos:"形容詞・動詞"},
  {word:"omnivore",          meaning:"雑食動物",                     etymology:"omni（すべて）+ vore（食べる）",                     prefix:"omni-",   level:1, pos:"名詞"},
  {word:"omnipresent",       meaning:"偏在する・どこにでもいる",     etymology:"omni（すべて）+ present（存在する）",               prefix:"omni-",   level:2, pos:"動詞"},
  {word:"omnibus",           meaning:"バス・総集編",                 etymology:"omni（すべて）+ bus（〜のため）→すべての人のために",   prefix:"omni-",   level:2, pos:"名詞"},
  {word:"omnivorous",        meaning:"雑食性の・何にでも興味を持つ", etymology:"omni（すべて）+ vorous（食べる）",                   prefix:"omni-",   level:2, pos:"形容詞・動詞"},
  {word:"omnipresence",      meaning:"偏在・遍在",                   etymology:"omni（すべて）+ presence（存在）",                   prefix:"omni-",   level:3, pos:"名詞"},
  {word:"omniscience",       meaning:"全知・全知全能",               etymology:"omni（すべて）+ science（知識）",                   prefix:"omni-",   level:3, pos:"名詞"},
  {word:"omnibenevolent",    meaning:"全善の",                       etymology:"omni（すべて）+ benevolent（善意の）",               prefix:"omni-",   level:3, pos:"形容詞"},
  {word:"omnidirectional",   meaning:"全方向の",                     etymology:"omni（すべて）+ directional（方向の）",              prefix:"omni-",   level:2, pos:"形容詞"},

  // ── pan-（すべて・全体） ──────────────────
  {word:"panorama",          meaning:"パノラマ・全景",               etymology:"pan（すべて）+ horama（見る）→全景を見渡す",          prefix:"pan-",    level:1, pos:"名詞"},
  {word:"panacea",           meaning:"万能薬・万能の解決策",         etymology:"pan（すべて）+ akea（治療）",                        prefix:"pan-",    level:2, pos:"名詞"},
  {word:"pantheon",          meaning:"万神殿・名誉の殿堂",           etymology:"pan（すべて）+ theon（神）→すべての神の神殿",          prefix:"pan-",    level:2, pos:"名詞"},
  {word:"panoptic",          meaning:"全体を見渡せる",               etymology:"pan（すべて）+ optic（見る）",                      prefix:"pan-",    level:3, pos:"動詞"},
  {word:"panopticon",        meaning:"一望監視施設",                 etymology:"pan（すべて）+ opticon（見るもの）",                 prefix:"pan-",    level:3, pos:"名詞"},
  {word:"panpsychism",       meaning:"汎心論",                       etymology:"pan（すべて）+ psychism（心の理論）",               prefix:"pan-",    level:3, pos:"名詞"},
  {word:"Pangea",            meaning:"パンゲア（古代超大陸）",       etymology:"pan（すべて）+ gaia（大地）→すべての大地",            prefix:"pan-",    level:2, pos:"名詞"},
  {word:"pangolin",          meaning:"センザンコウ",                 etymology:"pan（丸まる）+ guling（丸まる）→鱗に覆われた哺乳類",  prefix:"pan-",    level:2, pos:"名詞"},
  {word:"pandemic",          meaning:"世界的流行病・パンデミック",   etymology:"pan（すべて）+ demos（人々）→全人類に広がる病",        prefix:"pan-",    level:1, pos:"名詞"},
  {word:"pantheism",         meaning:"汎神論",                       etymology:"pan（すべて）+ theism（有神論）",                    prefix:"pan-",    level:3, pos:"名詞"},
  {word:"panoramic",         meaning:"パノラマの・全景の",           etymology:"pan（すべて）+ orama（見る）+ ic（〜の）",            prefix:"pan-",    level:2, pos:"形容詞"},

  // ── philo-/phil-（愛する・好む） ──────────────────
  {word:"philosophy",        meaning:"哲学",                         etymology:"philo（愛する）+ sophia（知恵）→知恵を愛すること",    prefix:"philo-",  level:1, pos:"名詞"},
  {word:"philanthropy",      meaning:"博愛・慈善活動",               etymology:"philo（愛する）+ anthropos（人間）→人間愛",           prefix:"philo-",  level:1, pos:"名詞"},
  {word:"philology",         meaning:"文献学・語源学",               etymology:"philo（愛する）+ logos（言葉）",                     prefix:"philo-",  level:3, pos:"名詞"},
  {word:"bibliophile",       meaning:"愛書家",                       etymology:"biblio（本）+ phile（愛する人）",                    prefix:"philo-",  level:2, pos:"名詞"},
  {word:"philharmonic",      meaning:"フィルハーモニーの・音楽愛好の", etymology:"philo（愛する）+ harmonia（調和）",                prefix:"philo-",  level:2, pos:"形容詞"},
  {word:"francophile",       meaning:"フランス文化愛好者",           etymology:"franco（フランスの）+ phile（愛する人）",             prefix:"philo-",  level:2, pos:"名詞"},
  {word:"cinephile",         meaning:"映画愛好家",                   etymology:"cine（映画）+ phile（愛する人）",                    prefix:"philo-",  level:2, pos:"名詞"},
  {word:"technophile",       meaning:"テクノロジー愛好者",           etymology:"techno（技術）+ phile（愛する人）",                  prefix:"philo-",  level:1, pos:"名詞"},
  {word:"philanthropist",    meaning:"慈善家",                       etymology:"philo（愛する）+ anthropos（人間）+ ist（人）",        prefix:"philo-",  level:1, pos:"名詞"},
  {word:"philatelist",       meaning:"切手収集家",                   etymology:"philo（愛する）+ ateleia（非課税）→切手愛好家",        prefix:"philo-",  level:3, pos:"名詞"},
  {word:"oenophile",         meaning:"ワイン愛好家",                 etymology:"oeno（ワイン）+ phile（愛する人）",                   prefix:"philo-",  level:3, pos:"名詞"},

  // ── path-/patho-（病・感情） ──────────────────
  {word:"pathology",         meaning:"病理学",                       etymology:"pathos（病気）+ logy（学）",                         prefix:"patho-",  level:2, pos:"名詞"},
  {word:"empathy",           meaning:"共感・感情移入",               etymology:"em（中に）+ pathos（感情）→感情の中に入る",           prefix:"patho-",  level:1, pos:"名詞"},
  {word:"apathy",            meaning:"無関心・無気力",               etymology:"a（否定）+ pathos（感情）→感情がない",                prefix:"patho-",  level:1, pos:"名詞"},
  {word:"antipathy",         meaning:"反感・嫌悪",                   etymology:"anti（反対）+ pathos（感情）→反対の感情",             prefix:"patho-",  level:2, pos:"名詞"},
  {word:"sociopath",         meaning:"社会病質者・反社会的人格者",   etymology:"socio（社会）+ pathos（病）→社会への病的態度",         prefix:"patho-",  level:2, pos:"名詞"},
  {word:"psychopath",        meaning:"精神病質者",                   etymology:"psycho（心）+ pathos（病）→心の病的状態",             prefix:"patho-",  level:2, pos:"名詞"},
  {word:"telepathy",         meaning:"テレパシー・精神感応",         etymology:"tele（遠く）+ pathos（感情）→遠く離れた感情伝達",      prefix:"patho-",  level:1, pos:"名詞"},
  {word:"neuropathy",        meaning:"神経障害",                     etymology:"neuro（神経）+ pathos（病）",                        prefix:"patho-",  level:3, pos:"名詞"},
  {word:"pathogen",          meaning:"病原体",                       etymology:"pathos（病気）+ gen（生む）",                        prefix:"patho-",  level:2, pos:"名詞"},
  {word:"pathetic",          meaning:"哀れな・感情的な",             etymology:"pathos（感情）+ etic（〜の）",                       prefix:"patho-",  level:1, pos:"形容詞"},
  {word:"osteopathy",        meaning:"骨療法",                       etymology:"osteo（骨）+ pathos（病）→骨の治療法",               prefix:"patho-",  level:3, pos:"名詞"},
  {word:"homeopathy",        meaning:"ホメオパシー・同種療法",       etymology:"homeo（同じ）+ pathos（病）→同種で治す療法",           prefix:"patho-",  level:2, pos:"名詞"},

  // ── xeno-（外来・異質） ──────────────────
  {word:"xenophobia",        meaning:"外国人嫌悪・排外主義",         etymology:"xenos（外国）+ phobia（恐怖）",                      prefix:"xeno-",   level:1, pos:"名詞"},
  {word:"xenophile",         meaning:"外国文化愛好者",               etymology:"xenos（外国）+ phile（愛する人）",                   prefix:"xeno-",   level:2, pos:"名詞"},
  {word:"xenolith",          meaning:"捕獲岩",                       etymology:"xenos（外来）+ lithos（石）→岩に取り込まれた異質な石", prefix:"xeno-",  level:3, pos:"名詞"},
  {word:"xenograft",         meaning:"異種移植",                     etymology:"xenos（外来）+ graft（移植）",                      prefix:"xeno-",   level:3, pos:"名詞"},
  {word:"xenobiotic",        meaning:"生体異物",                     etymology:"xenos（外来）+ biotic（生命の）→生体に異物な物質",    prefix:"xeno-",   level:3, pos:"名詞"},
  {word:"xenon",             meaning:"キセノン（元素）",             etymology:"xenos（異質の）→希ガスの意",                        prefix:"xeno-",   level:2, pos:"名詞"},
  {word:"xenophobic",        meaning:"外国人嫌悪の",                 etymology:"xenos（外国）+ phobic（恐怖の）",                    prefix:"xeno-",   level:2, pos:"形容詞"},

  // ── eco-（家・環境） ──────────────────
  {word:"ecology",           meaning:"生態学",                       etymology:"eco（家・環境）+ logy（学）",                        prefix:"eco-",    level:1, pos:"名詞"},
  {word:"economics",         meaning:"経済学",                       etymology:"eco（家・管理）+ nomics（法則）",                    prefix:"eco-",    level:1, pos:"名詞"},
  {word:"ecosystem",         meaning:"生態系",                       etymology:"eco（環境）+ system（体系）",                        prefix:"eco-",    level:1, pos:"名詞"},
  {word:"ecocide",           meaning:"生態系破壊",                   etymology:"eco（環境）+ cide（殺す）",                          prefix:"eco-",    level:2, pos:"名詞"},
  {word:"ecosphere",         meaning:"生態圏",                       etymology:"eco（環境）+ sphere（圏）",                          prefix:"eco-",    level:2, pos:"名詞"},
  {word:"ecotourism",        meaning:"エコツーリズム",               etymology:"eco（環境）+ tourism（観光）",                       prefix:"eco-",    level:1, pos:"名詞"},
  {word:"ecofriendly",       meaning:"環境に優しい",                 etymology:"eco（環境）+ friendly（友好的）",                    prefix:"eco-",    level:0, pos:"形容詞"},
  {word:"ecologist",         meaning:"生態学者",                     etymology:"eco（環境）+ logy（学）+ ist（者）",                  prefix:"eco-",    level:1, pos:"名詞"},
  {word:"ecoregion",         meaning:"生態地域",                     etymology:"eco（環境）+ region（地域）",                        prefix:"eco-",    level:2, pos:"名詞"},

  // ── logo-/logi-（言葉・論理） ──────────────────
  {word:"logic",             meaning:"論理・論理学",                 etymology:"logos（論理）+ ic（学）",                            prefix:"logo-",   level:0, pos:"名詞"},
  {word:"logistics",         meaning:"物流・ロジスティクス",         etymology:"logos（計算）+ istics（学）→軍事補給から転じた",      prefix:"logo-",   level:1, pos:"名詞"},
  {word:"logomania",         meaning:"言葉への強迫的熱狂",           etymology:"logo（言葉）+ mania（熱狂）",                        prefix:"logo-",   level:3, pos:"名詞"},
  {word:"logotype",          meaning:"ロゴタイプ・ロゴ",             etymology:"logo（言葉）+ type（型）",                           prefix:"logo-",   level:1, pos:"名詞"},
  {word:"logical",           meaning:"論理的な",                     etymology:"logos（論理）+ ical（〜の）",                        prefix:"logo-",   level:0, pos:"形容詞"},
  {word:"logician",          meaning:"論理学者",                     etymology:"logos（論理）+ ician（専門家）",                     prefix:"logo-",   level:2, pos:"名詞"},
  {word:"logarithm",         meaning:"対数",                         etymology:"logos（比）+ arithmos（数）",                        prefix:"logo-",   level:2, pos:"名詞"},
  {word:"epilogue",          meaning:"後書き・エピローグ",           etymology:"epi（後に）+ logue（言葉）",                         prefix:"logo-",   level:1, pos:"名詞"},
  {word:"monologue",         meaning:"独白・モノローグ",             etymology:"mono（一人）+ logue（言葉）",                        prefix:"logo-",   level:1, pos:"名詞"},
  {word:"tautology",         meaning:"同語反復・冗語",               etymology:"tauto（同じ）+ logy（言葉）",                        prefix:"logo-",   level:3, pos:"名詞"},
  {word:"genealogy",         meaning:"家系・系譜",                   etymology:"genea（家族）+ logy（学）",                          prefix:"logo-",   level:2, pos:"名詞"},

  // ── somn-（眠り） ──────────────────
  {word:"somnambulism",      meaning:"夢遊病",                       etymology:"somnus（眠り）+ ambul（歩く）+ ism（症状）",          prefix:"somn-",   level:2, pos:"名詞"},
  {word:"somnolent",         meaning:"眠そうな・催眠的な",           etymology:"somnus（眠り）+ olent（〜の傾向がある）",             prefix:"somn-",   level:3, pos:"形容詞"},
  {word:"insomnia",          meaning:"不眠症",                       etymology:"in（否定）+ somnia（眠り）",                         prefix:"somn-",   level:1, pos:"名詞"},
  {word:"somnambulist",      meaning:"夢遊病者",                     etymology:"somnus（眠り）+ ambul（歩く）+ ist（人）",            prefix:"somn-",   level:3, pos:"名詞"},
  {word:"somniferous",       meaning:"眠気を誘う",                   etymology:"somnus（眠り）+ ferous（もたらす）",                  prefix:"somn-",   level:3, pos:"名詞"},
  {word:"somniloquy",        meaning:"夢中に話すこと・寝言",         etymology:"somnus（眠り）+ loqui（話す）",                      prefix:"somn-",   level:3, pos:"名詞"},
  {word:"hypnosis",          meaning:"催眠",                         etymology:"hypnos（眠り）+ osis（状態）",                       prefix:"somn-",   level:1, pos:"名詞"},

  // ── somat-（体・身体） ──────────────────
  {word:"somatic",           meaning:"身体の・体細胞の",             etymology:"soma（体）+ tic（〜の）",                            prefix:"somat-",  level:2, pos:"形容詞"},
  {word:"chromosome",        meaning:"染色体",                       etymology:"chroma（色）+ soma（体）→色に染まる体",              prefix:"somat-",  level:2, pos:"名詞"},
  {word:"somatology",        meaning:"体質学",                       etymology:"soma（体）+ logy（学）",                            prefix:"somat-",  level:3, pos:"名詞"},
  {word:"somatotype",        meaning:"体型・体格",                   etymology:"soma（体）+ type（型）",                            prefix:"somat-",  level:3, pos:"名詞"},
  {word:"somatosensory",     meaning:"体性感覚の",                   etymology:"soma（体）+ sensory（感覚の）",                      prefix:"somat-",  level:3, pos:"形容詞"},
  {word:"psychosomatic",     meaning:"心身症の",                     etymology:"psycho（心）+ soma（体）+ tic（〜の）",              prefix:"somat-",  level:2, pos:"形容詞"},
  {word:"neurosoma",         meaning:"神経細胞体",                   etymology:"neuro（神経）+ soma（体）",                          prefix:"somat-",  level:3, pos:"名詞"},

  // ── macro-（大きい・全体的） ──────────────────
  {word:"macroscopic",       meaning:"肉眼で見える・巨視的な",       etymology:"macro（大きい）+ scopic（見る）",                    prefix:"macro-",  level:2, pos:"動詞・形容詞"},
  {word:"macronutrient",     meaning:"多量栄養素",                   etymology:"macro（大きい）+ nutrient（栄養素）",                prefix:"macro-",  level:2, pos:"名詞"},
  {word:"macrocosm",         meaning:"大宇宙・マクロコスモス",       etymology:"macro（大きい）+ cosmos（宇宙）",                    prefix:"macro-",  level:2, pos:"名詞"},
  {word:"macroeconomics",    meaning:"マクロ経済学",                 etymology:"macro（大きい）+ economics（経済学）",               prefix:"macro-",  level:2, pos:"名詞"},
  {word:"macroevolution",    meaning:"大進化",                       etymology:"macro（大きい）+ evolution（進化）",                 prefix:"macro-",  level:3, pos:"名詞"},
  {word:"macromolecule",     meaning:"高分子",                       etymology:"macro（大きい）+ molecule（分子）",                  prefix:"macro-",  level:3, pos:"名詞"},
  {word:"macrophage",        meaning:"マクロファージ・大食細胞",     etymology:"macro（大きい）+ phage（食べる）",                   prefix:"macro-",  level:3, pos:"名詞"},
  {word:"macrostructure",    meaning:"大構造・巨視的構造",           etymology:"macro（大きい）+ structure（構造）",                 prefix:"macro-",  level:3, pos:"名詞"},

  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
