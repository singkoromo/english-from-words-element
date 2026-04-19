/**
 * data-prefix-13.js — 接頭語データ（be-, up-）各25語
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 1=英検5-4級 2=英検3級 3=英検準2級 4=英検2級 5=英検準1級 6=英検1級 7=TOEFL/GRE
 */
(function(){
  var d = [
  // ── be-（完全に・〜の状態に・周りを） ──────────────────
  {word:"become",      meaning:"〜になる",               etymology:"be（〜の状態に）+ come（来る）",            prefix:"be-", level:1, pos:"動詞"},
  {word:"believe",     meaning:"信じる",                  etymology:"be（〜の状態に）+ live（生きる）→信頼する", prefix:"be-", level:1, pos:"動詞"},
  {word:"before",      meaning:"〜の前に・以前に",         etymology:"be（〜に）+ fore（前）",                    prefix:"be-", level:1, pos:"副詞"},
  {word:"behind",      meaning:"〜の後ろに・遅れて",       etymology:"be（〜に）+ hind（後ろ）",                 prefix:"be-", level:1, pos:"副詞・名詞"},
  {word:"beneath",     meaning:"〜の下に・下位の",         etymology:"be（〜に）+ neath（下）",                  prefix:"be-", level:3, pos:"副詞・形容詞"},
  {word:"between",     meaning:"〜の間に",                etymology:"be（〜に）+ two（二つ）+ en",              prefix:"be-", level:1, pos:"副詞"},
  {word:"beyond",      meaning:"〜の向こうに・超えて",     etymology:"be（〜に）+ yond（向こう）",               prefix:"be-", level:3, pos:"副詞・名詞"},
  {word:"befriend",    meaning:"友達になる・親切にする",   etymology:"be（〜の状態に）+ friend（友人）",          prefix:"be-", level:3, pos:"動詞"},
  {word:"beware",      meaning:"用心する・〜に注意する",   etymology:"be（〜に）+ ware（注意）",                 prefix:"be-", level:3, pos:"動詞"},
  {word:"behold",      meaning:"見よ・目撃する",           etymology:"be（完全に）+ hold（保持する）→じっと見る", prefix:"be-", level:5, pos:"名詞・動詞"},
  {word:"betray",      meaning:"裏切る・暴露する",         etymology:"be（〜の状態に）+ tray（引き渡す）",        prefix:"be-", level:3, pos:"動詞"},
  {word:"bewitch",     meaning:"魅了する・魔法をかける",   etymology:"be（完全に）+ witch（魔女）",              prefix:"be-", level:5, pos:"動詞"},
  {word:"bewilder",    meaning:"当惑させる・困惑させる",   etymology:"be（完全に）+ wilder（野生）→途方に暮れさせる",prefix:"be-",level:5, pos:"動詞"},
  {word:"besiege",     meaning:"包囲する・押しかける",     etymology:"be（周りを）+ siege（包囲）",              prefix:"be-", level:5, pos:"動詞"},
  {word:"beseech",     meaning:"懇願する・切に願う",       etymology:"be（完全に）+ seek（求める）",             prefix:"be-", level:5, pos:"動詞・名詞"},
  {word:"bequeath",    meaning:"遺贈する・遺言で残す",     etymology:"be（完全に）+ queath（言う）→遺言で言い渡す",prefix:"be-",level:5, pos:"動詞"},
  {word:"bemoan",      meaning:"嘆く・悲しむ",             etymology:"be（完全に）+ moan（うめく）",             prefix:"be-", level:5, pos:"動詞"},
  {word:"bestow",      meaning:"与える・授ける",           etymology:"be（〜に）+ stow（置く）",                 prefix:"be-", level:5, pos:"動詞"},
  {word:"belittle",    meaning:"軽蔑する・見くびる",       etymology:"be（〜の状態に）+ little（小さい）",        prefix:"be-", level:5, pos:"動詞"},
  {word:"beguile",     meaning:"だます・魅惑する",         etymology:"be（完全に）+ guile（ずる賢さ）",          prefix:"be-", level:6, pos:"動詞"},
  {word:"beleaguer",   meaning:"悩ます・包囲する",         etymology:"be（周りを）+ leaguer（陣営）",            prefix:"be-", level:6, pos:"動詞"},
  {word:"begrudge",    meaning:"しぶしぶ与える・ねたむ",   etymology:"be（完全に）+ grudge（恨む）",             prefix:"be-", level:6, pos:"動詞"},
  {word:"belie",       meaning:"〜に反する・偽る",         etymology:"be（完全に）+ lie（嘘をつく）",            prefix:"be-", level:6, pos:"動詞"},
  {word:"bereave",     meaning:"奪う・悲嘆にくれさせる",   etymology:"be（完全に）+ reave（奪う）",              prefix:"be-", level:6, pos:"名詞・動詞"},
  {word:"beset",       meaning:"悩ます・取り囲む",         etymology:"be（周りを）+ set（置く）",                prefix:"be-", level:5, pos:"動詞"},

  // ── up-（上に・上昇・改善・完成） ─────────────────────
  {word:"update",      meaning:"更新する・最新情報",       etymology:"up（上に）+ date（日付・状態）",           prefix:"up-", level:1, pos:"動詞・名詞"},
  {word:"upload",      meaning:"アップロードする",         etymology:"up（上に）+ load（積む）",                 prefix:"up-", level:1, pos:"動詞"},
  {word:"upgrade",     meaning:"改善する・アップグレード", etymology:"up（上に）+ grade（等級）",                prefix:"up-", level:1, pos:"動詞・名詞"},
  {word:"uphold",      meaning:"支持する・維持する",       etymology:"up（上に）+ hold（保つ）",                 prefix:"up-", level:3, pos:"動詞"},
  {word:"uplift",      meaning:"向上させる・高揚",         etymology:"up（上に）+ lift（持ち上げる）",           prefix:"up-", level:3, pos:"動詞・名詞"},
  {word:"uproot",      meaning:"根こそぎにする・引き抜く", etymology:"up（完全に）+ root（根）",                 prefix:"up-", level:5, pos:"動詞"},
  {word:"upcoming",    meaning:"近づいている・今後の",     etymology:"up（〜に向けて）+ coming（来る）",         prefix:"up-", level:3, pos:"動詞・形容詞"},
  {word:"upbeat",      meaning:"陽気な・前向きな",         etymology:"up（上に）+ beat（拍子）→上向きの拍子",    prefix:"up-", level:3, pos:"形容詞"},
  {word:"upright",     meaning:"直立した・正直な",         etymology:"up（上に）+ right（正しい）",              prefix:"up-", level:3, pos:"形容詞"},
  {word:"uproar",      meaning:"騒動・大騒ぎ",             etymology:"up（上に）+ roar（叫ぶ）",                 prefix:"up-", level:5, pos:"名詞"},
  {word:"upbringing",  meaning:"育て方・養育",             etymology:"up（完全に）+ bring（育てる）+ ing",       prefix:"up-", level:5, pos:"名詞"},
  {word:"upstage",     meaning:"主役を奪う・威圧する",     etymology:"up（後ろに）+ stage（舞台）",              prefix:"up-", level:5, pos:"名詞・動詞"},
  {word:"upsurge",     meaning:"急増・急上昇",             etymology:"up（上に）+ surge（波・高まり）",          prefix:"up-", level:5, pos:"名詞"},
  {word:"upfront",     meaning:"率直な・前払いで",         etymology:"up（完全に）+ front（前面）",              prefix:"up-", level:5, pos:"形容詞・名詞"},
  {word:"upend",       meaning:"ひっくり返す・混乱させる", etymology:"up（上に）+ end（端）",                    prefix:"up-", level:5, pos:"動詞"},
  {word:"upstart",     meaning:"成り上がり者・新興の",     etymology:"up（突然）+ start（出発）",                prefix:"up-", level:5, pos:"名詞・形容詞"},
  {word:"upturn",      meaning:"回復・上向き",             etymology:"up（上に）+ turn（回る）",                 prefix:"up-", level:5, pos:"名詞"},
  {word:"upshot",      meaning:"結果・結末",               etymology:"up（最後に）+ shot（射撃）",               prefix:"up-", level:5, pos:"名詞"},
  {word:"upstanding",  meaning:"高潔な・直立した",         etymology:"up（上に）+ standing（立っている）",        prefix:"up-", level:5, pos:"形容詞"},
  {word:"uptight",     meaning:"緊張した・堅苦しい",       etymology:"up（完全に）+ tight（固い）",              prefix:"up-", level:5, pos:"形容詞"},
  {word:"upscale",     meaning:"高級な・上流の",           etymology:"up（上に）+ scale（等級）",                prefix:"up-", level:5, pos:"形容詞"},
  {word:"upkeep",      meaning:"維持・保守",               etymology:"up（続けて）+ keep（保つ）",               prefix:"up-", level:5, pos:"名詞"},
  {word:"upswing",     meaning:"上昇傾向・好転",           etymology:"up（上に）+ swing（揺れる）",              prefix:"up-", level:5, pos:"名詞"},
  {word:"upwardly",    meaning:"上向きに・上昇志向で",     etymology:"up（上に）+ ward（方向）+ ly（副詞）",     prefix:"up-", level:5, pos:"副詞・名詞"},
  {word:"uproarious",  meaning:"騒々しい・抱腹絶倒の",     etymology:"uproar（騒動）+ ious（〜の）",             prefix:"up-", level:6, pos:"形容詞"},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
