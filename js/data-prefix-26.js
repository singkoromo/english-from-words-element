/**
 * data-prefix-26.js — 接頭語補充16（contra-, extra-, dys-）
 * 形式: { word, meaning, etymology, prefix, level }
 * level: 0=beginner 1=intermediate 2=advanced 3=master
 */
(function(){
  var d = [
  // ── contra-（反対・逆） ──────────────────
  {word:"contrabass",           meaning:"コントラバス・最低音弦楽器",      etymology:"contra（反対・低）+ bass（低音）",                prefix:"contra-", level:1},
  {word:"contraposition",       meaning:"対偶・逆対照配置",                etymology:"contra（反対）+ position（位置）",                prefix:"contra-", level:3},
  {word:"contrapositive",       meaning:"対偶命題（論理学）",              etymology:"contra（反対）+ positive（肯定的）",              prefix:"contra-", level:3},
  {word:"contrafactual",        meaning:"反事実的な",                      etymology:"contra（反対）+ factual（事実の）",               prefix:"contra-", level:3},
  {word:"contrafagotto",        meaning:"コントラファゴット・最低音管楽器", etymology:"contra（反対・低）+ fagotto（ファゴット）",       prefix:"contra-", level:3},
  {word:"contrarotation",       meaning:"逆回転",                          etymology:"contra（反対）+ rotation（回転）",                prefix:"contra-", level:2},
  {word:"contravariant",        meaning:"反変的な（数学・物理）",          etymology:"contra（反対）+ variant（変化する）",             prefix:"contra-", level:3},
  {word:"contranatant",         meaning:"流れに逆らって泳ぐ",              etymology:"contra（反対）+ natant（泳ぐ）",                  prefix:"contra-", level:3},
  {word:"contraceptive",        meaning:"避妊の・避妊薬",                  etymology:"contra（反対）+ ceptive（受け取る）",             prefix:"contra-", level:1},
  {word:"contrasuggestibility", meaning:"反被暗示性・暗示に逆らう傾向",   etymology:"contra（反対）+ suggestibility（被暗示性）",      prefix:"contra-", level:3},
  {word:"contrarevolutionary",  meaning:"反革命の",                        etymology:"contra（反対）+ revolutionary（革命的な）",       prefix:"contra-", level:2},
  {word:"contranote",           meaning:"反論・対立意見",                  etymology:"contra（反対）+ note（注記）",                    prefix:"contra-", level:2},
  {word:"contraindicate",       meaning:"禁忌を示す・使用禁止を示す",      etymology:"contra（反対）+ indicate（示す）",                prefix:"contra-", level:2},
  {word:"contrapposto",         meaning:"コントラポスト・体のひねり姿勢",  etymology:"contra（反対）+ posto（位置）",                   prefix:"contra-", level:3},
  {word:"contrarotate",         meaning:"逆方向に回転する",                etymology:"contra（反対）+ rotate（回転する）",              prefix:"contra-", level:2},

  // ── extra-（外・超えた） ──────────────────
  {word:"extrasolar",           meaning:"太陽系外の",                      etymology:"extra（外）+ solar（太陽の）",                    prefix:"extra-", level:2},
  {word:"extrajudicial",        meaning:"司法外の・法廷外の",              etymology:"extra（外）+ judicial（司法の）",                 prefix:"extra-", level:3},
  {word:"extraterritorial",     meaning:"治外法権の・領土外の",            etymology:"extra（外）+ territorial（領土の）",              prefix:"extra-", level:3},
  {word:"extraversion",         meaning:"外向性・外向き傾向",              etymology:"extra（外）+ version（向き）",                    prefix:"extra-", level:1},
  {word:"extramundane",         meaning:"この世を超えた・超世俗的な",      etymology:"extra（外）+ mundane（世俗の）",                  prefix:"extra-", level:3},
  {word:"extravehicular",       meaning:"機外の・宇宙船外の",              etymology:"extra（外）+ vehicular（乗り物の）",              prefix:"extra-", level:3},
  {word:"extrasystole",         meaning:"期外収縮（心臓医学）",            etymology:"extra（外）+ systole（収縮）",                    prefix:"extra-", level:3},
  {word:"extrauterine",         meaning:"子宮外の",                        etymology:"extra（外）+ uterine（子宮の）",                  prefix:"extra-", level:3},
  {word:"extranational",        meaning:"超国家的な",                      etymology:"extra（外）+ national（国家の）",                 prefix:"extra-", level:2},
  {word:"extraphysical",        meaning:"物理を超えた",                    etymology:"extra（外）+ physical（物理的な）",               prefix:"extra-", level:3},
  {word:"extratemporal",        meaning:"時間を超えた",                    etymology:"extra（外）+ temporal（時間の）",                 prefix:"extra-", level:3},
  {word:"extraneousness",       meaning:"無関係であること・外来性",        etymology:"extra（外）+ neousness（状態）",                  prefix:"extra-", level:3},
  {word:"extramorphic",         meaning:"通常の形態を超えた",              etymology:"extra（外）+ morphic（形態の）",                  prefix:"extra-", level:3},
  {word:"extracontractual",     meaning:"契約外の",                        etymology:"extra（外）+ contractual（契約の）",              prefix:"extra-", level:3},
  {word:"extraphonic",          meaning:"音響的範囲外の",                  etymology:"extra（外）+ phonic（音の）",                     prefix:"extra-", level:3},

  // ── dys-（異常・不良・困難） ──────────────────
  {word:"dyscalculia",          meaning:"算数障害・数学学習困難",          etymology:"dys（困難）+ calculia（計算）",                   prefix:"dys-", level:2},
  {word:"dyskinesia",           meaning:"運動障害・不随意運動",            etymology:"dys（異常）+ kinesia（運動）",                    prefix:"dys-", level:3},
  {word:"dysphagia",            meaning:"嚥下障害・飲み込み困難",          etymology:"dys（困難）+ phagia（食べること）",               prefix:"dys-", level:3},
  {word:"dysrhythmia",          meaning:"不整脈・リズム異常",              etymology:"dys（異常）+ rhythmia（リズム）",                 prefix:"dys-", level:3},
  {word:"dyssomnia",            meaning:"睡眠障害",                        etymology:"dys（異常）+ somnia（睡眠）",                     prefix:"dys-", level:2},
  {word:"dyspraxia",            meaning:"発達性協調運動障害",              etymology:"dys（困難）+ praxia（行為）",                     prefix:"dys-", level:3},
  {word:"dyslalia",             meaning:"構音障害・発音困難",              etymology:"dys（困難）+ lalia（話すこと）",                  prefix:"dys-", level:3},
  {word:"dyslogia",             meaning:"言語思考障害",                    etymology:"dys（困難）+ logia（言葉・理性）",                prefix:"dys-", level:3},
  {word:"dysesthesia",          meaning:"感覚異常・異常感覚",              etymology:"dys（異常）+ esthesia（感覚）",                   prefix:"dys-", level:3},
  {word:"dysgnosia",            meaning:"認知障害・認識困難",              etymology:"dys（困難）+ gnosia（知ること）",                 prefix:"dys-", level:3},
  {word:"dysacousis",           meaning:"聴覚異常・聞こえの障害",          etymology:"dys（異常）+ acousis（聴覚）",                    prefix:"dys-", level:3},
  {word:"dysbasia",             meaning:"歩行障害",                        etymology:"dys（困難）+ basia（歩行）",                      prefix:"dys-", level:3},
  {word:"dyssynchrony",         meaning:"非同期・タイミングのずれ",        etymology:"dys（異常）+ synchrony（同期）",                  prefix:"dys-", level:3},
  {word:"dystaxia",             meaning:"運動失調・協調運動障害",          etymology:"dys（異常）+ taxia（運動配置）",                  prefix:"dys-", level:3},
  {word:"dyschronia",           meaning:"時間感覚障害",                    etymology:"dys（異常）+ chronia（時間）",                    prefix:"dys-", level:3},
  ];
  if(!window.WORD_DATA_RAW) window.WORD_DATA_RAW=[];
  window.WORD_DATA_RAW=window.WORD_DATA_RAW.concat(d);
})();
