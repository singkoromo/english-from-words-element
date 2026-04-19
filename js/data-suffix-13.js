/**
 * data-suffix-11.js — 接尾語データ（-wise, -proof, -fold, -wide, -free）
 * 形式: { word, meaning, etymology, suffix, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── -wise（〜の方向に・〜の点で） ──────────────────
  {word:"likewise",    meaning:"同様に・その上",           etymology:"like（同じように）+ wise（方向・方法）",     suffix:"-wise", level:3, pos:"副詞・名詞"},
  {word:"otherwise",   meaning:"さもなければ・別の方法で", etymology:"other（他の）+ wise（方法）",               suffix:"-wise", level:3, pos:"名詞"},
  {word:"clockwise",   meaning:"時計回りに",              etymology:"clock（時計）+ wise（方向）",               suffix:"-wise", level:3, pos:"副詞"},
  {word:"counterclockwise",meaning:"反時計回りに",        etymology:"counter（反対）+ clockwise（時計回り）",    suffix:"-wise", level:4, pos:"副詞"},
  {word:"lengthwise",  meaning:"縦に・長さの方向に",       etymology:"length（長さ）+ wise（方向）",              suffix:"-wise", level:5, pos:"副詞"},
  {word:"crosswise",   meaning:"横断して・斜めに",         etymology:"cross（交差する）+ wise（方向）",           suffix:"-wise", level:5, pos:"名詞・副詞"},
  {word:"sidewise",    meaning:"横向きに・側方に",         etymology:"side（側面）+ wise（方向）",                suffix:"-wise", level:5, pos:"副詞"},
  {word:"streetwise",  meaning:"世知に長けた・抜け目ない", etymology:"street（通り）+ wise（賢い）",              suffix:"-wise", level:5, pos:"形容詞"},
  {word:"likewise",    meaning:"同様に・また",             etymology:"like（同様）+ wise（方法）",                suffix:"-wise", level:3, pos:"副詞・形容詞"},
  {word:"edgewise",    meaning:"端を向けて・横向きに",     etymology:"edge（端）+ wise（方向）",                  suffix:"-wise", level:6, pos:"名詞・副詞"},
  {word:"moneywise",   meaning:"お金の面では",             etymology:"money（お金）+ wise（観点）",               suffix:"-wise", level:5, pos:"名詞"},
  {word:"healthwise",  meaning:"健康の点では",             etymology:"health（健康）+ wise（観点）",              suffix:"-wise", level:5, pos:"名詞"},

  // ── -proof（〜に耐える・防ぐ） ──────────────────
  {word:"waterproof",  meaning:"防水の・雨具",             etymology:"water（水）+ proof（耐える）",              suffix:"-proof", level:3, pos:"形容詞・名詞"},
  {word:"bulletproof", meaning:"防弾の・難攻不落の",       etymology:"bullet（弾丸）+ proof（耐える）",           suffix:"-proof", level:5, pos:"形容詞"},
  {word:"fireproof",   meaning:"耐火の・防火の",           etymology:"fire（火）+ proof（耐える）",               suffix:"-proof", level:3, pos:"形容詞"},
  {word:"foolproof",   meaning:"誰でも使える・間違いのない",etymology:"fool（愚か者）+ proof（耐える）",           suffix:"-proof", level:5, pos:"動詞・形容詞"},
  {word:"soundproof",  meaning:"防音の・消音の",           etymology:"sound（音）+ proof（耐える）",              suffix:"-proof", level:5, pos:"形容詞"},
  {word:"childproof",  meaning:"子供が開けられない",       etymology:"child（子供）+ proof（防ぐ）",              suffix:"-proof", level:5, pos:"形容詞"},
  {word:"dustproof",   meaning:"防塵の",                  etymology:"dust（埃）+ proof（耐える）",               suffix:"-proof", level:5, pos:"形容詞"},
  {word:"shockproof",  meaning:"耐衝撃の",                etymology:"shock（衝撃）+ proof（耐える）",            suffix:"-proof", level:5, pos:"形容詞"},
  {word:"tamperproof", meaning:"不正開封防止の",           etymology:"tamper（不正に触る）+ proof（防ぐ）",       suffix:"-proof", level:6, pos:"形容詞"},
  {word:"leakproof",   meaning:"漏れない・防漏の",         etymology:"leak（漏れる）+ proof（防ぐ）",             suffix:"-proof", level:5, pos:"形容詞"},
  {word:"bombproof",   meaning:"爆弾に耐える・絶対確実な", etymology:"bomb（爆弾）+ proof（耐える）",             suffix:"-proof", level:5, pos:"動詞・形容詞"},
  {word:"rustproof",   meaning:"防錆の・さびない",         etymology:"rust（錆）+ proof（耐える）",               suffix:"-proof", level:5, pos:"形容詞"},

  // ── -fold（〜倍・〜重に） ──────────────────
  {word:"twofold",     meaning:"二倍の・二重の",           etymology:"two（二）+ fold（折る・重ねる）",           suffix:"-fold", level:3, pos:"形容詞"},
  {word:"threefold",   meaning:"三倍の・三重の",           etymology:"three（三）+ fold（折る）",                 suffix:"-fold", level:3, pos:"形容詞"},
  {word:"manifold",    meaning:"多様な・多岐にわたる",     etymology:"many（多くの）+ fold（折る・重ねる）",       suffix:"-fold", level:5, pos:"形容詞・動詞"},
  {word:"tenfold",     meaning:"十倍の",                  etymology:"ten（十）+ fold（倍）",                     suffix:"-fold", level:3, pos:"形容詞"},
  {word:"hundredfold", meaning:"百倍の",                  etymology:"hundred（百）+ fold（倍）",                 suffix:"-fold", level:5, pos:"形容詞"},
  {word:"fourfold",    meaning:"四倍の",                  etymology:"four（四）+ fold（倍）",                    suffix:"-fold", level:3, pos:"形容詞"},
  {word:"fivefold",    meaning:"五倍の",                  etymology:"five（五）+ fold（倍）",                    suffix:"-fold", level:3, pos:"形容詞"},
  {word:"blindfold",   meaning:"目隠し・目をふさぐ",       etymology:"blind（見えない）+ fold（折る）→目を覆う",  suffix:"-fold", level:5, pos:"名詞・動詞"},
  {word:"stranglehold",meaning:"締め付け・完全な支配",     etymology:"strangle（締め付ける）+ hold（保持）",      suffix:"-fold", level:6, pos:"名詞"},

  // ── -wide（〜全体に広がる） ──────────────────
  {word:"worldwide",   meaning:"世界規模の・世界的な",     etymology:"world（世界）+ wide（広い）",               suffix:"-wide", level:3, pos:"形容詞"},
  {word:"nationwide",  meaning:"全国的な・全国に",         etymology:"nation（国家）+ wide（広い）",              suffix:"-wide", level:3, pos:"形容詞・副詞"},
  {word:"citywide",    meaning:"市全体の",                etymology:"city（都市）+ wide（広い）",                suffix:"-wide", level:3, pos:"形容詞"},
  {word:"statewide",   meaning:"州全体の",                etymology:"state（州）+ wide（広い）",                 suffix:"-wide", level:3, pos:"形容詞"},
  {word:"industry-wide",meaning:"業界全体の",             etymology:"industry（産業）+ wide（広い）",            suffix:"-wide", level:5, pos:"形容詞"},
  {word:"company-wide",meaning:"全社的な",                etymology:"company（会社）+ wide（広い）",             suffix:"-wide", level:5, pos:"形容詞"},
  {word:"countywide",  meaning:"郡全体の",                etymology:"county（郡）+ wide（広い）",                suffix:"-wide", level:5, pos:"形容詞"},

  // ── -free（〜がない・〜から解放された） ──────────────────
  {word:"carefree",    meaning:"のんきな・心配のない",     etymology:"care（心配）+ free（ない）",                suffix:"-free", level:3, pos:"形容詞"},
  {word:"debt-free",   meaning:"無借金の",                etymology:"debt（借金）+ free（ない）",                suffix:"-free", level:5, pos:"形容詞"},
  {word:"tax-free",    meaning:"免税の・無税の",           etymology:"tax（税）+ free（ない）",                   suffix:"-free", level:3, pos:"形容詞"},
  {word:"sugar-free",  meaning:"無糖の",                  etymology:"sugar（砂糖）+ free（ない）",               suffix:"-free", level:3, pos:"形容詞"},
  {word:"trouble-free",meaning:"問題のない・スムーズな",   etymology:"trouble（問題）+ free（ない）",             suffix:"-free", level:3, pos:"形容詞"},
  {word:"risk-free",   meaning:"リスクのない",             etymology:"risk（リスク）+ free（ない）",              suffix:"-free", level:3, pos:"形容詞"},
  {word:"hands-free",  meaning:"ハンズフリーの・両手が空く",etymology:"hands（手）+ free（自由）",               suffix:"-free", level:3, pos:"形容詞・動詞"},
  {word:"gluten-free", meaning:"グルテンフリーの",         etymology:"gluten（グルテン）+ free（ない）",          suffix:"-free", level:5, pos:"形容詞"},
  {word:"pain-free",   meaning:"痛みのない",               etymology:"pain（痛み）+ free（ない）",                suffix:"-free", level:3, pos:"形容詞"},
  {word:"barrier-free",meaning:"バリアフリーの",           etymology:"barrier（障壁）+ free（ない）",             suffix:"-free", level:3, pos:"形容詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
