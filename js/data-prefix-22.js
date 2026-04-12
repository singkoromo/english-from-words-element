/**
 * data-prefix-22.js — 接頭語補充12（anti-, astro-, eu-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── anti-（反・対・抵抗） ──────────────────
  {word:"antiwar",         meaning:"反戦の・戦争反対の",           etymology:"anti（反）+ war（戦争）",                           prefix:"anti-", level:0},
  {word:"antifungal",      meaning:"抗真菌性の・抗カビ剤",         etymology:"anti（対）+ fungal（真菌の）",                      prefix:"anti-", level:2},
  {word:"antigen",         meaning:"抗原・免疫反応を引き起こす物質",etymology:"anti（対）+ gen（生み出す）",                      prefix:"anti-", level:2},
  {word:"antifreeze",      meaning:"不凍液・凍結防止剤",           etymology:"anti（対）+ freeze（凍る）",                        prefix:"anti-", level:1},
  {word:"antitrust",       meaning:"独占禁止の・反トラストの",     etymology:"anti（反）+ trust（信託・独占）",                   prefix:"anti-", level:2},
  {word:"antimatter",      meaning:"反物質",                       etymology:"anti（反）+ matter（物質）",                        prefix:"anti-", level:3},
  {word:"anticoagulant",   meaning:"抗凝固剤・血液凝固阻止薬",     etymology:"anti（対）+ coagulant（凝固する）",                 prefix:"anti-", level:3},
  {word:"antibacterial",   meaning:"抗菌性の・細菌に対抗する",     etymology:"anti（対）+ bacterial（細菌の）",                   prefix:"anti-", level:2},
  {word:"antipodean",      meaning:"正反対の・対蹠地の",           etymology:"anti（対）+ podean（足・地点）",                    prefix:"anti-", level:3},
  {word:"antipiracy",      meaning:"海賊行為禁止の・著作権保護の", etymology:"anti（反）+ piracy（海賊行為）",                    prefix:"anti-", level:2},
  {word:"antinomian",      meaning:"反律法主義の・道徳律否定の",   etymology:"anti（反）+ nomian（法律）",                        prefix:"anti-", level:3},
  {word:"antinuclear",     meaning:"反核の・核兵器廃絶の",         etymology:"anti（反）+ nuclear（核の）",                       prefix:"anti-", level:1},
  {word:"antiestablishment",meaning:"反体制の・既成勢力に反対の",  etymology:"anti（反）+ establishment（体制）",                 prefix:"anti-", level:2},
  {word:"antiinflammatory",meaning:"抗炎症の・炎症を抑える",       etymology:"anti（対）+ inflammatory（炎症の）",                prefix:"anti-", level:2},
  {word:"antipathy",       meaning:"反感・嫌悪",                   etymology:"anti（反）+ pathy（感情）",                         prefix:"anti-", level:2},
  {word:"antibiosis",      meaning:"抗生作用・拮抗共存",           etymology:"anti（対）+ biosis（生存）",                        prefix:"anti-", level:3},

  // ── astro-（星・宇宙） ──────────────────
  {word:"astrobiology",    meaning:"宇宙生物学・天体生物学",       etymology:"astro（星）+ biology（生物学）",                    prefix:"astro-", level:3},
  {word:"astrometry",      meaning:"位置天文学・星の測定",         etymology:"astro（星）+ metry（測定）",                        prefix:"astro-", level:3},
  {word:"astronavigation", meaning:"天体航法・星を利用した航行",   etymology:"astro（星）+ navigation（航行）",                   prefix:"astro-", level:3},
  {word:"astrophysical",   meaning:"天体物理学的な",               etymology:"astro（星）+ physical（物理的な）",                 prefix:"astro-", level:3},
  {word:"astrocartography",meaning:"天体地図学・星座地図術",       etymology:"astro（星）+ cartography（地図制作）",              prefix:"astro-", level:3},
  {word:"astrogeology",    meaning:"天体地質学",                   etymology:"astro（星）+ geology（地質学）",                    prefix:"astro-", level:3},
  {word:"astrophile",      meaning:"星愛好家・天文ファン",         etymology:"astro（星）+ phile（愛する人）",                    prefix:"astro-", level:2},
  {word:"astrosociology",  meaning:"宇宙社会学",                   etymology:"astro（宇宙）+ sociology（社会学）",                prefix:"astro-", level:3},
  {word:"astroturf",       meaning:"人工芝・草の根を装った宣伝",   etymology:"astro（star）+ turf（芝生）→ 商標から転じて偽の運動",prefix:"astro-", level:2},
  {word:"astroflight",     meaning:"宇宙飛行",                     etymology:"astro（宇宙）+ flight（飛行）",                     prefix:"astro-", level:2},
  {word:"astropaleontology",meaning:"宇宙古生物学",                etymology:"astro（宇宙）+ paleontology（古生物学）",           prefix:"astro-", level:3},
  {word:"astroclimate",    meaning:"宇宙気象・天体気候",           etymology:"astro（宇宙）+ climate（気候）",                    prefix:"astro-", level:3},
  {word:"astropharmacology",meaning:"宇宙薬理学",                  etymology:"astro（宇宙）+ pharmacology（薬理学）",             prefix:"astro-", level:3},
  {word:"astrodynamics",   meaning:"軌道力学・天体力学",           etymology:"astro（星）+ dynamics（動力学）",                   prefix:"astro-", level:3},
  {word:"astrocompass",    meaning:"天体コンパス・星を使った方位磁針",etymology:"astro（星）+ compass（コンパス）",               prefix:"astro-", level:3},
  {word:"astrochemistry",  meaning:"宇宙化学・天体化学",           etymology:"astro（星）+ chemistry（化学）",                    prefix:"astro-", level:3},

  // ── eu-（良い・正常・真の） ──────────────────
  {word:"eudaimonia",      meaning:"幸福・充実した人生（アリストテレス哲学）",etymology:"eu（良い）+ daimonia（霊・運命）",      prefix:"eu-", level:3},
  {word:"euthenics",       meaning:"環境改善学・生活環境最適化の科学",etymology:"eu（良い）+ thenics（生活環境）",               prefix:"eu-", level:3},
  {word:"euthymia",        meaning:"精神的平穏・正常な気分状態",   etymology:"eu（良い）+ thymia（気分・心）",                    prefix:"eu-", level:3},
  {word:"euploid",         meaning:"倍数体の・正常な染色体数の",   etymology:"eu（正常な）+ ploid（染色体）",                     prefix:"eu-", level:3},
  {word:"eucrasy",         meaning:"良好な体質・健全な体調",       etymology:"eu（良い）+ crasy（混合・体質）",                   prefix:"eu-", level:3},
  {word:"eurhythm",        meaning:"調和のとれたリズム・美しい律動",etymology:"eu（良い）+ rhythm（リズム）",                     prefix:"eu-", level:3},
  {word:"eunomy",          meaning:"優れた法律・法による秩序",     etymology:"eu（良い）+ nomy（法律・秩序）",                    prefix:"eu-", level:3},
  {word:"eutheism",        meaning:"神の善性の信仰・神への信頼",   etymology:"eu（良い）+ theism（有神論）",                      prefix:"eu-", level:3},
  {word:"eupraxia",        meaning:"正常な動作・適切な行動能力",   etymology:"eu（良い）+ praxia（行動）",                        prefix:"eu-", level:3},
  {word:"eudaimonism",     meaning:"幸福主義・至福を最高善とする倫理説",etymology:"eu（良い）+ daimonism（霊・幸運）",           prefix:"eu-", level:3},
  {word:"eurythmic",       meaning:"調和のとれた・リズム感のある", etymology:"eu（良い）+ rhythmic（リズムの）",                  prefix:"eu-", level:3},
  {word:"eutrophic",       meaning:"富栄養状態の・栄養過多の",     etymology:"eu（良い）+ trophic（栄養の）",                     prefix:"eu-", level:3},
  {word:"eulogize",        meaning:"賛辞を述べる・称える演説をする",etymology:"eu（良い）+ logize（言葉で語る）",                 prefix:"eu-", level:2},
  {word:"eukaryote",       meaning:"真核生物",                     etymology:"eu（真の）+ karyote（核）",                         prefix:"eu-", level:3},
  {word:"euphony",         meaning:"音の美しさ・快い音調",         etymology:"eu（良い）+ phony（音）",                           prefix:"eu-", level:3},
  {word:"eugenics",        meaning:"優生学",                       etymology:"eu（良い）+ genics（生まれ・遺伝）",                prefix:"eu-", level:2},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
