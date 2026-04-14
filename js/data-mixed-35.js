/**
 * data-mixed-35.js — 政治・外交・国際関係用語（95語）
 * 形式: { word, meaning, etymology, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  /* ── 政治体制・政府形態 25語 ── */
  {word:"democracy",          meaning:"民主主義",                    etymology:"demo（人々）+ cracy（支配）",                   level:1},
  {word:"oligarchy",          meaning:"寡頭政治",                    etymology:"oligo（少数）+ archy（支配）",                  level:3},
  {word:"theocracy",          meaning:"神権政治",                    etymology:"theo（神）+ cracy（支配）",                     level:3},
  {word:"plutocracy",         meaning:"金権政治",                    etymology:"pluto（富）+ cracy（支配）",                   level:3},
  {word:"autocracy",          meaning:"独裁政治",                    etymology:"auto（自分）+ cracy（支配）",                   level:2},
  {word:"authoritarianism",   meaning:"権威主義",                    etymology:"authority（権威）+ arian（〜の人）+ ism",       level:2},
  {word:"totalitarianism",    meaning:"全体主義",                    etymology:"total（全体）+ itarian（〜の）+ ism",           level:2},
  {word:"federalism",         meaning:"連邦主義",                    etymology:"federal（連邦の）+ ism（主義）",                level:2},
  {word:"constitutionalism",  meaning:"立憲主義",                    etymology:"constitution（憲法）+ al（〜の）+ ism（主義）", level:2},
  {word:"technocracy",        meaning:"技術官僚支配",                etymology:"techno（技術）+ cracy（支配）",                 level:3},
  {word:"meritocracy",        meaning:"能力主義",                    etymology:"merit（功績）+ cracy（支配）",                  level:2},
  {word:"kleptocracy",        meaning:"収奪政治",                    etymology:"klepto（盗む）+ cracy（支配）",                 level:3},
  {word:"anarchism",          meaning:"無政府主義",                  etymology:"an（否定）+ arch（支配）+ ism（主義）",         level:2},
  {word:"libertarianism",     meaning:"自由至上主義",                etymology:"liberty（自由）+ arian（〜の）+ ism（主義）",   level:2},
  {word:"conservatism",       meaning:"保守主義",                    etymology:"conserve（保守する）+ ism（主義）",             level:2},
  {word:"liberalism",         meaning:"自由主義",                    etymology:"liberal（自由な）+ ism（主義）",                level:2},
  {word:"populism",           meaning:"ポピュリズム・大衆主義",      etymology:"popul（人々）+ ism（主義）",                   level:2},
  {word:"fascism",            meaning:"ファシズム",                  etymology:"fasci（束・結束）+ ism（主義）←イタリア語",     level:2},
  {word:"communism",          meaning:"共産主義",                    etymology:"commun（共有の）+ ism（主義）",                 level:2},
  {word:"socialism",          meaning:"社会主義",                    etymology:"social（社会的）+ ism（主義）",                 level:2},
  {word:"progressivism",      meaning:"進歩主義",                    etymology:"progressive（進歩的な）+ ism（主義）",          level:2},
  {word:"centrism",           meaning:"中道主義",                    etymology:"center（中心）+ ism（主義）",                   level:2},
  {word:"nationalism",        meaning:"ナショナリズム",              etymology:"nation（国家・民族）+ al（〜の）+ ism（主義）",  level:2},
  {word:"republicanism",      meaning:"共和主義",                    etymology:"republic（共和国）+ an（〜の）+ ism（主義）",   level:2},
  {word:"bureaucracy",        meaning:"官僚制",                      etymology:"bureau（机）+ cracy（支配）",                   level:2},

  /* ── 外交・国際関係 25語 ── */
  {word:"diplomacy",          meaning:"外交・外交術",                etymology:"diplo（二重の）+ macy（術）←国書を折り畳む",    level:2},
  {word:"multilateralism",    meaning:"多国間主義",                  etymology:"multi（多くの）+ lateral（側）+ ism（主義）",   level:3},
  {word:"embargo",            meaning:"禁輸措置・封鎖",              etymology:"em（中に）+ bargo（障壁）←スペイン語",          level:2},
  {word:"sanction",           meaning:"制裁・承認",                  etymology:"sanct（神聖にする）+ ion（行為）",              level:2},
  {word:"treaty",             meaning:"条約・協定",                  etymology:"traiter（扱う）+ y←古フランス語",              level:2},
  {word:"accord",             meaning:"合意・協定",                  etymology:"ac（〜に）+ cord（心）→心を合わせる",           level:2},
  {word:"détente",            meaning:"デタント・緊張緩和",          etymology:"détente（フランス語：緩和）",                   level:3},
  {word:"rapprochement",      meaning:"国交回復・和解",              etymology:"rapprocher（近づける）←フランス語",             level:3},
  {word:"sovereignty",        meaning:"主権・統治権",                etymology:"sovereign（主権）+ ty（状態）",                 level:2},
  {word:"asylum",             meaning:"亡命・保護",                  etymology:"asylos（ギリシャ語：避難所）",                  level:2},
  {word:"deterrence",         meaning:"抑止・抑止力",                etymology:"deter（阻止する）+ rence（状態）",              level:2},
  {word:"realpolitik",        meaning:"現実政治・権力政治",          etymology:"real（現実）+ politik（政治）←ドイツ語",        level:3},
  {word:"hegemony",           meaning:"覇権・主導権",                etymology:"hegemon（指導者）+ y（状態）←ギリシャ語",       level:3},
  {word:"imperialism",        meaning:"帝国主義",                    etymology:"imperium（支配）+ al（〜の）+ ism（主義）",     level:2},
  {word:"colonialism",        meaning:"植民地主義",                  etymology:"colon（入植者）+ ial（〜の）+ ism（主義）",     level:2},
  {word:"decolonization",     meaning:"脱植民地化",                  etymology:"de（除去）+ colonization（植民地化）",          level:3},
  {word:"self-determination", meaning:"自決・自己決定権",            etymology:"self（自己）+ determination（決定）",           level:2},
  {word:"soft power",         meaning:"ソフトパワー・文化的影響力",  etymology:"soft（柔らかい）+ power（力）",                 level:2},
  {word:"hard power",         meaning:"ハードパワー・軍事的影響力",  etymology:"hard（硬い）+ power（力）",                     level:2},
  {word:"proxy war",          meaning:"代理戦争",                    etymology:"proxy（代理）+ war（戦争）",                   level:2},
  {word:"containment",        meaning:"封じ込め政策",                etymology:"contain（抑える）+ ment（行為）",              level:2},
  {word:"appeasement",        meaning:"宥和政策",                    etymology:"ap（〜に）+ pease（落ち着かせる）+ ment",       level:3},
  {word:"isolationism",       meaning:"孤立主義",                    etymology:"isolate（孤立させる）+ ion（主義）+ ism",       level:2},
  {word:"non-proliferation",  meaning:"核不拡散",                    etymology:"non（否定）+ proliferation（拡散）",            level:3},
  {word:"ratification",       meaning:"批准・承認",                  etymology:"ratifc（確認する）+ ation（行為）",             level:2},

  /* ── 経済政策・選挙・民主主義 20語 ── */
  {word:"protectionism",      meaning:"保護主義",                    etymology:"protect（保護する）+ ion（主義）+ ism",         level:2},
  {word:"austerity",          meaning:"緊縮財政",                    etymology:"auster（厳しい）+ ity（状態）",                 level:2},
  {word:"fiscal policy",      meaning:"財政政策",                    etymology:"fiscal（財政の）+ policy（政策）",              level:2},
  {word:"inflation",          meaning:"インフレーション",            etymology:"in（中に）+ flat（膨らむ）+ ion",               level:1},
  {word:"geopolitics",        meaning:"地政学",                      etymology:"geo（地理）+ politics（政治）",                 level:2},
  {word:"referendum",         meaning:"国民投票",                    etymology:"refer（委ねる）+ endum（〜されるもの）",        level:2},
  {word:"propaganda",         meaning:"プロパガンダ",                etymology:"propagare（広める）←ラテン語",                  level:2},
  {word:"disinformation",     meaning:"偽情報・デマ",                etymology:"dis（否定）+ information（情報）",              level:2},
  {word:"gerrymandering",     meaning:"選挙区の不正操作",            etymology:"Gerry（知事名）+ salamander（地形）の合成語",   level:3},
  {word:"filibuster",         meaning:"議事妨害",                    etymology:"vrijbuiter（オランダ語：私略船員）",            level:3},
  {word:"plebiscite",         meaning:"国民投票・直接選挙",          etymology:"plebi（民衆）+ scite（決定）",                  level:3},
  {word:"supranational",      meaning:"超国家的な",                  etymology:"supra（上の）+ national（国家の）",             level:3},
  {word:"deregulation",       meaning:"規制緩和",                    etymology:"de（除去）+ regulation（規制）",               level:2},
  {word:"privatization",      meaning:"民営化",                      etymology:"private（民間の）+ ize（〜にする）+ ation",    level:2},
  {word:"nationalization",    meaning:"国有化",                      etymology:"national（国家の）+ ize（〜にする）+ ation",    level:2},
  {word:"communiqué",         meaning:"公式声明",                    etymology:"communiquer（伝える）←フランス語",              level:3},
  {word:"coup d'état",        meaning:"クーデター",                  etymology:"coup（打撃）+ état（国家）←フランス語",         level:2},
  {word:"junta",              meaning:"軍事政権・評議会",            etymology:"junta（スペイン語：集会）",                     level:3},
  {word:"veto",               meaning:"拒否権",                      etymology:"veto（ラテン語：私は禁じる）",                  level:2},
  {word:"impeachment",        meaning:"弾劾",                        etymology:"im（中に）+ peach（訴える）+ ment",            level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
