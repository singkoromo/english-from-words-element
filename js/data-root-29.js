/**
 * data-root-29.js — 語根データ（-cardi-, -gastr-, -derm-, -hepat-）
 * 形式: { word, meaning, etymology, root, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── -cardi-（心臓） ──────────────────
  {word:"cardiac",      meaning:"心臓の・心臓病の",         etymology:"cardi（心臓）+ ac（〜の）",                   root:"-cardi-", level:2},
  {word:"cardiology",   meaning:"心臓病学",                etymology:"cardi（心臓）+ ology（学問）",                root:"-cardi-", level:2},
  {word:"cardiogram",   meaning:"心電図",                  etymology:"cardi（心臓）+ gram（記録）",                 root:"-cardi-", level:2},
  {word:"cardiovascular",meaning:"心臓血管の",             etymology:"cardi（心臓）+ vascular（血管の）",           root:"-cardi-", level:2},
  {word:"pericardium",  meaning:"心膜",                    etymology:"peri（周りの）+ cardi（心臓）+ um",           root:"-cardi-", level:3},
  {word:"tachycardia",  meaning:"頻脈・心拍過速",           etymology:"tachy（速い）+ cardi（心臓）+ a",             root:"-cardi-", level:3},
  {word:"bradycardia",  meaning:"徐脈・心拍減速",           etymology:"brady（遅い）+ cardi（心臓）+ a",             root:"-cardi-", level:3},
  {word:"myocardium",   meaning:"心筋",                    etymology:"myo（筋肉）+ cardi（心臓）+ um",             root:"-cardi-", level:3},
  {word:"endocardium",  meaning:"心内膜",                  etymology:"endo（内側）+ cardi（心臓）+ um",            root:"-cardi-", level:3},

  // ── -gastr-（胃・腹） ──────────────────
  {word:"gastric",      meaning:"胃の",                    etymology:"gastr（胃）+ ic（〜の）",                     root:"-gastr-", level:2},
  {word:"gastronomy",   meaning:"美食術・グルメ",           etymology:"gastr（胃）+ nom（法則）+ y",                 root:"-gastr-", level:2},
  {word:"gastritis",    meaning:"胃炎",                    etymology:"gastr（胃）+ itis（炎症）",                   root:"-gastr-", level:2},
  {word:"gastropod",    meaning:"腹足類（カタツムリ等）",   etymology:"gastro（腹）+ pod（足）",                     root:"-gastr-", level:3},
  {word:"gastrointestinal",meaning:"胃腸の",              etymology:"gastro（胃）+ intestinal（腸の）",            root:"-gastr-", level:3},
  {word:"gastrectomy",  meaning:"胃切除術",                etymology:"gastr（胃）+ ectomy（切除）",                root:"-gastr-", level:3},
  {word:"gastroenterology",meaning:"消化器内科学",        etymology:"gastro（胃）+ entero（腸）+ logy（学問）",    root:"-gastr-", level:3},

  // ── -derm-（皮膚） ──────────────────
  {word:"dermatology",  meaning:"皮膚科学",                etymology:"derm（皮膚）+ atology（学問）",               root:"-derm-", level:2},
  {word:"epidermis",    meaning:"表皮",                    etymology:"epi（上に）+ derm（皮膚）+ is",               root:"-derm-", level:2},
  {word:"dermis",       meaning:"真皮",                    etymology:"derm（皮膚）+ is",                            root:"-derm-", level:2},
  {word:"pachyderm",    meaning:"厚皮動物（象・サイ等）",   etymology:"pachy（厚い）+ derm（皮膚）",                 root:"-derm-", level:2},
  {word:"taxidermy",    meaning:"剥製術",                  etymology:"taxi（整える）+ derm（皮膚）+ y",             root:"-derm-", level:3},
  {word:"hypodermic",   meaning:"皮下の・注射針",           etymology:"hypo（下に）+ derm（皮膚）+ ic",              root:"-derm-", level:2},
  {word:"dermatitis",   meaning:"皮膚炎",                  etymology:"derm（皮膚）+ atis（炎症）",                  root:"-derm-", level:2},
  {word:"ectoderm",     meaning:"外胚葉",                  etymology:"ecto（外側）+ derm（皮膚）",                  root:"-derm-", level:3},
  {word:"endoderm",     meaning:"内胚葉",                  etymology:"endo（内側）+ derm（皮膚）",                  root:"-derm-", level:3},

  // ── -hepat-（肝臓） ──────────────────
  {word:"hepatitis",    meaning:"肝炎",                    etymology:"hepat（肝臓）+ itis（炎症）",                 root:"-hepat-", level:2},
  {word:"hepatic",      meaning:"肝臓の",                  etymology:"hepat（肝臓）+ ic（〜の）",                   root:"-hepat-", level:2},
  {word:"hepatology",   meaning:"肝臓学",                  etymology:"hepat（肝臓）+ ology（学問）",                root:"-hepat-", level:3},
  {word:"hepatocyte",   meaning:"肝細胞",                  etymology:"hepato（肝臓）+ cyte（細胞）",                root:"-hepat-", level:3},
  {word:"hepatectomy",  meaning:"肝切除",                  etymology:"hepat（肝臓）+ ectomy（切除）",              root:"-hepat-", level:3},
  {word:"cirrhosis",    meaning:"肝硬変",                  etymology:"cirrh（黄色）+ osis（病態）←肝臓の変色より",  root:"-hepat-", level:3},
  ];
  if(typeof window !== 'undefined'){
    if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
    window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
  }
})();
