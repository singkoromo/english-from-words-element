const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');
const newEntries = `
    "accelerando": {
      origin: "イタリア語 accelerare（速める）の現在分詞。ラテン語 ad-（〜へ）＋celerare（速める）＋celer（速い）。楽曲を徐々に速くする指示。",
      derivatives: ["acceleration", "accelerate"],
      family: ["celer-", "swift"],
      compounds: ["accelerando passage", "accelerando marking"]
    },
    "adagio": {
      origin: "イタリア語 ad agio（ゆとりをもって）。agio はフランク語に由来する「楽さ・余裕」の意。非常にゆっくりした速度を示す音楽記号。",
      derivatives: ["adagietto", "at ease"],
      family: ["tempo markings"],
      compounds: ["adagio movement", "adagio sostenuto"]
    },
    "allegretto": {
      origin: "イタリア語 allegro（快活な）の縮小形 allegretto。アレグロよりやや遅く、アンダンテより速い中程度の速度。",
      derivatives: ["allegro", "allegro vivace"],
      family: ["tempo markings"],
      compounds: ["allegretto movement", "allegretto grazioso"]
    },
    "allegro": {
      origin: "イタリア語 allegro（陽気な、速い）。ラテン語 alacer（機敏な・元気な）から。音楽における活発で速い速度記号。",
      derivatives: ["allegretto", "allegretto vivace"],
      family: ["tempo markings", "alacrity"],
      compounds: ["allegro vivace", "allegro con brio", "allegro moderato"]
    },
    "andante": {
      origin: "イタリア語 andare（歩く）の現在分詞。歩行のペースに相当する中間的速度。通常の歩調を音楽的速度に変換した記号。",
      derivatives: ["andantino", "andante cantabile"],
      family: ["tempo markings", "walking pace"],
      compounds: ["andante cantabile", "andante moderato"]
    },
    "appoggiatura": {
      origin: "イタリア語 appoggiare（もたれかかる）から。ラテン語 appodium（支え）に由来。主音の前に演奏される装飾的な「倚音」。",
      derivatives: ["acciaccatura", "ornament"],
      family: ["musical ornaments"],
      compounds: ["long appoggiatura", "short appoggiatura"]
    },
    "bel-canto": {
      origin: "イタリア語 bel canto（美しい歌）。bello（美しい）＋canto（歌）。声の美しさ・技巧・フレージングを重視した18〜19世紀イタリア声楽様式。",
      derivatives: ["bel cantist", "lyric singing"],
      family: ["vocal styles", "opera"],
      compounds: ["bel canto opera", "bel canto technique"]
    },
    "cantabile": {
      origin: "イタリア語 cantare（歌う）から派生した形容詞。ラテン語 cantare（歌う）。旋律的で歌うように表情豊かに演奏することを指示する記号。",
      derivatives: ["canto", "cantata", "canticle"],
      family: ["cant-", "singing"],
      compounds: ["andante cantabile", "cantabile style"]
    },
    "capriccio": {
      origin: "イタリア語 capriccio（気まぐれ・奇想）。capro（ヤギ）から「ヤギのように跳ね回る気まぐれ」。自由で即興的な器楽曲形式。",
      derivatives: ["caprice", "capriccioso"],
      family: ["capra-", "goat"],
      compounds: ["capriccio espagnol", "capriccio italiano"]
    },
    "coda": {
      origin: "イタリア語 coda（尾）。ラテン語 cauda（尾）から。楽曲の主要部分の後に付け加えられる終結部。記号 ⊕ で示される。",
      derivatives: ["cauda", "tail"],
      family: ["cauda-", "tail"],
      compounds: ["coda section", "al coda", "coda symbol"]
    },
    "coloratura": {
      origin: "イタリア語 colorare（色をつける）から。ラテン語 color（色）。旋律を装飾的な音符で彩る高度な歌唱技法。コロラトゥーラ・ソプラノが有名。",
      derivatives: ["coloratura soprano", "florid singing"],
      family: ["color-", "ornamentation"],
      compounds: ["coloratura soprano", "coloratura aria"]
    },
    "con-brio": {
      origin: "イタリア語 con brio（精力的に）。con（〜と共に）＋brio（活力・エネルギー）。活発さと生命力をもって演奏することを示す記号。",
      derivatives: ["brio", "con fuoco"],
      family: ["expression markings"],
      compounds: ["allegro con brio", "con brio marking"]
    },
    "continuo": {
      origin: "イタリア語 basso continuo（通奏低音）の短縮形。バロック時代（17〜18世紀）に低音部を和音記号と共に即興的に演奏する伴奏技法。",
      derivatives: ["thorough bass", "figured bass"],
      family: ["baroque music", "continual"],
      compounds: ["basso continuo", "continuo player", "continuo group"]
    },
    "da-capo": {
      origin: "イタリア語 da capo（頭から）。da（〜から）＋capo（頭・最初）。楽曲の最初から繰り返すことを指示する記号。略号は D.C.。",
      derivatives: ["dal segno", "da capo aria"],
      family: ["repeat markings", "capo-"],
      compounds: ["da capo aria", "da capo al fine", "da capo al coda"]
    },
    "divisi": {
      origin: "イタリア語 dividere（分ける）の過去分詞 divisi。同一パートの奏者を複数のグループに分けてそれぞれ異なる音を演奏させる指示。",
      derivatives: ["divided", "div."],
      family: ["orchestral markings"],
      compounds: ["divisi strings", "divisi passages"]
    },
    "dolce": {
      origin: "イタリア語 dolce（甘い・優しい）。ラテン語 dulcis（甘い）から。dulcet（甘美な）と同語源。優しく甘い音色で演奏することを示す記号。",
      derivatives: ["dolcissimo", "dolcemente"],
      family: ["dulc-", "sweet"],
      compounds: ["dolce vita", "dolce stil novo", "dolce marking"]
    },
    "dorian": {
      origin: "古代ギリシャの Dorians（ドーリア人）の名から。ドーリア旋法はDから始まる特定の音程パターン。グレゴリオ聖歌にも使用された。",
      derivatives: ["dorian mode", "church modes"],
      family: ["musical modes", "greek tribes"],
      compounds: ["dorian mode", "dorian scale"]
    },
    "fermata": {
      origin: "イタリア語 fermare（止まる・固定する）から。ラテン語 firmare（固める）。音符や休符を奏者の裁量で適宜延長することを示す記号 𝄐。",
      derivatives: ["ferma", "hold"],
      family: ["firm-", "fixed"],
      compounds: ["fermata sign", "fermata hold"]
    },
    "fortissimo": {
      origin: "イタリア語 forte（強い）の最上級 fortissimo。ラテン語 fortis（強い）から。可能な限り大きな音で演奏することを示す記号 ff。",
      derivatives: ["forte", "fortepiano"],
      family: ["fort-", "strong"],
      compounds: ["fortissimo dynamic", "pianissimo to fortissimo"]
    },
    "glissando": {
      origin: "フランス語 glisser（滑る）にイタリア語風の語尾 -ando を付けた語。隣接する音程間を素早く滑るように移行する演奏技法。",
      derivatives: ["glissade", "slide"],
      family: ["sliding techniques"],
      compounds: ["glissando effect", "harp glissando", "piano glissando"]
    },
    "homophony": {
      origin: "ギリシャ語 homos（同じ）＋phone（声・音）。一つの主旋律に和声的な伴奏が付く音楽スタイル。ポリフォニーに対する概念。",
      derivatives: ["homophonic", "homophone"],
      family: ["homo-", "phone-"],
      compounds: ["homophonic texture", "homophony vs polyphony"]
    },
    "intermezzo": {
      origin: "イタリア語 intermezzo（中間のもの）。inter-（間に）＋mezzo（中間・半分）。オペラの幕間劇や器楽の小品。ブラームスの間奏曲が有名。",
      derivatives: ["intermission", "interlude"],
      family: ["inter-", "medi-"],
      compounds: ["piano intermezzo", "operatic intermezzo"]
    },
    "largo": {
      origin: "イタリア語 largo（広い・大きな）。ラテン語 largus（豊かな・大きな）から。最も遅い速度記号の一つ。荘重でゆったりとした音楽。",
      derivatives: ["largamente", "larghetto"],
      family: ["larg-", "broad"],
      compounds: ["largo movement", "handel's largo"]
    },
    "lento": {
      origin: "イタリア語 lento（遅い・ゆっくりした）。ラテン語 lentus（ゆっくりした・柔軟な）から。adagioより速く、largoより速い遅い速度記号。",
      derivatives: ["lentamente", "lentissimo"],
      family: ["lent-", "slow"],
      compounds: ["lento movement", "lento assai"]
    },
    "moderato": {
      origin: "イタリア語 moderato（適度な・節制した）。ラテン語 moderatus（制限された）から。中程度の速度を示す音楽記号。",
      derivatives: ["moderate", "moderately"],
      family: ["moder-", "moderate"],
      compounds: ["allegro moderato", "andante moderato"]
    },
    "molto": {
      origin: "イタリア語 molto（多く・非常に）。ラテン語 multum（多く）から。他の速度・強弱記号を強調するために付加する修飾語。",
      derivatives: ["multum", "much"],
      family: ["mult-", "many"],
      compounds: ["molto allegro", "molto adagio", "non molto"]
    },
    "morendo": {
      origin: "イタリア語 morire（死ぬ）の現在分詞 morendo。ラテン語 mori（死ぬ）から。音量と速度を同時に落として消え入るように演奏する指示。",
      derivatives: ["dying away", "moribund"],
      family: ["mort-", "death"],
      compounds: ["morendo passage", "morendo ending"]
    },
    "ostinato": {
      origin: "イタリア語 ostinato（頑固な・執拗な）。ラテン語 obstinatus（固執した）から。同じリズムや旋律パターンを繰り返し続ける作曲技法。",
      derivatives: ["obstinate", "basso ostinato"],
      family: ["obstin-", "stubborn"],
      compounds: ["basso ostinato", "rhythmic ostinato"]
    },
    "pianissimo": {
      origin: "イタリア語 piano（柔らかい）の最上級 pianissimo。ラテン語 planus（平らな）から。可能な限り静かに演奏することを示す記号 pp。",
      derivatives: ["piano", "pianississimo"],
      family: ["plan-", "soft"],
      compounds: ["pianissimo dynamic", "fortissimo to pianissimo"]
    },
    "poco": {
      origin: "イタリア語 poco（少し・わずかに）。ラテン語 paucus（少ない）から。他の指示の程度を弱める修飾語。poco a poco は「少しずつ」。",
      derivatives: ["poco a poco", "un poco"],
      family: ["pauci-", "few"],
      compounds: ["poco a poco", "un poco", "poco forte"]
    },
    "portamento": {
      origin: "イタリア語 portare（運ぶ・持つ）から。ラテン語 portare（運ぶ）。音から音へ滑らかに移行する技法。声楽や弦楽器に特徴的。",
      derivatives: ["port de voix", "glide"],
      family: ["port-", "carry"],
      compounds: ["portamento technique", "vocal portamento"]
    },
    "prestissimo": {
      origin: "イタリア語 presto（速い）の最上級 prestissimo。ラテン語 praesto（すぐに・即座に）から。音楽記号の中で最も速い速度。",
      derivatives: ["presto", "presto agitato"],
      family: ["prest-", "quick"],
      compounds: ["prestissimo tempo", "prestissimo passage"]
    },
    "presto": {
      origin: "イタリア語 presto（速い・すぐに）。ラテン語 praesto（即座に用意ができた）から。非常に速い速度を示す音楽記号。",
      derivatives: ["prestissimo", "presto agitato"],
      family: ["prest-", "quick"],
      compounds: ["presto movement", "allegro presto"]
    },
    "rallentando": {
      origin: "イタリア語 rallentare（遅くなる）の現在分詞。re-（再び）＋allentare（緩める）。徐々に速度を落とすことを示す記号。略号 rall.。",
      derivatives: ["ritardando", "ritenuto"],
      family: ["retarding markings"],
      compounds: ["rallentando passage", "rallentando al fine"]
    },
    "recitative": {
      origin: "イタリア語 recitativo（語り物）から。ラテン語 recitare（朗読する）。オペラ・オラトリオで物語を進める歌と語りの中間的音楽様式。",
      derivatives: ["recitativo secco", "recitativo accompagnato"],
      family: ["recit-", "narration"],
      compounds: ["secco recitative", "accompanied recitative"]
    },
    "requiem": {
      origin: "ラテン語 requies（安らぎ）の対格形 requiem。死者のためのミサ典礼文の冒頭句「Requiem aeternam」（永遠の安らぎを）に由来する鎮魂曲。",
      derivatives: ["requiescat", "rest"],
      family: ["requi-", "rest"],
      compounds: ["requiem mass", "war requiem", "german requiem"]
    },
    "ritenuto": {
      origin: "イタリア語 ritenere（引き止める・保持する）の過去分詞。rit.と略される。rallentandoより急激な速度低下を示す音楽記号。",
      derivatives: ["ritardando", "held back"],
      family: ["retarding markings"],
      compounds: ["ritenuto marking", "subito ritenuto"]
    },
    "rubato": {
      origin: "イタリア語 rubare（盗む）の過去分詞 rubato。「盗まれた時間」の意。テンポを自由に揺らして表情を付ける演奏法。ショパンが多用。",
      derivatives: ["tempo rubato", "stolen time"],
      family: ["rob-", "steal"],
      compounds: ["tempo rubato", "rubato playing"]
    },
    "scherzo": {
      origin: "イタリア語 scherzo（冗談・戯れ）。古ドイツ語 skerz（跳躍）に由来。快活でユーモラスな楽曲形式。交響曲のメヌエットを置き換えた。",
      derivatives: ["scherzando", "scherzoso"],
      family: ["jest", "playful forms"],
      compounds: ["piano scherzo", "scherzo movement", "scherzo e trio"]
    },
    "senza": {
      origin: "イタリア語 senza（〜なしに）。ラテン語 sine（〜なしに）から。他の記号と組み合わせて使用される前置詞。senza sordino が代表例。",
      derivatives: ["sine", "without"],
      family: ["sine-", "without"],
      compounds: ["senza sordino", "senza misura", "senza ripetizione"]
    },
    "sforzando": {
      origin: "イタリア語 sforzare（力を込める）から。s-（強調接頭辞）＋forzare（強制する）。特定の音を突然強く演奏することを指示する記号 sf または sfz。",
      derivatives: ["sforzato", "forzando"],
      family: ["force-", "accent markings"],
      compounds: ["sforzando accent", "sforzando chord"]
    },
    "slur": {
      origin: "中期英語・古英語の slur（泥・汚れ）から転じて「なめらかにつながる」の意。複数の音符をレガートで演奏するよう指示する弧線記号。",
      derivatives: ["legato", "tied notes"],
      family: ["articulation markings"],
      compounds: ["slur marking", "slur notation"]
    },
    "solfege": {
      origin: "フランス語 solfège / イタリア語 solfeggio。sol と fa の音名から。ド・レ・ミ・ファ・ソ・ラ・シの音節を用いた音楽基礎訓練法。",
      derivatives: ["solfeggio", "solmization"],
      family: ["music education"],
      compounds: ["solfege system", "fixed do solfege", "movable do solfege"]
    },
    "subito": {
      origin: "イタリア語 subito（突然に・すぐに）。ラテン語 subitus（突然の）から。急激な変化を示す記号。subito piano（突然弱く）が代表例。",
      derivatives: ["sudden", "subitus"],
      family: ["sub-", "sudden"],
      compounds: ["subito piano", "subito forte", "subito pp"]
    },
    "tarantella": {
      origin: "イタリア・タラント（Taranto）市の地名から。タランチュラ（tarantola）の毒を踊りで解毒するという伝説に基づく南イタリアの速い民族舞踊。",
      derivatives: ["tarantism", "tarantula"],
      family: ["folk dances", "italian dances"],
      compounds: ["neapolitan tarantella", "tarantella rhythm"]
    },
    "tenuto": {
      origin: "イタリア語 tenere（保持する）の過去分詞 tenuto。ラテン語 tenere（保つ）から。音符の本来の長さを十分に保って演奏する指示。記号 —。",
      derivatives: ["sustain", "hold"],
      family: ["ten-", "hold"],
      compounds: ["tenuto marking", "tenuto accent"]
    },
    "tremolo": {
      origin: "イタリア語 tremare（震える）から。ラテン語 tremere（震える）。同じ音や音程を素早く繰り返す奏法。弦楽器・声楽・マンドリンで多用。",
      derivatives: ["trembling", "tremor"],
      family: ["trem-", "tremble"],
      compounds: ["string tremolo", "vocal tremolo", "tremolo arm"]
    },
    "trill": {
      origin: "オランダ語 trillen（震える）から。英語化した音楽用語。主音とその上の隣接音を素早く交互に演奏する装飾技法。記号 tr。",
      derivatives: ["trill mark", "trillo"],
      family: ["ornaments", "trilling"],
      compounds: ["trill ornament", "long trill", "trill resolution"]
    },
    "unison": {
      origin: "ラテン語 unisonus（一つの音）。uni-（一つ）＋sonus（音）から。全員が同じ音程・同じ旋律を演奏・歌唱する状態。",
      derivatives: ["unisono", "in unison"],
      family: ["uni-", "son-"],
      compounds: ["unison singing", "in unison", "octave unison"]
    },
    "vivace": {
      origin: "イタリア語 vivace（活気のある・生き生きとした）。ラテン語 vivax（長命な・活発な）から。快活で生気あふれる速い速度記号。",
      derivatives: ["vivacity", "vivid"],
      family: ["viv-", "life"],
      compounds: ["allegro vivace", "vivace movement", "vivace assai"]
    },
`;
const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch P (Music2: accelerando-vivace, 50 words)');
