/**
 * data-prefix-17.js — 接頭語補充7（hetero-, auto-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── hetero-（異なる・他の） ──────────────────
  {word:"heterodox",      meaning:"異端の・正統でない",          etymology:"hetero（異なる）+ dox（意見・教義）",           prefix:"hetero-", level:2},
  {word:"heteroclite",    meaning:"変格の・型破りな",            etymology:"hetero（異なる）+ clite（傾く）",               prefix:"hetero-", level:3},
  {word:"heterochrony",   meaning:"異時発生・発育時期のずれ",    etymology:"hetero（異なる）+ chrony（時間）",              prefix:"hetero-", level:3},
  {word:"heteromorphic",  meaning:"異形の・形が異なる",          etymology:"hetero（異なる）+ morphic（形の）",             prefix:"hetero-", level:3},
  {word:"heteronomous",   meaning:"他律的な・外部規範に従う",    etymology:"hetero（他の）+ nomous（法則・規律）",          prefix:"hetero-", level:3},
  {word:"heterophony",    meaning:"異音・異なる声部による演奏",  etymology:"hetero（異なる）+ phony（音・声）",             prefix:"hetero-", level:3},
  {word:"heteroplasty",   meaning:"異種移植・異物移植術",        etymology:"hetero（異なる）+ plasty（形成術）",            prefix:"hetero-", level:3},
  {word:"heteroscedastic",meaning:"不均一分散の（統計学）",      etymology:"hetero（異なる）+ scedastic（散らばり）",       prefix:"hetero-", level:3},
  {word:"heterostructure",meaning:"異種構造・異種接合体",        etymology:"hetero（異なる）+ structure（構造）",           prefix:"hetero-", level:3},
  {word:"heterodoxy",     meaning:"異端説・正統に反する見解",    etymology:"hetero（異なる）+ doxy（教義・意見）",          prefix:"hetero-", level:3},
  {word:"heterocyst",     meaning:"異細胞・特殊化した植物細胞",  etymology:"hetero（異なる）+ cyst（嚢・細胞）",            prefix:"hetero-", level:3},
  {word:"heterodyne",     meaning:"ヘテロダイン（周波数混合）",  etymology:"hetero（異なる）+ dyne（力・電力）",            prefix:"hetero-", level:3},
  {word:"heterograft",    meaning:"異種移植片",                  etymology:"hetero（異なる）+ graft（移植片）",             prefix:"hetero-", level:3},
  {word:"heterolingual",  meaning:"異言語間の",                  etymology:"hetero（異なる）+ lingual（言語の）",           prefix:"hetero-", level:3},
  {word:"heterophile",    meaning:"異種親和性の・他種に親和する",etymology:"hetero（異なる）+ phile（好む）",               prefix:"hetero-", level:3},
  {word:"heterotypic",    meaning:"異型の・異なる型の",          etymology:"hetero（異なる）+ typic（型の）",               prefix:"hetero-", level:3},
  {word:"heterosis",      meaning:"雑種強勢・ヘテローシス",      etymology:"hetero（異なる）+ osis（状態・過程）",          prefix:"hetero-", level:3},
  {word:"heterotopia",    meaning:"異所性・組織の異常配置",      etymology:"hetero（異なる）+ topia（場所）",               prefix:"hetero-", level:3},
  {word:"heterotroph",    meaning:"従属栄養生物・他養生物",      etymology:"hetero（異なる・他の）+ troph（栄養）",         prefix:"hetero-", level:3},
  {word:"heterozygote",   meaning:"異型接合体・ヘテロ接合体",    etymology:"hetero（異なる）+ zygote（接合体）",            prefix:"hetero-", level:3},

  // ── auto-（自己・自動） ──────────────────
  {word:"autocracy",      meaning:"独裁政治・専制政治",          etymology:"auto（自己）+ cracy（支配・統治）",             prefix:"auto-", level:2},
  {word:"autofocus",      meaning:"自動焦点・オートフォーカス",  etymology:"auto（自動）+ focus（焦点）",                   prefix:"auto-", level:1},
  {word:"autocorrect",    meaning:"自動修正・オートコレクト",    etymology:"auto（自動）+ correct（修正する）",             prefix:"auto-", level:1},
  {word:"autotomy",       meaning:"自切・動物の自己切断",        etymology:"auto（自己）+ tomy（切ること）",               prefix:"auto-", level:3},
  {word:"autogenic",      meaning:"自己発生の・内発的な",        etymology:"auto（自己）+ genic（生成する）",               prefix:"auto-", level:3},
  {word:"autodidact",     meaning:"独学者・自己教育した人",      etymology:"auto（自己）+ didact（教える）",               prefix:"auto-", level:3},
  {word:"autologous",     meaning:"自家の・自己由来の",          etymology:"auto（自己）+ logous（同種・同質）",            prefix:"auto-", level:3},
  {word:"autosuggestion", meaning:"自己暗示",                    etymology:"auto（自己）+ suggestion（暗示）",             prefix:"auto-", level:2},
  {word:"autochthonous",  meaning:"土着の・原地性の",            etymology:"auto（自己）+ chthonous（大地・土地）",         prefix:"auto-", level:3},
  {word:"autoimmune",     meaning:"自己免疫の",                  etymology:"auto（自己）+ immune（免疫の）",               prefix:"auto-", level:2},
  {word:"autolysis",      meaning:"自己消化・自家融解",          etymology:"auto（自己）+ lysis（分解・溶解）",             prefix:"auto-", level:3},
  {word:"autonomy",       meaning:"自律・自治・独立",            etymology:"auto（自己）+ nomy（法則・規律）",              prefix:"auto-", level:1},
  {word:"autoresponder",  meaning:"自動返信システム",            etymology:"auto（自動）+ responder（返信するもの）",       prefix:"auto-", level:1},
  {word:"autotroph",      meaning:"独立栄養生物・自養生物",      etymology:"auto（自己）+ troph（栄養）",                   prefix:"auto-", level:3},
  {word:"autorotation",   meaning:"自動回転・オートローテーション",etymology:"auto（自動）+ rotation（回転）",              prefix:"auto-", level:2},
  {word:"autosave",       meaning:"自動保存・オートセーブ",      etymology:"auto（自動）+ save（保存する）",               prefix:"auto-", level:0},
  {word:"autoscale",      meaning:"自動拡縮・自動スケーリング",  etymology:"auto（自動）+ scale（規模・縮尺）",             prefix:"auto-", level:2},
  {word:"autotelic",      meaning:"それ自体が目的である",        etymology:"auto（自己）+ telic（目的の）",                 prefix:"auto-", level:3},
  {word:"autopoiesis",    meaning:"自己組織化・オートポイエーシス",etymology:"auto（自己）+ poiesis（制作・生成）",          prefix:"auto-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
