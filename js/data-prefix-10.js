/**
 * data-prefix-10.js — 接頭語補充データ（over-, under-, out-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── over-（超える・過度に） ──────────────────
  {word:"overcome",       meaning:"克服する・打ち勝つ",        etymology:"over（超えて）+ come（来る）",              prefix:"over-", level:1, pos:"動詞"},
  {word:"overlook",       meaning:"見落とす・見下ろす",        etymology:"over（上から）+ look（見る）",              prefix:"over-", level:1, pos:"動詞"},
  {word:"overwhelm",      meaning:"圧倒する・打ちのめす",      etymology:"over（完全に）+ whelm（覆う）",             prefix:"over-", level:1, pos:"動詞"},
  {word:"overestimate",   meaning:"過大評価する",              etymology:"over（過度に）+ estimate（評価する）",       prefix:"over-", level:1, pos:"動詞"},
  {word:"overdue",        meaning:"期限超過の・遅れている",    etymology:"over（超えて）+ due（期限）",               prefix:"over-", level:1, pos:"形容詞・動詞"},
  {word:"overhaul",       meaning:"徹底的に点検する・改修",    etymology:"over（上から）+ haul（引く）",              prefix:"over-", level:2, pos:"動詞・名詞"},
  {word:"overrule",       meaning:"却下する・覆す",            etymology:"over（上から）+ rule（支配する）",           prefix:"over-", level:2, pos:"動詞"},
  {word:"override",       meaning:"無効にする・優先する",      etymology:"over（上から）+ ride（乗る）",              prefix:"over-", level:2, pos:"動詞"},
  {word:"oversee",        meaning:"監督する・管理する",        etymology:"over（上から）+ see（見る）",               prefix:"over-", level:1, pos:"動詞"},
  {word:"overstate",      meaning:"誇張する・大げさに言う",    etymology:"over（過度に）+ state（述べる）",            prefix:"over-", level:2, pos:"動詞・名詞"},
  {word:"overly",         meaning:"過度に・非常に",            etymology:"over（過度に）+ ly（副詞化）",              prefix:"over-", level:1, pos:"副詞"},
  {word:"overpower",      meaning:"制圧する・圧倒する",        etymology:"over（超えて）+ power（力）",               prefix:"over-", level:2, pos:"動詞"},
  {word:"overextend",     meaning:"過度に広げる・限界を超える",etymology:"over（過度に）+ extend（伸ばす）",           prefix:"over-", level:2, pos:"動詞"},
  {word:"overreact",      meaning:"過剰反応する",              etymology:"over（過度に）+ react（反応する）",          prefix:"over-", level:1, pos:"動詞"},
  {word:"overseas",       meaning:"海外の・外国の",            etymology:"over（超えて）+ seas（海）",                prefix:"over-", level:0, pos:"形容詞"},
  {word:"overturned",     meaning:"覆された・転覆した",        etymology:"over（反対に）+ turned（回した）",           prefix:"over-", level:2, pos:"形容詞"},
  {word:"overtake",       meaning:"追い越す・追いつく",        etymology:"over（超えて）+ take（取る）",              prefix:"over-", level:1, pos:"動詞"},
  {word:"overspend",      meaning:"使いすぎる・予算超過する",  etymology:"over（過度に）+ spend（使う）",              prefix:"over-", level:1, pos:"動詞"},
  {word:"overhear",       meaning:"偶然耳にする",              etymology:"over（上から）+ hear（聞く）",              prefix:"over-", level:1, pos:"動詞"},
  {word:"overload",       meaning:"過負荷にする・積みすぎる",  etymology:"over（過度に）+ load（荷物）",              prefix:"over-", level:1, pos:"動詞"},
  {word:"overconfident",  meaning:"自信過剰な",                etymology:"over（過度に）+ confident（自信がある）",    prefix:"over-", level:2, pos:"形容詞"},
  {word:"overachiever",   meaning:"能力以上を発揮する人",      etymology:"over（超えて）+ achiever（達成者）",         prefix:"over-", level:2, pos:"名詞"},
  {word:"overture",       meaning:"序曲・申し出",              etymology:"over（開く）+ ture（行為）→開く行為",       prefix:"over-", level:3, pos:"名詞"},
  {word:"overt",          meaning:"明白な・公然の",            etymology:"over（開く）+ t→公然と開かれた",           prefix:"over-", level:2, pos:"形容詞"},
  {word:"overtly",        meaning:"公然と・明らかに",          etymology:"overt（明白な）+ ly（副詞化）",              prefix:"over-", level:2, pos:"名詞・副詞"},

  // ── under-（下・不十分・未満） ──────────────────
  {word:"undermine",      meaning:"弱体化させる・掘り崩す",    etymology:"under（下に）+ mine（掘る）",               prefix:"under-", level:2, pos:"動詞"},
  {word:"underestimate",  meaning:"過小評価する",              etymology:"under（不十分に）+ estimate（評価する）",   prefix:"under-", level:1, pos:"動詞"},
  {word:"undergo",        meaning:"経験する・受ける",          etymology:"under（下に）+ go（行く）",                 prefix:"under-", level:1, pos:"動詞"},
  {word:"undertake",      meaning:"引き受ける・着手する",      etymology:"under（下に）+ take（取る）",               prefix:"under-", level:1, pos:"動詞"},
  {word:"underlying",     meaning:"根本的な・根底にある",      etymology:"under（下に）+ lying（横たわる）",           prefix:"under-", level:2, pos:"形容詞・動詞"},
  {word:"understate",     meaning:"控えめに言う・過小に述べる",etymology:"under（不十分に）+ state（述べる）",         prefix:"under-", level:2, pos:"名詞・動詞"},
  {word:"underprivileged",meaning:"恵まれない・社会的弱者の",  etymology:"under（不十分に）+ privileged（特権ある）",  prefix:"under-", level:2, pos:"形容詞"},
  {word:"underway",       meaning:"進行中の・航行中の",        etymology:"under（下に）+ way（道）",                  prefix:"under-", level:1, pos:"形容詞"},
  {word:"underscore",     meaning:"強調する・下線を引く",      etymology:"under（下に）+ score（線）",                prefix:"under-", level:2, pos:"動詞"},
  {word:"underpin",       meaning:"支える・補強する",          etymology:"under（下に）+ pin（固定する）",             prefix:"under-", level:2, pos:"動詞"},
  {word:"underfunded",    meaning:"資金不足の",                etymology:"under（不十分に）+ funded（資金が提供された）",prefix:"under-",level:2, pos:"形容詞"},
  {word:"underperform",   meaning:"期待以下の成果を出す",      etymology:"under（不十分に）+ perform（実行する）",     prefix:"under-", level:2, pos:"動詞"},
  {word:"underutilized",  meaning:"十分に活用されていない",    etymology:"under（不十分に）+ utilized（活用された）",  prefix:"under-", level:2, pos:"形容詞"},
  {word:"underrepresented",meaning:"過小代表の・少数の",       etymology:"under（不十分に）+ represented（代表された）",prefix:"under-",level:2, pos:"形容詞"},
  {word:"undercurrent",   meaning:"底流・潜在的な感情",        etymology:"under（下の）+ current（流れ）",             prefix:"under-", level:3, pos:"名詞"},
  {word:"undercover",     meaning:"秘密の・潜入捜査の",        etymology:"under（下に）+ cover（覆い）",               prefix:"under-", level:1, pos:"形容詞"},
  {word:"undersupply",    meaning:"供給不足",                  etymology:"under（不十分な）+ supply（供給）",          prefix:"under-", level:2, pos:"名詞"},
  {word:"underdog",       meaning:"負け犬・不利な立場の人",    etymology:"under（下の）+ dog（犬）→下位の犬",         prefix:"under-", level:1, pos:"名詞"},
  {word:"underpay",       meaning:"低賃金で雇う",              etymology:"under（不十分に）+ pay（払う）",             prefix:"under-", level:1, pos:"名詞"},
  {word:"underage",       meaning:"未成年の",                  etymology:"under（未満）+ age（年齢）",                prefix:"under-", level:1, pos:"形容詞"},
  {word:"underline",      meaning:"下線を引く・強調する",      etymology:"under（下に）+ line（線）",                  prefix:"under-", level:0, pos:"動詞"},
  {word:"underweight",    meaning:"体重不足の・軽量の",        etymology:"under（未満）+ weight（重さ）",              prefix:"under-", level:1, pos:"形容詞"},
  {word:"underwrite",     meaning:"引き受ける・保証する",      etymology:"under（下に）+ write（書く）→署名して保証",  prefix:"under-", level:3, pos:"動詞"},
  {word:"underlie",       meaning:"根底にある・基礎をなす",    etymology:"under（下に）+ lie（横たわる）",             prefix:"under-", level:2, pos:"動詞"},
  {word:"undercut",       meaning:"安値で競争する・弱体化させる",etymology:"under（下に）+ cut（切る）",              prefix:"under-", level:2, pos:"動詞"},

  // ── out-（外に・超える・上回る） ──────────────────
  {word:"outperform",     meaning:"上回る・優れた成果を出す",  etymology:"out（超えて）+ perform（実行する）",          prefix:"out-", level:2, pos:"動詞"},
  {word:"outline",        meaning:"概要・輪郭を描く",          etymology:"out（外に）+ line（線）",                    prefix:"out-", level:0, pos:"名詞・動詞"},
  {word:"outlook",        meaning:"展望・見通し・見解",        etymology:"out（外に）+ look（見る）",                   prefix:"out-", level:1, pos:"名詞"},
  {word:"outreach",       meaning:"手を伸ばす・地域奉仕活動",  etymology:"out（外に）+ reach（届く）",                  prefix:"out-", level:2, pos:"動詞・名詞"},
  {word:"outright",       meaning:"完全な・率直な・全く",      etymology:"out（外に）+ right（正しく）",                prefix:"out-", level:2, pos:"形容詞・動詞"},
  {word:"outstanding",    meaning:"傑出した・未解決の",        etymology:"out（外に）+ standing（立っている）",         prefix:"out-", level:1, pos:"形容詞"},
  {word:"outweigh",       meaning:"重さが上回る・価値が上回る", etymology:"out（超えて）+ weigh（重さを量る）",          prefix:"out-", level:2, pos:"動詞"},
  {word:"outspoken",      meaning:"率直な・遠慮なく言う",      etymology:"out（外に）+ spoken（言われた）",             prefix:"out-", level:2, pos:"形容詞・名詞"},
  {word:"outclass",       meaning:"はるかに優れている",        etymology:"out（超えて）+ class（階級・等級）",           prefix:"out-", level:2, pos:"動詞"},
  {word:"outcome",        meaning:"結果・成果",                etymology:"out（外に）+ come（来る）",                   prefix:"out-", level:0, pos:"名詞"},
  {word:"output",         meaning:"産出量・出力",              etymology:"out（外に）+ put（置く）",                    prefix:"out-", level:0, pos:"名詞"},
  {word:"outset",         meaning:"最初・始まり",              etymology:"out（外に）+ set（設定する）",                prefix:"out-", level:1, pos:"名詞"},
  {word:"outskirts",      meaning:"郊外・周辺",                etymology:"out（外に）+ skirts（端）",                   prefix:"out-", level:2, pos:"名詞"},
  {word:"outstrip",       meaning:"追い越す・上回る",          etymology:"out（超えて）+ strip（剥ぐ）",                prefix:"out-", level:2, pos:"動詞"},
  {word:"outnumber",      meaning:"数で上回る",                etymology:"out（超えて）+ number（数）",                 prefix:"out-", level:1, pos:"動詞"},
  {word:"outrun",         meaning:"走り勝つ・追い抜く",        etymology:"out（超えて）+ run（走る）",                  prefix:"out-", level:1, pos:"動詞"},
  {word:"outlaw",         meaning:"無法者・違法にする",        etymology:"out（除外して）+ law（法律）",                prefix:"out-", level:1, pos:"名詞・動詞"},
  {word:"outrage",        meaning:"激怒・憤慨させる",          etymology:"outre（極端に）→ outrage（度を超えた怒り）",  prefix:"out-", level:2, pos:"名詞・動詞"},
  {word:"outburst",       meaning:"爆発・感情の爆発",          etymology:"out（外に）+ burst（破裂する）",              prefix:"out-", level:2, pos:"名詞"},
  {word:"outbreak",       meaning:"（病気・戦争などの）勃発",  etymology:"out（外に）+ break（破る）",                  prefix:"out-", level:1, pos:"名詞"},
  {word:"outbound",       meaning:"外向きの・出発する",        etymology:"out（外に）+ bound（向かう）",                prefix:"out-", level:2, pos:"形容詞・動詞"},
  {word:"outfox",         meaning:"出し抜く・してやる",        etymology:"out（超えて）+ fox（狐→ずる賢さ）",           prefix:"out-", level:3, pos:"動詞"},
  {word:"outmaneuver",    meaning:"戦術で上回る・出し抜く",    etymology:"out（超えて）+ maneuver（作戦）",             prefix:"out-", level:3, pos:"動詞"},
  {word:"outpace",        meaning:"追い越す・速さで上回る",    etymology:"out（超えて）+ pace（歩調）",                 prefix:"out-", level:2, pos:"動詞"},
  {word:"outsource",      meaning:"外部委託する",              etymology:"out（外に）+ source（源泉）",                 prefix:"out-", level:1, pos:"動詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
