/**
 * data-suffix-10.js — 接尾語補充2（-er, -ed）
 */
(function(){
  var d = [
  // ── -er（人・物・比較級） ──────────────────
  {word:"worker",      meaning:"労働者・働く人",           etymology:"work（働く）+ er（人）",              suffix:"-er", level:0},
  {word:"farmer",      meaning:"農家・農夫",               etymology:"farm（農場）+ er（人）",              suffix:"-er", level:0},
  {word:"singer",      meaning:"歌手",                     etymology:"sing（歌う）+ er（人）",              suffix:"-er", level:0},
  {word:"driver",      meaning:"運転者・ドライバー",        etymology:"drive（運転する）+ er（人）",         suffix:"-er", level:0},
  {word:"fighter",     meaning:"戦士・格闘家",             etymology:"fight（戦う）+ er（人）",             suffix:"-er", level:1},
  {word:"hunter",      meaning:"狩人・ハンター",            etymology:"hunt（狩る）+ er（人）",              suffix:"-er", level:1},
  {word:"swimmer",     meaning:"水泳選手",                  etymology:"swim（泳ぐ）+ er（人）",              suffix:"-er", level:1},
  {word:"climber",     meaning:"登山家",                   etymology:"climb（登る）+ er（人）",             suffix:"-er", level:1},
  {word:"dancer",      meaning:"ダンサー・踊り手",          etymology:"dance（踊る）+ er（人）",             suffix:"-er", level:0},
  {word:"speaker",     meaning:"話し手・スピーカー",        etymology:"speak（話す）+ er（人）",             suffix:"-er", level:1},
  {word:"adviser",     meaning:"顧問・アドバイザー",        etymology:"advis（助言する）+ er（人）",         suffix:"-er", level:2},
  {word:"reporter",    meaning:"記者・報告者",              etymology:"report（報告する）+ er（人）",        suffix:"-er", level:1},
  {word:"researcher",  meaning:"研究者",                   etymology:"research（研究する）+ er（人）",      suffix:"-er", level:1},
  {word:"manager",     meaning:"管理者・マネージャー",       etymology:"manag（管理する）+ er（人）",         suffix:"-er", level:1},
  {word:"solver",      meaning:"解決者・問題を解く人",      etymology:"solv（解く）+ er（人）",              suffix:"-er", level:2},
  {word:"builder",     meaning:"建設者・作る人",            etymology:"build（建てる）+ er（人）",           suffix:"-er", level:1},
  {word:"thinker",     meaning:"思想家・考える人",          etymology:"think（考える）+ er（人）",           suffix:"-er", level:1},
  {word:"provider",    meaning:"提供者・養う人",            etymology:"provid（提供する）+ er（人）",        suffix:"-er", level:2},
  {word:"supplier",    meaning:"供給者・サプライヤー",       etymology:"suppli（供給する）+ er（人）",        suffix:"-er", level:2},
  {word:"defender",    meaning:"守備者・弁護者",            etymology:"defend（守る）+ er（人）",            suffix:"-er", level:2},
  {word:"admirer",     meaning:"崇拝者・ファン",            etymology:"admir（称賛する）+ er（人）",         suffix:"-er", level:2},
  {word:"runner",      meaning:"走者・ランナー",            etymology:"run（走る）+ er（人）",               suffix:"-er", level:0},
  {word:"maker",       meaning:"作る人・メーカー",          etymology:"make（作る）+ er（人）",              suffix:"-er", level:0},
  {word:"founder",     meaning:"創設者・設立者",            etymology:"found（設立する）+ er（人）",         suffix:"-er", level:2},
  {word:"challenger",  meaning:"挑戦者",                   etymology:"challeng（挑戦する）+ er（人）",      suffix:"-er", level:2},

  // ── -ed（過去分詞・形容詞） ──────────────────
  {word:"relaxed",     meaning:"リラックスした・くつろいだ", etymology:"relax（緩める）+ ed（状態）",          suffix:"-ed", level:1},
  {word:"inspired",    meaning:"インスピレーションを受けた", etymology:"inspir（吹き込む）+ ed（状態）",       suffix:"-ed", level:1},
  {word:"motivated",   meaning:"やる気がある・動機づけられた",etymology:"motivat（動機づける）+ ed（状態）",   suffix:"-ed", level:1},
  {word:"fascinated",  meaning:"魅了された・夢中になった",   etymology:"fascinat（魅了する）+ ed（状態）",     suffix:"-ed", level:2},
  {word:"disappointed",meaning:"失望した・がっかりした",     etymology:"disappoint（失望させる）+ ed（状態）", suffix:"-ed", level:1},
  {word:"exhausted",   meaning:"疲れ果てた・消耗した",       etymology:"exhaust（使い果たす）+ ed（状態）",    suffix:"-ed", level:1},
  {word:"overwhelmed", meaning:"圧倒された",                 etymology:"overwhelm（圧倒する）+ ed（状態）",    suffix:"-ed", level:2},
  {word:"frustrated",  meaning:"欲求不満の・いらだった",     etymology:"frustrat（くじく）+ ed（状態）",       suffix:"-ed", level:1},
  {word:"confused",    meaning:"混乱した・困惑した",          etymology:"confus（混同する）+ ed（状態）",       suffix:"-ed", level:1},
  {word:"delighted",   meaning:"喜んだ・うれしい",           etymology:"delight（喜ばせる）+ ed（状態）",      suffix:"-ed", level:1},
  {word:"astonished",  meaning:"驚いた・仰天した",            etymology:"astonish（驚かせる）+ ed（状態）",    suffix:"-ed", level:2},
  {word:"frightened",  meaning:"怖がった・おびえた",          etymology:"frighten（怖がらせる）+ ed（状態）",   suffix:"-ed", level:1},
  {word:"amazed",      meaning:"驚いた・びっくりした",        etymology:"amaz（驚かせる）+ ed（状態）",         suffix:"-ed", level:1},
  {word:"satisfied",   meaning:"満足した",                   etymology:"satisfi（満足させる）+ ed（状態）",    suffix:"-ed", level:1},
  {word:"encouraged",  meaning:"励まされた・勇気づけられた", etymology:"encourag（励ます）+ ed（状態）",       suffix:"-ed", level:2},
  {word:"startled",    meaning:"ぎょっとした・驚かされた",    etymology:"startle（驚かせる）+ ed（状態）",      suffix:"-ed", level:2},
  {word:"excited",     meaning:"興奮した・ワクワクした",      etymology:"excit（興奮させる）+ ed（状態）",      suffix:"-ed", level:0},
  {word:"interested",  meaning:"興味がある",                 etymology:"interest（興味を持たせる）+ ed（状態）",suffix:"-ed", level:0},
  {word:"shocked",     meaning:"ショックを受けた",            etymology:"shock（衝撃を与える）+ ed（状態）",    suffix:"-ed", level:1},
  {word:"irritated",   meaning:"いらいらした・腹立った",      etymology:"irritat（いらだたせる）+ ed（状態）",  suffix:"-ed", level:2},
  {word:"bored",       meaning:"退屈した",                   etymology:"bore（退屈させる）+ ed（状態）",       suffix:"-ed", level:0},
  {word:"amused",      meaning:"楽しんだ・おかしいと思った", etymology:"amus（楽しませる）+ ed（状態）",       suffix:"-ed", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
