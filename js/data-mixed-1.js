/**
 * data-mixed-1.js — 既存カテゴリ補充・混合データ（約360語）
 * 既存の接頭語・接尾語カテゴリへの追加語彙
 * 語根・接頭語の複合語、重要慣用語根
 */
(function(){
  var d = [

  // ── pre- 追加語 ──────────────────────────────
  {word:"preoccupy",    meaning:"頭を占める・先占する",         etymology:"pre（前に）+ occupy（占める）",           prefix:"pre-", level:2},
  {word:"presuppose",   meaning:"前提とする",                  etymology:"pre（前に）+ suppose（推測する）",        prefix:"pre-", level:3},
  {word:"prevail",      meaning:"勝る・普及している",           etymology:"pre（前に）+ vail（強い）",              prefix:"pre-", level:2},
  {word:"preside",      meaning:"議長を務める・主宰する",        etymology:"pre（前に）+ side（座る）",              prefix:"pre-", level:2},
  {word:"preposterous", meaning:"ばかげた・不条理な",           etymology:"pre（前）+ post（後）→ 前後が逆",         prefix:"pre-", level:3},
  {word:"prescient",    meaning:"予知能力のある",               etymology:"pre（前に）+ scient（知る）",            prefix:"pre-", level:3},
  {word:"prevalent",    meaning:"一般的な・蔓延している",        etymology:"pre（前に）+ valent（強い）",            prefix:"pre-", level:2},
  {word:"precarious",   meaning:"不安定な・危険な",             etymology:"pre（前に）+ carious（心配）",           prefix:"pre-", level:2},

  // ── re- 追加語 ───────────────────────────────
  {word:"revitalize",   meaning:"活性化する・復活させる",        etymology:"re（再び）+ vitalize（活力を与える）",   prefix:"re-", level:2},
  {word:"retaliate",    meaning:"報復する",                    etymology:"re（再び）+ taliate（処罰する）",        prefix:"re-", level:2},
  {word:"relentless",   meaning:"容赦ない・絶え間ない",          etymology:"re（強意）+ lentless（緩まない）",       prefix:"re-", level:2},
  {word:"reminisce",    meaning:"回想する・昔を懐かしむ",        etymology:"re（再び）+ minisc（記憶）+ e",          prefix:"re-", level:2},
  {word:"remorse",      meaning:"後悔・自責の念",               etymology:"re（再び）+ morse（かじる）→ 良心の呵責", prefix:"re-", level:2},
  {word:"repercussion", meaning:"影響・余波",                  etymology:"re（再び）+ percuss（打つ）+ ion",       prefix:"re-", level:2},
  {word:"retribution",  meaning:"報い・天罰",                  etymology:"re（再び）+ tribution（与える）",        prefix:"re-", level:3},
  {word:"revere",       meaning:"尊敬する・崇める",             etymology:"re（再び）+ vere（恐れる）",             prefix:"re-", level:2},

  // ── dis- 追加語 ──────────────────────────────
  {word:"dissonance",   meaning:"不協和音・不一致",             etymology:"dis（否定）+ son（音）+ ance",           prefix:"dis-", level:3},
  {word:"disparity",    meaning:"格差・不釣り合い",             etymology:"dis（否定）+ parity（等しさ）",          prefix:"dis-", level:2},
  {word:"dissuade",     meaning:"思いとどまらせる",              etymology:"dis（否定）+ suade（促す）",             prefix:"dis-", level:2},
  {word:"diligence",    meaning:"勤勉さ",                      etymology:"di（完全に）+ lig（選ぶ）+ ence",        prefix:"dis-", level:1},
  {word:"discrepancy",  meaning:"不一致・矛盾",                etymology:"dis（否定）+ crepancy（音）",            prefix:"dis-", level:2},
  {word:"discriminate", meaning:"差別する・識別する",           etymology:"dis（離れて）+ crimin（判断）+ ate",     prefix:"dis-", level:2},
  {word:"disillusion",  meaning:"幻滅させる",                  etymology:"dis（否定）+ illusion（幻想）",          prefix:"dis-", level:2},
  {word:"disparage",    meaning:"軽蔑する・見下す",             etymology:"dis（否定）+ parage（等しさ）",          prefix:"dis-", level:3},

  // ── un- 追加語 ───────────────────────────────
  {word:"unyielding",   meaning:"屈しない・頑固な",             etymology:"un（否定）+ yielding（屈する）",         prefix:"un-", level:2},
  {word:"unprecedented",meaning:"前例のない",                  etymology:"un（否定）+ precedented（前例のある）",   prefix:"un-", level:2},
  {word:"unequivocal",  meaning:"明白な・断固とした",            etymology:"un（否定）+ equivocal（あいまいな）",     prefix:"un-", level:3},
  {word:"unwavering",   meaning:"揺るぎない",                  etymology:"un（否定）+ wavering（揺れる）",         prefix:"un-", level:2},
  {word:"ubiquitous",   meaning:"至る所にある・遍在する",        etymology:"ubi（どこでも）+ quitous",               prefix:"un-", level:2},
  {word:"unkempt",      meaning:"乱れた・だらしない",            etymology:"un（否定）+ kempt（整えられた）",        prefix:"un-", level:2},

  // ── in- 追加語 ───────────────────────────────
  {word:"incessant",    meaning:"絶え間ない",                  etymology:"in（否定）+ cessant（止まる）",          prefix:"in-", level:2},
  {word:"insolent",     meaning:"傲慢な・無礼な",               etymology:"in（否定）+ solent（慣れている）",       prefix:"in-", level:2},
  {word:"insidious",    meaning:"陰険な・じわじわ広がる",        etymology:"in（中に）+ sid（座る）+ ious",          prefix:"in-", level:3},
  {word:"indulgent",    meaning:"甘い・放縦な",                etymology:"in（中に）+ dulg（心地よい）+ ent",      prefix:"in-", level:2},
  {word:"ingenious",    meaning:"独創的な・巧みな",             etymology:"in（中に）+ geni（生まれる）+ ous",      prefix:"in-", level:2},
  {word:"innuendo",     meaning:"当てこすり・遠回しの批判",      etymology:"in（中に）+ nu（うなずく）+ endo",       prefix:"in-", level:3},
  {word:"intrinsic",    meaning:"固有の・本質的な",             etymology:"in（中に）+ trinsic（内側）",            prefix:"in-", level:2},
  {word:"infer",        meaning:"推論する",                   etymology:"in（中に）+ fer（運ぶ）",                prefix:"in-", level:2},

  // ── sub- 追加語 ──────────────────────────────
  {word:"subside",      meaning:"沈静化する・沈む",             etymology:"sub（下に）+ side（座る）",              prefix:"sub-", level:2},
  {word:"subvert",      meaning:"打倒する・転覆させる",          etymology:"sub（下から）+ vert（向く）",            prefix:"sub-", level:3},
  {word:"subsidize",    meaning:"補助金を与える",               etymology:"sub（下に）+ sid（座る）+ ize",          prefix:"sub-", level:2},
  {word:"subtle",       meaning:"微妙な・巧妙な",               etymology:"sub（下から）+ tile（织る）",            prefix:"sub-", level:2},
  {word:"subsequent",   meaning:"その後の",                   etymology:"sub（後に）+ sequ（続く）+ ent",         prefix:"sub-", level:2},
  {word:"substantiate", meaning:"実証する・裏付ける",           etymology:"sub（下に）+ stance（立つ）+ iate",      prefix:"sub-", level:3},
  {word:"subservient",  meaning:"従属的な・媚びる",             etymology:"sub（下に）+ servient（仕える）",        prefix:"sub-", level:3},

  // ── over- 追加語 ─────────────────────────────
  {word:"overwhelm",    meaning:"圧倒する・打ちのめす",          etymology:"over（上に）+ whelm（埋める）",          prefix:"over-", level:1},
  {word:"overhaul",     meaning:"徹底的に点検する・改修",        etymology:"over（上に）+ haul（引く）",             prefix:"over-", level:2},
  {word:"override",     meaning:"無効にする・覆す",             etymology:"over（上に）+ ride（乗る）",             prefix:"over-", level:2},
  {word:"overture",     meaning:"申し出・序曲",                etymology:"over（上に）+ ture（開く）",             prefix:"over-", level:2},
  {word:"oversight",    meaning:"監督・見落とし",               etymology:"over（上に）+ sight（見る）",            prefix:"over-", level:2},
  {word:"overt",        meaning:"公然の・明白な",               etymology:"over（上に）+ t（開く）",                prefix:"over-", level:2},

  // ── inter- 追加語 ─────────────────────────────
  {word:"intermittent", meaning:"断続的な",                   etymology:"inter（間に）+ mitt（送る）+ ent",        prefix:"inter-", level:2},
  {word:"interlude",    meaning:"幕間・小休止",               etymology:"inter（間に）+ lude（遊ぶ）",            prefix:"inter-", level:2},
  {word:"interpolate",  meaning:"挿入する・改ざんする",          etymology:"inter（間に）+ polate（磨く）",          prefix:"inter-", level:3},
  {word:"intersection", meaning:"交差点・共通部分",             etymology:"inter（間に）+ sect（切る）+ ion",       prefix:"inter-", level:1},
  {word:"intersperse",  meaning:"点在させる",                  etymology:"inter（間に）+ sperse（まく）",          prefix:"inter-", level:3},
  {word:"intervene",    meaning:"介入する",                   etymology:"inter（間に）+ vene（来る）",            prefix:"inter-", level:2},

  // ── trans- 追加語 ─────────────────────────────
  {word:"transparent",  meaning:"透明な・明白な",               etymology:"trans（通して）+ parent（現れる）",       prefix:"trans-", level:1},
  {word:"tranquil",     meaning:"静かな・穏やかな",             etymology:"trans（通して）+ quil（静かな）",         prefix:"trans-", level:2},
  {word:"transition",   meaning:"移行・変化",                  etymology:"trans（超えて）+ it（行く）+ ion",        prefix:"trans-", level:1},
  {word:"transitory",   meaning:"一時的な・はかない",           etymology:"trans（超えて）+ itory（行く）",         prefix:"trans-", level:3},
  {word:"transcend",    meaning:"超越する",                   etymology:"trans（超えて）+ scend（登る）",         prefix:"trans-", level:2},
  {word:"transgress",   meaning:"違反する",                   etymology:"trans（超えて）+ gress（歩く）",         prefix:"trans-", level:3},

  // ── -tion/-sion 接尾語追加語 ─────────────────
  {word:"reverberation",meaning:"反響・余韻",                  etymology:"re（再び）+ verberate（打つ）+ ion",     suffix:"-tion", level:3},
  {word:"oscillation",  meaning:"振動・揺れ",                  etymology:"oscill（揺れ）+ ation",                  suffix:"-tion", level:3},
  {word:"reconciliation",meaning:"和解・調和",                 etymology:"re（再び）+ concili（集める）+ ation",   suffix:"-tion", level:2},
  {word:"manifestation",meaning:"表れ・顕現",                  etymology:"manifest（明示する）+ ation",            suffix:"-tion", level:2},
  {word:"accumulation", meaning:"蓄積",                       etymology:"ac（〜へ）+ cumul（堆積）+ ation",       suffix:"-tion", level:2},
  {word:"deliberation", meaning:"熟慮・協議",                  etymology:"deliberate（熟慮する）+ ion",            suffix:"-tion", level:2},
  {word:"apprehension", meaning:"不安・逮捕・理解",             etymology:"ap（〜へ）+ prehen（つかむ）+ sion",     suffix:"-tion", level:2},
  {word:"implication",  meaning:"含意・暗示",                  etymology:"imply（暗示する）+ ication",             suffix:"-tion", level:2},

  // ── -ment 接尾語追加語 ────────────────────────
  {word:"bewilderment", meaning:"困惑・当惑",                  etymology:"bewilder（困惑させる）+ ment",           suffix:"-ment", level:2},
  {word:"achievement",  meaning:"達成・業績",                  etymology:"achieve（達成する）+ ment",              suffix:"-ment", level:1},
  {word:"temperament",  meaning:"気質・性格",                  etymology:"temper（調和する）+ ament",              suffix:"-ment", level:2},
  {word:"predicament",  meaning:"苦境・困難な状況",             etymology:"predic（状況）+ ament",                  suffix:"-ment", level:2},
  {word:"amendment",    meaning:"修正・改正",                  etymology:"amend（修正する）+ ment",                suffix:"-ment", level:2},
  {word:"embodiment",   meaning:"体現・具体化",                etymology:"embody（体現する）+ ment",               suffix:"-ment", level:2},

  // ── -ness 接尾語追加語 ────────────────────────
  {word:"resilience",   meaning:"回復力・弾力性",               etymology:"resili（跳ね返る）+ ence",               suffix:"-ness", level:2},
  {word:"vigilance",    meaning:"警戒・油断のなさ",             etymology:"vigil（目覚めている）+ ance",            suffix:"-ness", level:2},
  {word:"persistence",  meaning:"粘り強さ・持続性",             etymology:"persist（持続する）+ ence",              suffix:"-ness", level:2},
  {word:"assertiveness",meaning:"自己主張の強さ",               etymology:"assertive（主張的な）+ ness",            suffix:"-ness", level:2},
  {word:"thoroughness", meaning:"徹底さ",                      etymology:"thorough（徹底的な）+ ness",             suffix:"-ness", level:2},

  // ── -able/-ible 接尾語追加語 ─────────────────
  {word:"sustainable",  meaning:"持続可能な",                  etymology:"sustain（持続する）+ able",               suffix:"-able", level:1},
  {word:"negligible",   meaning:"無視できるほど小さい",          etymology:"neglect（無視する）+ ible",              suffix:"-able", level:2},
  {word:"inevitable",   meaning:"避けられない",                 etymology:"in（否定）+ evit（避ける）+ able",        suffix:"-able", level:2},
  {word:"impeccable",   meaning:"非の打ち所のない",             etymology:"im（否定）+ peccable（誤りのある）",      suffix:"-able", level:3},
  {word:"immutable",    meaning:"不変の",                      etymology:"im（否定）+ mutable（変化する）",         suffix:"-able", level:3},
  {word:"vulnerable",   meaning:"傷つきやすい",                etymology:"vulner（傷）+ able",                     suffix:"-able", level:2},
  {word:"irresistible", meaning:"抵抗できない",                 etymology:"ir（否定）+ resist（抵抗する）+ ible",   suffix:"-able", level:2},
  {word:"plausible",    meaning:"もっともらしい",               etymology:"plaus（拍手する）+ ible",                suffix:"-able", level:2},

  // ── -ous/-ious 接尾語追加語 ────────────────
  {word:"ambitious",    meaning:"野心的な",                   etymology:"ambit（周囲）+ ious",                    suffix:"-ous", level:1},
  {word:"notorious",    meaning:"悪名高い",                   etymology:"notor（知られた）+ ious",                suffix:"-ous", level:2},
  {word:"meticulous",   meaning:"細心の・几帳面な",             etymology:"met（恐れ）+ iculous",                   suffix:"-ous", level:2},
  {word:"voracious",    meaning:"貪欲な・大食の",              etymology:"vor（食べる）+ acious",                  suffix:"-ous", level:3},
  {word:"gregarious",   meaning:"社交的な",                   etymology:"greg（群れ）+ arious",                   suffix:"-ous", level:2},
  {word:"precarious",   meaning:"不安定な",                   etymology:"prec（祈る）+ arious",                   suffix:"-ous", level:2},
  {word:"audacious",    meaning:"大胆な・厚かましい",           etymology:"aud（大胆）+ acious",                    suffix:"-ous", level:2},
  {word:"tenacious",    meaning:"粘り強い",                   etymology:"ten（持つ）+ acious",                    suffix:"-ous", level:2},

  // ── -ize/-ise 接尾語追加語 ─────────────────
  {word:"rationalize",  meaning:"合理化する",                  etymology:"rational（合理的な）+ ize",              suffix:"-ize", level:2},
  {word:"prioritize",   meaning:"優先する",                   etymology:"priority（優先性）+ ize",               suffix:"-ize", level:1},
  {word:"monopolize",   meaning:"独占する",                   etymology:"monopoly（独占）+ ize",                  suffix:"-ize", level:2},
  {word:"marginalize",  meaning:"周辺に追いやる",               etymology:"marginal（周辺的な）+ ize",             suffix:"-ize", level:2},
  {word:"scrutinize",   meaning:"精査する",                   etymology:"scrutin（精査）+ ize",                   suffix:"-ize", level:2},
  {word:"synchronize",  meaning:"同期させる",                  etymology:"synchron（同時の）+ ize",               suffix:"-ize", level:2},

  // ── -ive 接尾語追加語 ───────────────────────
  {word:"assertive",    meaning:"自己主張の強い",               etymology:"assert（主張する）+ ive",                suffix:"-ive", level:1},
  {word:"comprehensive",meaning:"包括的な",                   etymology:"comprehend（理解する）+ ive",            suffix:"-ive", level:2},
  {word:"contemplative",meaning:"瞑想的な・熟考する",           etymology:"contemplate（熟考する）+ ive",          suffix:"-ive", level:3},
  {word:"disruptive",   meaning:"破壊的な・革新的な",           etymology:"disrupt（混乱させる）+ ive",             suffix:"-ive", level:2},
  {word:"subjective",   meaning:"主観的な",                   etymology:"subject（主体）+ ive",                   suffix:"-ive", level:1},
  {word:"objective",    meaning:"客観的な・目的",              etymology:"object（物体）+ ive",                    suffix:"-ive", level:1},
  {word:"tentative",    meaning:"暫定的な・不確かな",           etymology:"tent（試みる）+ ative",                  suffix:"-ive", level:2},

  // ── -al 接尾語追加語 ────────────────────────
  {word:"peripheral",   meaning:"周辺の・末梢的な",            etymology:"peri（周囲）+ pherein（運ぶ）+ al",      suffix:"-al", level:2},
  {word:"pivotal",      meaning:"中心的な・極めて重要な",        etymology:"pivot（軸）+ al",                        suffix:"-al", level:2},
  {word:"remedial",     meaning:"改善のための・補習の",          etymology:"remedy（治療）+ ial",                    suffix:"-al", level:2},
  {word:"nominal",      meaning:"名目上の・わずかな",           etymology:"nom（名前）+ inal",                      suffix:"-al", level:2},
  {word:"ethical",      meaning:"倫理的な",                   etymology:"ethi（倫理）+ cal",                      suffix:"-al", level:1},
  {word:"inaugural",    meaning:"就任の・初めての",             etymology:"inaugur（就任）+ al",                    suffix:"-al", level:2},

  // ── -ity 接尾語追加語 ───────────────────────
  {word:"solidarity",   meaning:"連帯・団結",                  etymology:"solid（固い）+ arity",                   suffix:"-ity", level:2},
  {word:"volatility",   meaning:"揮発性・不安定さ",             etymology:"volat（飛ぶ）+ ility",                   suffix:"-ity", level:2},
  {word:"vulnerability",meaning:"脆弱性",                     etymology:"vulner（傷）+ ability",                  suffix:"-ity", level:2},
  {word:"credibility",  meaning:"信頼性",                     etymology:"cred（信じる）+ ibility",                suffix:"-ity", level:2},
  {word:"authenticity", meaning:"本物であること・真正性",        etymology:"authentic（本物の）+ ity",              suffix:"-ity", level:2},
  {word:"ambiguity",    meaning:"曖昧さ",                      etymology:"ambigu（両方）+ ity",                    suffix:"-ity", level:2},
  {word:"mediocrity",   meaning:"平凡さ・凡庸",                etymology:"mediocre（平凡な）+ ity",               suffix:"-ity", level:2},

  // ── mis- 追加語 ──────────────────────────────
  {word:"misguided",    meaning:"見当違いの",                  etymology:"mis（誤って）+ guide（導く）+ ed",        prefix:"mis-", level:1},
  {word:"misconception",meaning:"誤解・誤った考え",             etymology:"mis（誤って）+ conception（概念）",       prefix:"mis-", level:2},
  {word:"mitigate",     meaning:"和らげる・軽減する",           etymology:"mit（柔らかい）+ ig（させる）+ ate",      prefix:"mis-", level:2},
  {word:"misinterpret", meaning:"誤解する",                   etymology:"mis（誤って）+ interpret（解釈する）",    prefix:"mis-", level:1},
  {word:"miscalculate", meaning:"計算違いをする",              etymology:"mis（誤って）+ calculate（計算する）",    prefix:"mis-", level:2},
  {word:"misanthropy",  meaning:"人間嫌い",                   etymology:"mis（嫌う）+ anthropy（人間）",          prefix:"mis-", level:3},
  {word:"misdemeanor",  meaning:"軽犯罪・不品行",              etymology:"mis（悪い）+ demeanor（振る舞い）",       prefix:"mis-", level:2},

  // ── out- 追加語 ──────────────────────────────
  {word:"outspoken",    meaning:"率直な・遠慮なく言う",         etymology:"out（超えて）+ spoken（話された）",       prefix:"out-", level:1},
  {word:"outskirts",    meaning:"郊外・周辺部",               etymology:"out（外に）+ skirts（裾）",              prefix:"out-", level:1},
  {word:"outrage",      meaning:"激怒・憤慨させる",            etymology:"out（超えて）+ rage（怒り）",            prefix:"out-", level:1},
  {word:"outlook",      meaning:"見通し・展望・見解",           etymology:"out（外に）+ look（見る）",              prefix:"out-", level:1},
  {word:"outmaneuver",  meaning:"戦術で上回る",               etymology:"out（超えて）+ maneuver（作戦）",        prefix:"out-", level:3},
  {word:"outwit",       meaning:"機転で出し抜く",              etymology:"out（超えて）+ wit（知恵）",             prefix:"out-", level:2},
  {word:"outlandish",   meaning:"奇妙な・異国風の",            etymology:"out（外に）+ land（土地）+ ish",         prefix:"out-", level:2},
  {word:"outnumber",    meaning:"数で上回る",                 etymology:"out（超えて）+ number（数）",            prefix:"out-", level:1},

  // ── counter- 追加語 ──────────────────────────
  {word:"counterpart",  meaning:"対応物・相手方",              etymology:"counter（対抗）+ part（部分）",          prefix:"counter-", level:2},
  {word:"counterproductive",meaning:"逆効果の",                etymology:"counter（反対）+ productive（生産的な）", prefix:"counter-", level:2},
  {word:"counterintuitive",meaning:"直感に反する",              etymology:"counter（反対）+ intuitive（直感的な）",  prefix:"counter-", level:2},
  {word:"counterfeit",  meaning:"偽造の・偽物",                etymology:"counter（反対）+ feit（作る）",          prefix:"counter-", level:2},
  {word:"counterbalance",meaning:"つり合いを取る",              etymology:"counter（反対）+ balance（均衡）",       prefix:"counter-", level:2},

  // ── de- 追加語 ───────────────────────────────
  {word:"deteriorate",  meaning:"悪化する",                   etymology:"deterior（より悪い）+ ate",              prefix:"de-", level:2},
  {word:"devastate",    meaning:"壊滅させる",                  etymology:"de（完全に）+ vast（荒らす）+ ate",      prefix:"de-", level:2},
  {word:"deliberate",   meaning:"熟考する・故意の",            etymology:"de（完全に）+ liber（自由）+ ate",       prefix:"de-", level:2},
  {word:"detrimental",  meaning:"有害な",                     etymology:"de（完全に）+ triment（すり減る）+ al",  prefix:"de-", level:2},
  {word:"delineate",    meaning:"描く・明確にする",             etymology:"de（完全に）+ lineat（線引く）+ e",      prefix:"de-", level:3},
  {word:"deplete",      meaning:"使い果たす・枯渇させる",        etymology:"de（完全に）+ plete（満たす）+ e",       prefix:"de-", level:2},
  {word:"denounce",     meaning:"非難する・告発する",           etymology:"de（完全に）+ nounce（知らせる）",       prefix:"de-", level:2},
  {word:"deter",        meaning:"思いとどまらせる",             etymology:"de（離れて）+ ter（恐れ）",              prefix:"de-", level:2},

  // ── auto- 追加語 ─────────────────────────────
  {word:"autonomous",   meaning:"自律的な・自治の",            etymology:"auto（自己）+ nomous（法則）",           prefix:"auto-", level:2},
  {word:"autobiography",meaning:"自伝",                       etymology:"auto（自己）+ bio（生命）+ graphy（書く）",prefix:"auto-", level:1},
  {word:"autocratic",   meaning:"独裁的な",                   etymology:"auto（自己）+ cratic（支配）",           prefix:"auto-", level:2},
  {word:"autodidact",   meaning:"独学者",                     etymology:"auto（自己）+ didact（教える）",         prefix:"auto-", level:3},
  {word:"autopsy",      meaning:"検死解剖",                   etymology:"auto（自己）+ opsy（見る）",             prefix:"auto-", level:2},

  // ── multi- 追加語 ─────────────────────────────
  {word:"multifaceted", meaning:"多面的な",                   etymology:"multi（多く）+ faceted（面がある）",      prefix:"multi-", level:2},
  {word:"multitask",    meaning:"複数の作業を同時にする",        etymology:"multi（多く）+ task（作業）",            prefix:"multi-", level:1},
  {word:"multiplex",    meaning:"多重の・シネコン",             etymology:"multi（多く）+ plex（折る）",            prefix:"multi-", level:2},
  {word:"multitude",    meaning:"多数・大勢",                  etymology:"multi（多く）+ tude",                    prefix:"multi-", level:2},
  {word:"multimedia",   meaning:"マルチメディア",               etymology:"multi（多く）+ media（媒体）",           prefix:"multi-", level:1},

  // ── post- 追加語 ─────────────────────────────
  {word:"postpone",     meaning:"延期する",                   etymology:"post（後に）+ pone（置く）",             prefix:"post-", level:1},
  {word:"postulate",    meaning:"公準・仮定する",              etymology:"post（後に）+ ulate（求める）",          prefix:"post-", level:3},
  {word:"posterior",    meaning:"後部の・後の",                etymology:"post（後）+ erior",                      prefix:"post-", level:2},
  {word:"posthumous",   meaning:"死後の",                     etymology:"post（後に）+ humus（土）→ 埋葬後",       prefix:"post-", level:3},
  {word:"postmodern",   meaning:"ポストモダンの",               etymology:"post（後に）+ modern（現代の）",         prefix:"post-", level:2},
  {word:"postgraduate", meaning:"大学院の・大学院生",           etymology:"post（後に）+ graduate（卒業者）",       prefix:"post-", level:1},

  // ── mono- 追加語 ─────────────────────────────
  {word:"monotonous",   meaning:"単調な",                     etymology:"mono（一つ）+ ton（音）+ ous",           prefix:"mono-", level:1},
  {word:"monopoly",     meaning:"独占",                       etymology:"mono（一つ）+ poly（売る）",             prefix:"mono-", level:1},
  {word:"monumental",   meaning:"記念碑的な・巨大な",           etymology:"mono（一つ）+ ument（記念）+ al",        prefix:"mono-", level:2},
  {word:"monolithic",   meaning:"一枚岩の・巨大な",            etymology:"mono（一つ）+ lith（石）+ ic",           prefix:"mono-", level:2},
  {word:"monotheism",   meaning:"一神教",                     etymology:"mono（一つ）+ theism（神）",             prefix:"mono-", level:2},

  // ── non- 追加語 ──────────────────────────────
  {word:"nonchalant",   meaning:"無関心な・平然とした",          etymology:"non（否定）+ chalant（心配する）",        prefix:"non-", level:2},
  {word:"nonplussed",   meaning:"当惑した",                   etymology:"non（否定）+ plus（以上）→ なすすべなし", prefix:"non-", level:3},
  {word:"nonprofit",    meaning:"非営利の",                   etymology:"non（否定）+ profit（利益）",            prefix:"non-", level:1},
  {word:"nondescript",  meaning:"平凡な・特徴のない",           etymology:"non（否定）+ descript（描写した）",      prefix:"non-", level:2},
  {word:"nonconformist",meaning:"慣習に従わない人",             etymology:"non（否定）+ conformist（従順な人）",    prefix:"non-", level:2},

  // ── -ence/-ance 接尾語追加語 ──────────────────
  {word:"eloquence",    meaning:"雄弁",                       etymology:"eloquent（雄弁な）→ ence",               suffix:"-ence", level:2},
  {word:"complacence",  meaning:"自己満足",                   etymology:"complace（満足する）+ ence",             suffix:"-ence", level:3},
  {word:"exuberance",   meaning:"活気・豊かさ",               etymology:"exuber（豊かな）+ ance",                 suffix:"-ence", level:2},
  {word:"nonchalance",  meaning:"無関心・平然",               etymology:"nonchal（気にしない）+ ance",            suffix:"-ence", level:2},
  {word:"turbulence",   meaning:"乱気流・騒乱",               etymology:"turbul（乱れた）+ ence",                 suffix:"-ence", level:2},
  {word:"prominence",   meaning:"顕著・突出",                  etymology:"promin（突出する）+ ence",               suffix:"-ence", level:2},
  {word:"prevalence",   meaning:"普及・蔓延",                  etymology:"prevalent（普及した）→ ence",            suffix:"-ence", level:2},
  {word:"complacency",  meaning:"自己満足・油断",              etymology:"complace（満足する）+ ncy",              suffix:"-ence", level:2},

  // ── -er/-or 接尾語追加語 ─────────────────────
  {word:"arbitrator",   meaning:"仲裁人",                     etymology:"arbitrat（仲裁する）+ or",               suffix:"-er", level:2},
  {word:"collaborator", meaning:"協力者",                     etymology:"collaborat（協力する）+ or",             suffix:"-er", level:2},
  {word:"predecessor",  meaning:"前任者・先行するもの",         etymology:"precessor（前に行く）→ or",              suffix:"-er", level:2},
  {word:"antagonist",   meaning:"敵対者・反対者",              etymology:"ant（反対）+ agon（争い）+ ist",         suffix:"-er", level:2},
  {word:"facilitator",  meaning:"進行役・促進者",               etymology:"facilitat（促進する）+ or",              suffix:"-er", level:2},

  // ── -ist 接尾語追加語 ─────────────────────────
  {word:"pragmatist",   meaning:"実用主義者",                  etymology:"pragmat（実用的な）+ ist",               suffix:"-ist", level:2},
  {word:"optimist",     meaning:"楽観主義者",                  etymology:"optim（最良）+ ist",                     suffix:"-ist", level:1},
  {word:"pessimist",    meaning:"悲観主義者",                  etymology:"pessim（最悪）+ ist",                    suffix:"-ist", level:1},
  {word:"altruist",     meaning:"利他主義者",                  etymology:"altru（他者）+ ist",                     suffix:"-ist", level:2},
  {word:"narcissist",   meaning:"自己愛の人",                  etymology:"narciss（水仙）+ ist",                   suffix:"-ist", level:2},

  // ── -ism 接尾語追加語 ─────────────────────────
  {word:"pragmatism",   meaning:"実用主義",                   etymology:"pragmat（実用的な）+ ism",               suffix:"-ism", level:2},
  {word:"altruism",     meaning:"利他主義",                   etymology:"altru（他者）+ ism",                     suffix:"-ism", level:2},
  {word:"narcissism",   meaning:"自己愛・自己中心主義",          etymology:"narciss（水仙）+ ism",                   suffix:"-ism", level:2},
  {word:"nihilism",     meaning:"虚無主義",                   etymology:"nihil（無）+ ism",                       suffix:"-ism", level:3},
  {word:"stoicism",     meaning:"禁欲主義・平静心",             etymology:"stoic（禁欲的な）+ ism",                suffix:"-ism", level:2},

  // ── -ary/-ory 接尾語追加語 ───────────────────
  {word:"sedentary",    meaning:"座業の・定住性の",            etymology:"sedent（座る）+ ary",                    suffix:"-ary", level:2},
  {word:"contemporary", meaning:"同時代の",                   etymology:"contemp（同じ時）+ orary",               suffix:"-ary", level:2},
  {word:"preliminary",  meaning:"予備的な",                   etymology:"pre（前）+ limin（境界）+ ary",          suffix:"-ary", level:2},
  {word:"compulsory",   meaning:"義務的な",                   etymology:"compuls（強制する）+ ory",               suffix:"-ary", level:2},
  {word:"transitory",   meaning:"一時的な",                   etymology:"transit（移行する）+ ory",               suffix:"-ary", level:3},
  {word:"derogatory",   meaning:"軽蔑的な",                   etymology:"derogat（軽視する）+ ory",               suffix:"-ary", level:3},

  // ── -ic 接尾語追加語 ──────────────────────────
  {word:"pragmatic",    meaning:"実用的な",                   etymology:"pragma（行動）+ tic",                    suffix:"-ic", level:2},
  {word:"systematic",   meaning:"体系的な・組織的な",           etymology:"system（体系）+ atic",                   suffix:"-ic", level:1},
  {word:"charismatic",  meaning:"カリスマ的な",               etymology:"charism（恵み）+ atic",                  suffix:"-ic", level:2},
  {word:"diplomatic",   meaning:"外交的な・如才ない",           etymology:"diploma（公文書）+ tic",                 suffix:"-ic", level:2},
  {word:"strategic",    meaning:"戦略的な",                   etymology:"strateg（作戦）+ ic",                    suffix:"-ic", level:1},
  {word:"empathic",     meaning:"共感的な",                   etymology:"empath（感情移入）+ ic",                 suffix:"-ic", level:2},
  {word:"authentic",    meaning:"本物の・真正の",              etymology:"authent（自分自身）+ ic",                suffix:"-ic", level:2},
  {word:"epidemic",     meaning:"流行病・蔓延している",         etymology:"epi（上に）+ demic（民衆）",             suffix:"-ic", level:1},

  // ── -al 接尾語（さらに） ─────────────────────
  {word:"perpetual",    meaning:"永続的な・絶え間ない",         etymology:"perpetu（続く）+ al",                    suffix:"-al", level:2},
  {word:"ephemeral",    meaning:"短命な・はかない",             etymology:"epi（上に）+ hemer（日）+ al",           suffix:"-al", level:3},
  {word:"integral",     meaning:"不可欠な・積分の",             etymology:"integr（完全な）+ al",                   suffix:"-al", level:2},
  {word:"reciprocal",   meaning:"相互的な",                   etymology:"reciproc（逆にする）+ al",               suffix:"-al", level:2},
  {word:"rhetorical",   meaning:"修辞的な",                   etymology:"rhetor（演説家）+ ical",                 suffix:"-al", level:2},
  {word:"hypothetical", meaning:"仮定の",                     etymology:"hypothet（仮定する）+ ical",              suffix:"-al", level:2},

  // ── -ful 接尾語追加語 ────────────────────────
  {word:"resourceful",  meaning:"機転の利く・臨機応変な",       etymology:"resource（資源）+ ful",                  suffix:"-ful", level:2},
  {word:"insightful",   meaning:"洞察力のある",               etymology:"insight（洞察）+ ful",                   suffix:"-ful", level:2},
  {word:"deceitful",    meaning:"欺瞞的な・不誠実な",           etymology:"deceit（欺き）+ ful",                    suffix:"-ful", level:2},
  {word:"resentful",    meaning:"憤慨している",               etymology:"resent（憤慨する）+ ful",                suffix:"-ful", level:2},
  {word:"reproachful",  meaning:"非難するような",              etymology:"reproach（非難する）+ ful",              suffix:"-ful", level:2},

  // ── -less 接尾語追加語 ───────────────────────
  {word:"relentless",   meaning:"容赦ない・絶え間ない",          etymology:"relent（和らぐ）+ less",                 suffix:"-less", level:2},
  {word:"scrupulous",   meaning:"几帳面な・誠実な",            etymology:"scrupul（不安）+ ous → ous",             suffix:"-less", level:2},
  {word:"remorseless",  meaning:"無慈悲な・後悔のない",          etymology:"remorse（後悔）+ less",                  suffix:"-less", level:2},
  {word:"heedless",     meaning:"不注意な・〜を無視した",        etymology:"heed（注意する）+ less",                 suffix:"-less", level:2},
  {word:"ceaseless",    meaning:"絶え間ない",                  etymology:"cease（止まる）+ less",                  suffix:"-less", level:2},

  // ── -fy 接尾語追加語 ─────────────────────────
  {word:"petrify",      meaning:"石にする・恐怖で動けなくする",  etymology:"petr（石）+ ify",                        suffix:"-fy", level:2},
  {word:"beautify",     meaning:"美化する",                   etymology:"beauty（美）+ ify",                      suffix:"-fy", level:1},
  {word:"nullify",      meaning:"無効にする",                  etymology:"null（無）+ ify",                        suffix:"-fy", level:2},
  {word:"diversify",    meaning:"多様化する",                  etymology:"divers（様々な）+ ify",                  suffix:"-fy", level:2},
  {word:"glorify",      meaning:"美化する・崇める",             etymology:"glory（栄光）+ ify",                     suffix:"-fy", level:2},
  {word:"exemplify",    meaning:"例示する・体現する",           etymology:"exempli（例）+ fy",                      suffix:"-fy", level:2},

  // ── -ship 接尾語追加語 ───────────────────────
  {word:"entrepreneurship",meaning:"起業家精神",               etymology:"entrepreneur（起業家）+ ship",           suffix:"-ship", level:2},
  {word:"stewardship",  meaning:"管理・責任ある運営",           etymology:"steward（管理者）+ ship",               suffix:"-ship", level:2},
  {word:"fellowship",   meaning:"仲間意識・奨学金",             etymology:"fellow（仲間）+ ship",                   suffix:"-ship", level:1},
  {word:"sportsmanship",meaning:"スポーツマンシップ",           etymology:"sportsman（スポーツマン）+ ship",        suffix:"-ship", level:1},

  // ── -dom 接尾語追加語 ────────────────────────
  {word:"boredom",      meaning:"退屈",                       etymology:"bore（退屈にする）+ dom",                suffix:"-dom", level:1},
  {word:"martyrdom",    meaning:"殉教・苦難",                  etymology:"martyr（殉教者）+ dom",                  suffix:"-dom", level:2},
  {word:"officialdom",  meaning:"官僚主義・お役所仕事",          etymology:"official（官僚）+ dom",                  suffix:"-dom", level:3},

  // ── -hood 接尾語追加語 ────────────────────────
  {word:"adulthood",    meaning:"成人期",                     etymology:"adult（成人）+ hood",                    suffix:"-hood", level:1},
  {word:"falsehood",    meaning:"偽り・嘘",                   etymology:"false（偽の）+ hood",                    suffix:"-hood", level:2},
  {word:"likelihood",   meaning:"可能性・ありそうなこと",        etymology:"likely（ありそうな）+ hood",             suffix:"-hood", level:1},
  {word:"livelihood",   meaning:"生計・暮らし",                etymology:"live（生きる）+ lihood",                 suffix:"-hood", level:2},

  // ── -ward 接尾語追加語 ───────────────────────
  {word:"homeward",     meaning:"家へ向かって",               etymology:"home（家）+ ward（向き）",               suffix:"-ward", level:1},
  {word:"awkward",      meaning:"ぎこちない・不都合な",          etymology:"awk（反対）+ ward（向き）",              suffix:"-ward", level:1},
  {word:"inward",       meaning:"内側に・心の中に",             etymology:"in（内に）+ ward（向き）",               suffix:"-ward", level:1},
  {word:"straightforward",meaning:"率直な・簡単な",             etymology:"straight（まっすぐ）+ forward（前）",    suffix:"-ward", level:1},

  // ── -ate 接尾語追加語 ────────────────────────
  {word:"exacerbate",   meaning:"悪化させる",                  etymology:"ex（外に）+ acerb（厳しい）+ ate",       suffix:"-ate", level:3},
  {word:"articulate",   meaning:"明確に述べる・関節のある",      etymology:"articul（関節）+ ate",                   suffix:"-ate", level:2},
  {word:"exonerate",    meaning:"無罪にする・免除する",          etymology:"ex（外に）+ onerat（重荷）+ ate",         suffix:"-ate", level:3},
  {word:"repudiate",    meaning:"拒絶する・否認する",           etymology:"re（元に）+ pudi（恥）+ ate",            suffix:"-ate", level:3},
  {word:"placate",      meaning:"なだめる・鎮める",             etymology:"plac（喜ばせる）+ ate",                  suffix:"-ate", level:3},
  {word:"obfuscate",    meaning:"あいまいにする・難解にする",     etymology:"ob（前に）+ fusc（暗い）+ ate",          suffix:"-ate", level:3},

  // ── -en 接尾語追加語 ──────────────────────────
  {word:"enlighten",    meaning:"啓蒙する・明らかにする",        etymology:"en（中に）+ light（光）+ en",            suffix:"-en", level:2},
  {word:"strengthen",   meaning:"強化する",                   etymology:"strength（強さ）+ en",                   suffix:"-en", level:1},
  {word:"frighten",     meaning:"怖がらせる",                  etymology:"fright（恐怖）+ en",                     suffix:"-en", level:0},
  {word:"threaten",     meaning:"脅す",                       etymology:"threat（脅し）+ en",                     suffix:"-en", level:0},

  // ── -ure 接尾語追加語 ────────────────────────
  {word:"expenditure",  meaning:"支出・出費",                  etymology:"expend（支出する）+ iture",              suffix:"-ure", level:2},
  {word:"enclosure",    meaning:"囲い・同封物",                etymology:"enclose（囲む）+ ure",                   suffix:"-ure", level:2},
  {word:"composure",    meaning:"落ち着き・平静",               etymology:"compose（落ち着かせる）+ ure",           suffix:"-ure", level:2},
  {word:"overture",     meaning:"申し出・序曲",                etymology:"over（上に）+ ture",                     suffix:"-ure", level:2},
  {word:"conjecture",   meaning:"推測",                       etymology:"con（共に）+ ject（投げる）+ ure",        suffix:"-ure", level:3},

  // ── -age 接尾語追加語 ────────────────────────
  {word:"carnage",      meaning:"大虐殺",                     etymology:"carn（肉）+ age",                        suffix:"-age", level:2},
  {word:"leverage",     meaning:"てこの力・影響力",             etymology:"lever（てこ）+ age",                     suffix:"-age", level:2},
  {word:"patronage",    meaning:"後援・ひいき",                etymology:"patron（後援者）+ age",                  suffix:"-age", level:2},
  {word:"sabotage",     meaning:"妨害工作",                   etymology:"sabot（木靴）+ age → 機械を壊す",         suffix:"-age", level:2},
  {word:"lineage",      meaning:"血統・系統",                  etymology:"line（線）+ age",                        suffix:"-age", level:2},

  // ── -ic/-ical 接尾語（さらに） ──────────────
  {word:"didactic",     meaning:"教訓的な・教育的な",           etymology:"didact（教える）+ ic",                   suffix:"-ic", level:3},
  {word:"pedantic",     meaning:"学者ぶった・形式主義的な",      etymology:"pedant（うるさ型の学者）+ ic",           suffix:"-ic", level:3},
  {word:"eccentric",    meaning:"風変わりな",                  etymology:"ec（外に）+ centric（中心）",            suffix:"-ic", level:2},
  {word:"catastrophic", meaning:"壊滅的な",                   etymology:"catastrophe（大惨事）+ ic",              suffix:"-ic", level:2},
  {word:"bureaucratic", meaning:"官僚主義的な",               etymology:"bureau（局）+ cratic（支配）",           suffix:"-ic", level:2},
  {word:"idiosyncratic",meaning:"特異な・独特の",              etymology:"idio（固有）+ syncratic（混合）",        suffix:"-ic", level:3},

  // ── -ly 接尾語追加語 ─────────────────────────
  {word:"inevitably",   meaning:"必然的に",                   etymology:"inevitable（必然的な）+ ly",              suffix:"-ly", level:1},
  {word:"predominantly",meaning:"主に・圧倒的に",              etymology:"predominant（主要な）+ ly",              suffix:"-ly", level:2},
  {word:"subsequently", meaning:"その後・続いて",              etymology:"subsequent（後続の）+ ly",               suffix:"-ly", level:2},
  {word:"considerably", meaning:"かなり・相当に",              etymology:"considerable（かなりの）+ ly",           suffix:"-ly", level:1},
  {word:"simultaneously",meaning:"同時に",                    etymology:"simultaneous（同時の）+ ly",             suffix:"-ly", level:2},
  {word:"incrementally",meaning:"段階的に",                   etymology:"incremental（段階的な）+ ly",            suffix:"-ly", level:2},

  // ── co- 追加語 ───────────────────────────────
  {word:"compromise",   meaning:"妥協する",                   etymology:"com（共に）+ promise（約束）",           prefix:"co-", level:1},
  {word:"contend",      meaning:"争う・主張する",              etymology:"con（共に）+ tend（伸ばす）",            prefix:"co-", level:2},
  {word:"consensus",    meaning:"合意・総意",                  etymology:"con（共に）+ sens（感じる）+ us",         prefix:"co-", level:2},
  {word:"converge",     meaning:"収束する・集まる",             etymology:"con（共に）+ verge（向く）",             prefix:"co-", level:2},
  {word:"condone",      meaning:"黙認する・大目に見る",          etymology:"con（完全に）+ done（与える）",           prefix:"co-", level:2},
  {word:"concise",      meaning:"簡潔な",                     etymology:"con（完全に）+ cis（切る）+ e",          prefix:"co-", level:1},
  {word:"contemplate",  meaning:"熟考する・眺める",             etymology:"con（共に）+ templ（神殿）+ ate",        prefix:"co-", level:2},
  {word:"conspicuous",  meaning:"目立つ",                     etymology:"con（完全に）+ spic（見る）+ uous",      prefix:"co-", level:2},

  // ── super- 追加語 ─────────────────────────────
  {word:"superficial",  meaning:"表面的な",                   etymology:"super（上に）+ ficial（面）",            prefix:"super-", level:1},
  {word:"superfluous",  meaning:"余分な・不必要な",             etymology:"super（上に）+ flu（流れる）+ ous",      prefix:"super-", level:2},
  {word:"supercilious", meaning:"傲慢な・人を見下す",           etymology:"super（上に）+ cilious（まゆ毛）",       prefix:"super-", level:3},
  {word:"supersede",    meaning:"取って代わる",                etymology:"super（上に）+ sede（座る）",            prefix:"super-", level:2},
  {word:"superlative",  meaning:"最上の・最高の",              etymology:"super（上に）+ lative（運ぶ）",          prefix:"super-", level:2},
  {word:"superintendent",meaning:"監督・指揮者",               etymology:"super（上に）+ intend（向ける）+ ent",   prefix:"super-", level:2},

  // ── under- 追加語 ─────────────────────────────
  {word:"undermine",    meaning:"弱体化させる・裏から崩す",     etymology:"under（下に）+ mine（掘る）",            prefix:"under-", level:2},
  {word:"underestimate",meaning:"過小評価する",               etymology:"under（不十分に）+ estimate（評価する）", prefix:"under-", level:1},
  {word:"unprecedented",meaning:"前例のない",                 etymology:"un（否定）+ precedent（前例）+ ed",      prefix:"under-", level:2},
  {word:"underprivileged",meaning:"恵まれない・社会的弱者の",   etymology:"under（不十分に）+ privileged（特権のある）", prefix:"under-", level:2},
  {word:"underscore",   meaning:"強調する・下線を引く",         etymology:"under（下に）+ score（線）",             prefix:"under-", level:2},

  // ── ex- 追加語 ───────────────────────────────
  {word:"exacerbate",   meaning:"悪化させる",                  etymology:"ex（外に）+ acerb（厳しい）+ ate",       prefix:"ex-", level:3},
  {word:"exuberant",    meaning:"溢れんばかりの・生き生きした",  etymology:"ex（外に）+ uber（豊か）+ ant",          prefix:"ex-", level:2},
  {word:"exorbitant",   meaning:"法外な・桁外れの",            etymology:"ex（外に）+ orbit（軌道）+ ant",         prefix:"ex-", level:2},
  {word:"expedient",    meaning:"都合のよい・便宜的な",          etymology:"ex（外に）+ ped（足）+ ient",            prefix:"ex-", level:3},
  {word:"extricate",    meaning:"救い出す・解放する",           etymology:"ex（外に）+ tric（妨げ）+ ate",          prefix:"ex-", level:3},
  {word:"exasperate",   meaning:"激怒させる・悪化させる",        etymology:"ex（外に）+ asper（荒い）+ ate",         prefix:"ex-", level:2},

  // ── fore- 追加語 ─────────────────────────────
  {word:"forestall",    meaning:"先手を打つ・未然に防ぐ",        etymology:"fore（前に）+ stall（遅らせる）",        prefix:"fore-", level:2},
  {word:"foresight",    meaning:"先見の明",                   etymology:"fore（前に）+ sight（見る）",            prefix:"fore-", level:2},
  {word:"foreboding",   meaning:"不吉な予感",                  etymology:"fore（前に）+ boding（予感）",           prefix:"fore-", level:2},
  {word:"forfeit",      meaning:"没収される・放棄する",          etymology:"for（外に）+ feit（作る）",              prefix:"fore-", level:2},
  {word:"formidable",   meaning:"手強い・すごい",               etymology:"formi（蟻）+ dable → 蟻のように大変な",  prefix:"fore-", level:2},

  // ── en- 追加語 ───────────────────────────────
  {word:"encompass",    meaning:"包含する・取り囲む",           etymology:"en（中に）+ compass（囲む）",            prefix:"en-", level:2},
  {word:"endeavor",     meaning:"努力する・試みる",             etymology:"en（中に）+ devoir（義務）",             prefix:"en-", level:2},
  {word:"engulf",       meaning:"飲み込む・圧倒する",           etymology:"en（中に）+ gulf（湾）",                 prefix:"en-", level:2},
  {word:"enhance",      meaning:"高める・強化する",             etymology:"en（中に）+ hance（高める）",            prefix:"en-", level:1},
  {word:"envisage",     meaning:"思い描く",                   etymology:"en（中に）+ visage（顔）",               prefix:"en-", level:2},
  {word:"enumerate",    meaning:"列挙する",                   etymology:"e（外に）+ numer（数える）+ ate",        prefix:"en-", level:2},

  // ── anti- 追加語 ─────────────────────────────
  {word:"antidote",     meaning:"解毒剤・対処法",             etymology:"anti（反対）+ dote（与える）",            prefix:"anti-", level:2},
  {word:"anticlimax",   meaning:"拍子抜け・尻すぼみ",          etymology:"anti（反対）+ climax（絶頂）",           prefix:"anti-", level:2},
  {word:"antipathy",    meaning:"反感・嫌悪",                etymology:"anti（反対）+ pathy（感じる）",          prefix:"anti-", level:2},
  {word:"antithesis",   meaning:"対立・反対",                etymology:"anti（反対）+ thesis（命題）",           prefix:"anti-", level:2},
  {word:"antiquated",   meaning:"時代遅れの・旧式の",           etymology:"anti（前の）+ quated（古い）",           prefix:"anti-", level:2},
  {word:"antecedent",   meaning:"先行する・前例",              etymology:"ante（前に）+ cedent（行く）",           prefix:"anti-", level:2},

  // ── bi- 追加語 ───────────────────────────────
  {word:"bilingual",    meaning:"二言語を話す",               etymology:"bi（二つ）+ lingual（言語の）",          prefix:"bi-", level:1},
  {word:"bilateral",    meaning:"双方の",                    etymology:"bi（二つ）+ lateral（側）",              prefix:"bi-", level:2},
  {word:"biennial",     meaning:"2年ごとの",                  etymology:"bi（二つ）+ ennial（年）",               prefix:"bi-", level:2},
  {word:"bipartite",    meaning:"二部に分かれた",              etymology:"bi（二つ）+ partite（分けた）",          prefix:"bi-", level:3},

  // ── semi- 追加語 ─────────────────────────────
  {word:"semiconscious",meaning:"半意識の",                  etymology:"semi（半分）+ conscious（意識がある）",   prefix:"semi-", level:2},
  {word:"seminal",      meaning:"画期的な・精液の",            etymology:"sem（種）+ inal",                        prefix:"semi-", level:2},
  {word:"semiconductor",meaning:"半導体",                    etymology:"semi（半分）+ conductor（導体）",        prefix:"semi-", level:2},
  {word:"semiotic",     meaning:"記号論的な",                 etymology:"semi（符号）+ otic",                     prefix:"semi-", level:3},

  // ── tri- 追加語 ──────────────────────────────
  {word:"trivial",      meaning:"些細な・取るに足りない",       etymology:"tri（三つ）+ via（道）→ 三叉路で語られる話",prefix:"tri-",level:1},
  {word:"trilogy",      meaning:"三部作",                    etymology:"tri（三つ）+ logy（作品）",              prefix:"tri-", level:1},
  {word:"triplet",      meaning:"三つ子・三連音符",            etymology:"tri（三つ）+ plet",                      prefix:"tri-", level:1},
  {word:"trinity",      meaning:"三位一体・三つ組み",           etymology:"tri（三つ）+ nity",                      prefix:"tri-", level:2},
  {word:"trivia",       meaning:"些細なこと・雑学",            etymology:"tri（三つ）+ via（道）",                 prefix:"tri-", level:1},

  // ── 重要学術・一般語追加 ───────────────────────
  {word:"amalgamate",   meaning:"合併する・統合する",           etymology:"amalgam（合金）+ ate",                   suffix:"-ate", level:3},
  {word:"emulate",      meaning:"見習う・競う",                etymology:"emul（競争）+ ate",                      suffix:"-ate", level:2},
  {word:"inoculate",    meaning:"予防接種する",                etymology:"in（中に）+ oculate（目）+ ate",          suffix:"-ate", level:2},
  {word:"procrastinate",meaning:"先延ばしにする",              etymology:"pro（前に）+ crastin（明日）+ ate",       suffix:"-ate", level:2},
  {word:"capitulate",   meaning:"降伏する・屈する",            etymology:"capit（頭）+ ulate",                     suffix:"-ate", level:3},

  ];

  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
