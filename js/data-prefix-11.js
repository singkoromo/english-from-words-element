/**
 * data-prefix-11.js — 接頭語データ（psycho-, aero-, hydro-, astro-, neuro-, eco-, iso-, socio-, xeno-, paleo-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── psycho-（心・精神） ──────────────────
  {word:"psychology",        meaning:"心理学",                    etymology:"psycho（心）+ logy（学問）",                   prefix:"psycho-", level:1},
  {word:"psychologist",      meaning:"心理学者",                  etymology:"psycho（心）+ logist（専門家）",               prefix:"psycho-", level:1},
  {word:"psychosis",         meaning:"精神病・精神異常",            etymology:"psycho（精神）+ sis（状態）",                  prefix:"psycho-", level:3},
  {word:"psychotic",         meaning:"精神病の・精神病者",          etymology:"psycho（精神）+ tic（〜の）",                  prefix:"psycho-", level:3},
  {word:"psychopath",        meaning:"精神病質者・サイコパス",      etymology:"psycho（精神）+ path（苦しみ）",               prefix:"psycho-", level:2},
  {word:"psychoanalysis",    meaning:"精神分析",                  etymology:"psycho（精神）+ analysis（分析）",             prefix:"psycho-", level:2},
  {word:"psychotherapy",     meaning:"精神療法・心理療法",          etymology:"psycho（精神）+ therapy（治療）",              prefix:"psycho-", level:2},
  {word:"psychedelic",       meaning:"幻覚を引き起こす・サイケデリック", etymology:"psycho（精神）+ delic（明らかにする）",    prefix:"psycho-", level:2},
  {word:"psychiatric",       meaning:"精神医学の",                 etymology:"psycho（精神）+ iatric（医療の）",             prefix:"psycho-", level:2},
  {word:"psychiatry",        meaning:"精神医学",                  etymology:"psycho（精神）+ iatry（医療）",               prefix:"psycho-", level:2},
  {word:"psychosomatic",     meaning:"心身症の・心身相関の",        etymology:"psycho（精神）+ somatic（身体の）",            prefix:"psycho-", level:3},
  {word:"psychological",     meaning:"心理的な・精神的な",          etymology:"psycho（心）+ logical（〜の）",               prefix:"psycho-", level:1},
  {word:"psycholinguistics", meaning:"心理言語学",                 etymology:"psycho（精神）+ linguistics（言語学）",        prefix:"psycho-", level:3},
  {word:"psychomotor",       meaning:"精神運動の",                 etymology:"psycho（精神）+ motor（運動）",               prefix:"psycho-", level:3},
  {word:"psychosocial",      meaning:"心理社会的な",               etymology:"psycho（精神）+ social（社会の）",             prefix:"psycho-", level:2},

  // ── aero-（空気・航空） ──────────────────
  {word:"aerobics",          meaning:"有酸素運動・エアロビクス",    etymology:"aero（空気）+ bics（生命）",                   prefix:"aero-",   level:1},
  {word:"aerodynamics",      meaning:"空気力学",                  etymology:"aero（空気）+ dynamics（力学）",               prefix:"aero-",   level:2},
  {word:"aeronautics",       meaning:"航空学・飛行術",             etymology:"aero（空気）+ nautics（航行）",                prefix:"aero-",   level:2},
  {word:"aerospace",         meaning:"宇宙航空（産業）",           etymology:"aero（空気）+ space（空間）",                  prefix:"aero-",   level:2},
  {word:"aerosol",           meaning:"エアロゾル・スプレー",        etymology:"aero（空気）+ sol（溶液）",                    prefix:"aero-",   level:1},
  {word:"aerobic",           meaning:"有酸素の・好気性の",          etymology:"aero（空気）+ bic（生命）",                   prefix:"aero-",   level:2},
  {word:"anaerobic",         meaning:"無酸素の・嫌気性の",          etymology:"an（否定）+ aero（空気）+ bic（生命）",         prefix:"aero-",   level:3},
  {word:"aeroplane",         meaning:"飛行機",                    etymology:"aero（空気）+ plane（平面）",                  prefix:"aero-",   level:0},
  {word:"aerodrome",         meaning:"飛行場・小型空港",            etymology:"aero（空気）+ drome（走る場所）",              prefix:"aero-",   level:2},
  {word:"aerobatic",         meaning:"曲技飛行の",                 etymology:"aero（空気）+ batic（歩く〜）",               prefix:"aero-",   level:3},
  {word:"aerofoil",          meaning:"翼型・エアロフォイル",        etymology:"aero（空気）+ foil（薄板）",                   prefix:"aero-",   level:3},
  {word:"aerology",          meaning:"高層気象学",                 etymology:"aero（空気）+ logy（学問）",                   prefix:"aero-",   level:3},

  // ── hydro-（水） ──────────────────
  {word:"hydrogen",          meaning:"水素",                      etymology:"hydro（水）+ gen（生む）→水を生む",             prefix:"hydro-",  level:1},
  {word:"hydrology",         meaning:"水文学",                    etymology:"hydro（水）+ logy（学問）",                    prefix:"hydro-",  level:2},
  {word:"hydraulic",         meaning:"水力の・油圧の",             etymology:"hydro（水）+ aulic（管の）",                   prefix:"hydro-",  level:2},
  {word:"hydroelectric",     meaning:"水力発電の",                 etymology:"hydro（水）+ electric（電気）",                prefix:"hydro-",  level:2},
  {word:"hydrant",           meaning:"消火栓",                    etymology:"hydro（水）+ ant（〜もの）",                   prefix:"hydro-",  level:1},
  {word:"hydrate",           meaning:"水和物・水和する",            etymology:"hydro（水）+ ate（〜にする）",                 prefix:"hydro-",  level:2},
  {word:"hydrophobic",       meaning:"疎水性の・水を嫌う",          etymology:"hydro（水）+ phobic（恐怖の）",                prefix:"hydro-",  level:3},
  {word:"hydropower",        meaning:"水力発電",                   etymology:"hydro（水）+ power（力）",                    prefix:"hydro-",  level:2},
  {word:"hydrosphere",       meaning:"水圏",                      etymology:"hydro（水）+ sphere（球・圏）",                prefix:"hydro-",  level:3},
  {word:"hydrothermal",      meaning:"熱水の",                    etymology:"hydro（水）+ thermal（熱の）",                 prefix:"hydro-",  level:3},
  {word:"hydrodynamics",     meaning:"流体力学",                   etymology:"hydro（水）+ dynamics（力学）",                prefix:"hydro-",  level:3},
  {word:"hydroplane",        meaning:"水上飛行機・水面滑走する",    etymology:"hydro（水）+ plane（平面）",                   prefix:"hydro-",  level:2},

  // ── astro-（星・宇宙） ──────────────────
  {word:"astronomy",         meaning:"天文学",                    etymology:"astro（星）+ nomy（法則・学問）",               prefix:"astro-",  level:1},
  {word:"astrology",         meaning:"占星術",                    etymology:"astro（星）+ logy（学問）",                    prefix:"astro-",  level:1},
  {word:"astronaut",         meaning:"宇宙飛行士",                 etymology:"astro（星）+ naut（航行者）",                  prefix:"astro-",  level:1},
  {word:"astrophysics",      meaning:"天体物理学",                 etymology:"astro（星）+ physics（物理学）",               prefix:"astro-",  level:2},
  {word:"asteroid",          meaning:"小惑星",                    etymology:"astro（星）+ oid（〜のような）",               prefix:"astro-",  level:1},
  {word:"astral",            meaning:"星の・天体の",               etymology:"astro（星）+ al（〜の）",                      prefix:"astro-",  level:2},
  {word:"astronomer",        meaning:"天文学者",                   etymology:"astro（星）+ nomer（学者）",                   prefix:"astro-",  level:1},
  {word:"astrodynamics",     meaning:"宇宙力学",                   etymology:"astro（星）+ dynamics（力学）",                prefix:"astro-",  level:3},
  {word:"asterisk",          meaning:"アスタリスク・星印",          etymology:"aster（星）+ isk（小さい）",                   prefix:"astro-",  level:1},
  {word:"disaster",          meaning:"災害・惨事",                 etymology:"dis（否定）+ aster（星）→不吉な星",            prefix:"astro-",  level:1},
  {word:"astrobiology",      meaning:"宇宙生物学",                 etymology:"astro（星・宇宙）+ biology（生物学）",          prefix:"astro-",  level:3},
  {word:"astrochemistry",    meaning:"宇宙化学",                   etymology:"astro（宇宙）+ chemistry（化学）",             prefix:"astro-",  level:3},

  // ── neuro-（神経） ──────────────────
  {word:"neurology",         meaning:"神経学",                    etymology:"neuro（神経）+ logy（学問）",                  prefix:"neuro-",  level:2},
  {word:"neuron",            meaning:"神経細胞・ニューロン",        etymology:"neuro（神経）+ n（細胞）",                     prefix:"neuro-",  level:2},
  {word:"neurological",      meaning:"神経学の",                   etymology:"neuro（神経）+ logical（〜の）",               prefix:"neuro-",  level:2},
  {word:"neurologist",       meaning:"神経科医",                   etymology:"neuro（神経）+ logist（専門家）",              prefix:"neuro-",  level:2},
  {word:"neuropathy",        meaning:"末梢神経障害",               etymology:"neuro（神経）+ pathy（病気）",                 prefix:"neuro-",  level:3},
  {word:"neuroscience",      meaning:"神経科学",                   etymology:"neuro（神経）+ science（科学）",               prefix:"neuro-",  level:2},
  {word:"neurotransmitter",  meaning:"神経伝達物質",               etymology:"neuro（神経）+ transmitter（送信器）",          prefix:"neuro-",  level:3},
  {word:"neurotic",          meaning:"神経症的な・ノイローゼの",    etymology:"neuro（神経）+ tic（〜の）",                   prefix:"neuro-",  level:2},
  {word:"neural",            meaning:"神経の",                    etymology:"neuro（神経）+ al（〜の）",                    prefix:"neuro-",  level:2},
  {word:"neuralgia",         meaning:"神経痛",                    etymology:"neuro（神経）+ algia（痛み）",                 prefix:"neuro-",  level:3},
  {word:"neurobiology",      meaning:"神経生物学",                 etymology:"neuro（神経）+ biology（生物学）",              prefix:"neuro-",  level:3},
  {word:"neuroplasticity",   meaning:"神経可塑性",                 etymology:"neuro（神経）+ plasticity（可塑性）",           prefix:"neuro-",  level:3},

  // ── eco-（生態・環境） ──────────────────
  {word:"ecology",           meaning:"生態学",                    etymology:"eco（家・環境）+ logy（学問）",                 prefix:"eco-",    level:1},
  {word:"ecosystem",         meaning:"生態系",                    etymology:"eco（生態）+ system（体系）",                   prefix:"eco-",    level:1},
  {word:"economic",          meaning:"経済の・経済的な",            etymology:"eco（家・管理）+ nomic（法則）",               prefix:"eco-",    level:0},
  {word:"economy",           meaning:"経済・節約",                 etymology:"eco（家）+ nomy（管理・法則）",                 prefix:"eco-",    level:0},
  {word:"economist",         meaning:"経済学者",                   etymology:"eco（家・管理）+ nomist（専門家）",             prefix:"eco-",    level:1},
  {word:"ecological",        meaning:"生態学的な・環境の",          etymology:"eco（生態）+ logical（〜の）",                 prefix:"eco-",    level:2},
  {word:"ecologist",         meaning:"生態学者",                   etymology:"eco（生態）+ logist（専門家）",                prefix:"eco-",    level:2},
  {word:"ecotourism",        meaning:"エコツーリズム",              etymology:"eco（生態）+ tourism（観光）",                  prefix:"eco-",    level:2},
  {word:"ecocentric",        meaning:"生態中心的な",               etymology:"eco（生態）+ centric（中心の）",               prefix:"eco-",    level:3},
  {word:"ecovillage",        meaning:"エコビレッジ・環境村",        etymology:"eco（環境）+ village（村）",                   prefix:"eco-",    level:2},
  {word:"ecotone",           meaning:"推移帯・生態境界域",          etymology:"eco（生態）+ tone（張力）",                    prefix:"eco-",    level:3},
  {word:"ecoregion",         meaning:"生態地域",                   etymology:"eco（生態）+ region（地域）",                  prefix:"eco-",    level:3},

  // ── iso-（等しい・同じ） ──────────────────
  {word:"isotope",           meaning:"同位体",                    etymology:"iso（等しい）+ tope（場所）→同じ場所",          prefix:"iso-",    level:3},
  {word:"isobar",            meaning:"等圧線",                    etymology:"iso（等しい）+ bar（重さ・圧力）",              prefix:"iso-",    level:2},
  {word:"isosceles",         meaning:"二等辺の（三角形）",          etymology:"iso（等しい）+ skelos（脚）",                  prefix:"iso-",    level:2},
  {word:"isolation",         meaning:"孤立・隔離",                 etymology:"iso（単独）+ lation（状態）",                  prefix:"iso-",    level:1},
  {word:"isometric",         meaning:"等尺の・等長の",             etymology:"iso（等しい）+ metric（測定）",                prefix:"iso-",    level:2},
  {word:"isotherm",          meaning:"等温線",                    etymology:"iso（等しい）+ therm（熱）",                   prefix:"iso-",    level:2},
  {word:"isomer",            meaning:"異性体",                    etymology:"iso（等しい）+ mer（部分）",                   prefix:"iso-",    level:3},
  {word:"isomorphic",        meaning:"同形の・等質な",             etymology:"iso（等しい）+ morphic（形の）",               prefix:"iso-",    level:3},
  {word:"isolate",           meaning:"孤立させる・隔離する",        etymology:"iso（単独）+ late（〜にする）",                prefix:"iso-",    level:1},
  {word:"isotonic",          meaning:"等張の（溶液）",             etymology:"iso（等しい）+ tonic（緊張）",                 prefix:"iso-",    level:3},
  {word:"isocline",          meaning:"等傾斜線・等磁気傾斜線",      etymology:"iso（等しい）+ cline（傾く）",                 prefix:"iso-",    level:3},
  {word:"isochronous",       meaning:"等時の・同時の",             etymology:"iso（等しい）+ chronous（時間の）",            prefix:"iso-",    level:3},

  // ── socio-（社会） ──────────────────
  {word:"sociology",         meaning:"社会学",                    etymology:"socio（社会）+ logy（学問）",                  prefix:"socio-",  level:1},
  {word:"socioeconomic",     meaning:"社会経済的な",               etymology:"socio（社会）+ economic（経済の）",            prefix:"socio-",  level:2},
  {word:"sociological",      meaning:"社会学的な",                 etymology:"socio（社会）+ logical（〜の）",               prefix:"socio-",  level:2},
  {word:"sociologist",       meaning:"社会学者",                   etymology:"socio（社会）+ logist（専門家）",              prefix:"socio-",  level:2},
  {word:"sociolinguistics",  meaning:"社会言語学",                 etymology:"socio（社会）+ linguistics（言語学）",          prefix:"socio-",  level:3},
  {word:"sociopolitical",    meaning:"社会政治的な",               etymology:"socio（社会）+ political（政治的）",           prefix:"socio-",  level:2},
  {word:"socialization",     meaning:"社会化・社交化",             etymology:"socio（社会）+ lization（〜化）",              prefix:"socio-",  level:2},
  {word:"sociopath",         meaning:"反社会的人格者",             etymology:"socio（社会）+ path（苦しみ）",                prefix:"socio-",  level:2},
  {word:"sociocultural",     meaning:"社会文化的な",               etymology:"socio（社会）+ cultural（文化的な）",          prefix:"socio-",  level:2},
  {word:"sociobiology",      meaning:"社会生物学",                 etymology:"socio（社会）+ biology（生物学）",             prefix:"socio-",  level:3},
  {word:"sociometry",        meaning:"社会測定学",                 etymology:"socio（社会）+ metry（測定）",                 prefix:"socio-",  level:3},
  {word:"sociohistorical",   meaning:"社会歴史的な",               etymology:"socio（社会）+ historical（歴史的）",          prefix:"socio-",  level:3},

  // ── xeno-（外国・異質） ──────────────────
  {word:"xenophobia",        meaning:"外国人嫌い・排外主義",        etymology:"xeno（外国）+ phobia（恐怖）",                 prefix:"xeno-",   level:2},
  {word:"xenophobic",        meaning:"外国人嫌いの",               etymology:"xeno（外国）+ phobic（恐怖の）",               prefix:"xeno-",   level:2},
  {word:"xenophile",         meaning:"外国好き・外国文化愛好者",    etymology:"xeno（外国）+ phile（愛好者）",                prefix:"xeno-",   level:2},
  {word:"xenograft",         meaning:"異種移植",                  etymology:"xeno（異質）+ graft（移植）",                  prefix:"xeno-",   level:3},
  {word:"xenolith",          meaning:"捕獲岩・外来岩",             etymology:"xeno（外来）+ lith（石）",                     prefix:"xeno-",   level:3},
  {word:"xenobiotic",        meaning:"生体異物",                  etymology:"xeno（異質）+ biotic（生命の）",               prefix:"xeno-",   level:3},
  {word:"xenogenesis",       meaning:"異種発生",                  etymology:"xeno（異質）+ genesis（起源）",                prefix:"xeno-",   level:3},
  {word:"xenocryst",         meaning:"異質斑晶",                  etymology:"xeno（外来）+ cryst（結晶）",                  prefix:"xeno-",   level:3},

  // ── paleo-（古代の） ──────────────────
  {word:"paleontology",      meaning:"古生物学",                  etymology:"paleo（古代）+ onto（存在）+ logy（学問）",     prefix:"paleo-",  level:2},
  {word:"paleolithic",       meaning:"旧石器時代の",               etymology:"paleo（古代）+ lithic（石の）",               prefix:"paleo-",  level:2},
  {word:"paleobiology",      meaning:"古生物学・先史生物学",        etymology:"paleo（古代）+ biology（生物学）",             prefix:"paleo-",  level:3},
  {word:"paleoclimatology",  meaning:"古気候学",                  etymology:"paleo（古代）+ climatology（気候学）",          prefix:"paleo-",  level:3},
  {word:"paleoanthropology", meaning:"古人類学",                  etymology:"paleo（古代）+ anthropology（人類学）",         prefix:"paleo-",  level:3},
  {word:"paleobotany",       meaning:"古植物学",                  etymology:"paleo（古代）+ botany（植物学）",               prefix:"paleo-",  level:3},
  {word:"paleographer",      meaning:"古文書学者",                 etymology:"paleo（古代）+ grapher（書く人）",             prefix:"paleo-",  level:3},
  {word:"paleozoic",         meaning:"古生代の",                  etymology:"paleo（古代）+ zoic（生物の）",                prefix:"paleo-",  level:3},
  {word:"paleoecology",      meaning:"古生態学",                  etymology:"paleo（古代）+ ecology（生態学）",             prefix:"paleo-",  level:3},
  {word:"paleoceanography",  meaning:"古海洋学",                  etymology:"paleo（古代）+ oceanography（海洋学）",         prefix:"paleo-",  level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
