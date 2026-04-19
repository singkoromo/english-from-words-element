/**
 * gen_origins_new_C.js — Music terms from data-mixed-52 (22 words)
 */
const fs = require('fs');
const content = fs.readFileSync('js/origins.js', 'utf8');
const insertPoint = content.lastIndexOf('  };');

const newEntries = `
    "atonal": {
      origin: "ギリシャ語の否定接頭辞 a-（無い）とラテン語 tonus（音・調子）が組み合わさり、20世紀初頭に音楽理論で使われ始めた語。シェーンベルクらが伝統的な調性体系を離れた作曲技法を指すために用いた。",
      derivatives: [
        { word: "atonality", desc: "無調性（名詞形）" },
        { word: "atonalism", desc: "無調主義" }
      ],
      family: [
        { word: "tonal", desc: "調性の" },
        { word: "tonality", desc: "調性" },
        { word: "tone", desc: "音・調子" }
      ],
      compounds: [
        { phrase: "atonal music", desc: "無調音楽" },
        { phrase: "atonal composition", desc: "無調作曲" }
      ]
    },
    "baritone": {
      origin: "ギリシャ語 barytonos（重い音）から。barys（重い）と tonos（音・緊張）が結合した語。イタリア語 baritono を経て英語に入った。テノールとバスの中間の声域を指す。",
      derivatives: [
        { word: "baritone saxophone", desc: "バリトンサックス" },
        { word: "baritone clef", desc: "バリトン記号" }
      ],
      family: [
        { word: "baryon", desc: "重粒子（物理学）" },
        { word: "tone", desc: "音・調子" },
        { word: "tenor", desc: "テノール（高い男声）" }
      ],
      compounds: [
        { phrase: "baritone voice", desc: "バリトンの声" },
        { phrase: "baritone horn", desc: "バリトンホルン" }
      ]
    },
    "cadenza": {
      origin: "イタリア語 cadenza（終止形・落下）から。ラテン語 cadere（落ちる）に由来し、楽曲が調和の中心音へ「落ち着く」ことを意味した。協奏曲中の即興的独奏部分を指す。",
      derivatives: [
        { word: "cadence", desc: "リズム・韻律（英語形）" },
        { word: "cadential", desc: "終止形の" }
      ],
      family: [
        { word: "cadence", desc: "終止音型" },
        { word: "decadent", desc: "退廃的な（de+cadere）" },
        { word: "cascade", desc: "滝（cadereの変形）" }
      ],
      compounds: [
        { phrase: "written-out cadenza", desc: "書き出されたカデンツァ" },
        { phrase: "improvised cadenza", desc: "即興カデンツァ" }
      ]
    },
    "cantata": {
      origin: "イタリア語 cantata（歌われたもの）から。cantare（歌う）の過去分詞。17世紀のイタリアで発展した声楽曲の形式で、器楽曲の「ソナタ」（sonata＝演奏されたもの）と対を成す語。",
      derivatives: [
        { word: "cantabile", desc: "歌うように（音楽指示語）" },
        { word: "canticle", desc: "聖歌・賛美歌" }
      ],
      family: [
        { word: "chant", desc: "聖歌・詠唱" },
        { word: "incantation", desc: "呪文・魔法の言葉" },
        { word: "recant", desc: "撤回する" }
      ],
      compounds: [
        { phrase: "secular cantata", desc: "世俗カンタータ" },
        { phrase: "church cantata", desc: "教会カンタータ" }
      ]
    },
    "dissonant": {
      origin: "ラテン語 dissonans（不調和な音）から。dis-（離れて・反して）と sonare（鳴る）が結合。音楽では協和音（consonant）と対比される不協和音を指し、比喩的に「不調和な・矛盾した」意味でも使われる。",
      derivatives: [
        { word: "dissonance", desc: "不協和音・不調和（名詞形）" },
        { word: "dissonantly", desc: "不協和に（副詞）" }
      ],
      family: [
        { word: "consonant", desc: "子音；協和音の" },
        { word: "resonant", desc: "共鳴する・響く" },
        { word: "sonata", desc: "ソナタ（演奏されるもの）" }
      ],
      compounds: [
        { phrase: "dissonant chord", desc: "不協和和音" },
        { phrase: "cognitive dissonance", desc: "認知的不協和（心理学）" }
      ]
    },
    "falsetto": {
      origin: "イタリア語 falsetto（少し偽の声）から。falso（偽・誤り）の指小形。男性が通常の声域を超えて出す高音部の裏声。ラテン語 falsus（偽の）に由来。",
      derivatives: [
        { word: "falsettist", desc: "ファルセットを専門に使う歌手" }
      ],
      family: [
        { word: "false", desc: "偽の" },
        { word: "falsify", desc: "偽造する" },
        { word: "fallacy", desc: "誤謬" }
      ],
      compounds: [
        { phrase: "falsetto register", desc: "ファルセット音域" },
        { phrase: "falsetto voice", desc: "裏声" }
      ]
    },
    "harmonic": {
      origin: "ギリシャ語 harmonikos（調和した）から。harmonia（調和・連結）に由来し、harmozein（合わせる）が語根。音楽では基本音に対する倍音を指し、物理・数学でも「調和の」意味で広く使われる。",
      derivatives: [
        { word: "harmonics", desc: "倍音（複数形）" },
        { word: "harmonically", desc: "調和的に" },
        { word: "harmonize", desc: "調和させる" }
      ],
      family: [
        { word: "harmony", desc: "調和・和声" },
        { word: "harmonica", desc: "ハーモニカ" },
        { word: "philharmonic", desc: "愛好者の・フィルハーモニック" }
      ],
      compounds: [
        { phrase: "harmonic series", desc: "倍音列" },
        { phrase: "harmonic minor", desc: "和声短音階" }
      ]
    },
    "interlude": {
      origin: "中世ラテン語 interludium（間の演技）から。inter-（間に）と ludus（遊び・演技）が結合。当初は劇の幕間に演じられた短い出し物を指し、後に音楽の間奏曲全般を指すようになった。",
      derivatives: [
        { word: "interludes", desc: "間奏曲（複数）" }
      ],
      family: [
        { word: "prelude", desc: "前奏曲（pre-＋lude）" },
        { word: "postlude", desc: "後奏曲（post-＋lude）" },
        { word: "elude", desc: "巧みに避ける（e-＋lud）" }
      ],
      compounds: [
        { phrase: "musical interlude", desc: "音楽的間奏" },
        { phrase: "organ interlude", desc: "オルガン間奏" }
      ]
    },
    "lullaby": {
      origin: "16世紀英語の lulla（子守唄のような音）と by または bye（さようなら・寝なさい）が結合した語。lulla は「ルッラ」という子どもをあやす声を模した擬音語。ゲルマン語系の子守唄文化に由来。",
      derivatives: [
        { word: "lullabies", desc: "子守唄（複数形）" }
      ],
      family: [
        { word: "lull", desc: "静める・なだめる" },
        { word: "cradle song", desc: "子守唄の別称" }
      ],
      compounds: [
        { phrase: "sing a lullaby", desc: "子守唄を歌う" },
        { phrase: "Brahms' Lullaby", desc: "ブラームスの子守唄" }
      ]
    },
    "madrigal": {
      origin: "イタリア語 madrigale（田舎風の・素朴な歌）から。語源は諸説あり、ラテン語 matricale（母胎の）または mandra（羊の群れ）が提唱されている。14〜17世紀に流行した世俗的多声合唱曲。",
      derivatives: [
        { word: "madrigalist", desc: "マドリガル作曲家" },
        { word: "madrigalian", desc: "マドリガル風の" }
      ],
      family: [
        { word: "matrix", desc: "母体・基盤（matricale と同語源説）" }
      ],
      compounds: [
        { phrase: "English madrigal", desc: "イギリスのマドリガル" },
        { phrase: "madrigal choir", desc: "マドリガル合唱団" }
      ]
    },
    "mezzo": {
      origin: "イタリア語 mezzo（中間の・半分の）から。ラテン語 medius（中央の）に由来し、英語 middle や medium と同語根。音楽では「中くらいの」を意味し、mezzo-soprano（中音のソプラノ）などの複合語を形成する。",
      derivatives: [
        { word: "mezzo-soprano", desc: "メゾソプラノ" },
        { word: "mezzo forte", desc: "メゾフォルテ（やや強く）" },
        { word: "mezzo piano", desc: "メゾピアノ（やや弱く）" }
      ],
      family: [
        { word: "median", desc: "中央値" },
        { word: "medium", desc: "中間・媒体" },
        { word: "intermediate", desc: "中間の" }
      ],
      compounds: [
        { phrase: "mezzo voice", desc: "中音域の声" },
        { phrase: "mezzo staccato", desc: "メゾスタッカート" }
      ]
    },
    "nocturne": {
      origin: "フランス語 nocturne（夜の）から。ラテン語 nocturnus（夜に属する）、nox（夜）に由来。19世紀に夜の雰囲気を描写した抒情的なピアノ曲の様式を指す語として定着した。フィールドとショパンが有名。",
      derivatives: [
        { word: "nocturnal", desc: "夜行性の・夜の" },
        { word: "nocturnes", desc: "夜想曲（複数形）" }
      ],
      family: [
        { word: "equinox", desc: "昼夜平分時（aequus+nox）" },
        { word: "nocturnal", desc: "夜行性の" }
      ],
      compounds: [
        { phrase: "Chopin's nocturnes", desc: "ショパンの夜想曲" },
        { phrase: "nocturne in E-flat", desc: "変ホ長調の夜想曲" }
      ]
    },
    "operatic": {
      origin: "イタリア語 opera（作品・歌劇）から派生した形容詞。opera 自体はラテン語 opus（作品）の複数形。-tic は「〜に関する」を表す形容詞接尾辞。「オペラのような・大げさな」の意味も生じた。",
      derivatives: [
        { word: "operatically", desc: "オペラ的に" }
      ],
      family: [
        { word: "opera", desc: "オペラ・歌劇" },
        { word: "opus", desc: "作品番号" },
        { word: "operate", desc: "作動する（同語根）" }
      ],
      compounds: [
        { phrase: "operatic tenor", desc: "オペラのテノール歌手" },
        { phrase: "operatic aria", desc: "オペラのアリア" }
      ]
    },
    "orchestral": {
      origin: "ギリシャ語 orchestra（舞踊の場・半円形の劇場スペース）から派生。orchestra は orkhesthai（踊る）に由来。-al は「〜に関する」の形容詞接尾辞。管弦楽団に関連する意。",
      derivatives: [
        { word: "orchestrally", desc: "管弦楽的に" }
      ],
      family: [
        { word: "orchestra", desc: "管弦楽団" },
        { word: "orchestrate", desc: "編曲する・組織する" },
        { word: "orchestration", desc: "管弦楽法・編曲" }
      ],
      compounds: [
        { phrase: "orchestral piece", desc: "管弦楽曲" },
        { phrase: "orchestral pit", desc: "オーケストラピット" }
      ]
    },
    "percussionist": {
      origin: "ラテン語 percussio（打撃）から。per-（通して）と quatere（打つ）が結合し、打つことで音を出す楽器奏者を指す。percussion → percussionist と派生した。",
      derivatives: [
        { word: "percussion", desc: "打楽器・打撃" },
        { word: "percussive", desc: "打撃的な" }
      ],
      family: [
        { word: "concussion", desc: "脳震盪（con+quatere）" },
        { word: "repercussion", desc: "反響・余波" },
        { word: "discuss", desc: "議論する（dis+quatere）" }
      ],
      compounds: [
        { phrase: "principal percussionist", desc: "首席打楽器奏者" },
        { phrase: "percussionist section", desc: "打楽器セクション" }
      ]
    },
    "repertoire": {
      origin: "フランス語 répertoire（目録・一覧）から。ラテン語 repertorium（発見されたものの目録）、reperire（再び見つける）に由来。re-（再び）とparire（準備する）が語根。演奏家が準備している曲目の一覧。",
      derivatives: [
        { word: "repertory", desc: "レパートリー（劇団の演目）" }
      ],
      family: [
        { word: "repertory theatre", desc: "レパートリー劇場" },
        { word: "repository", desc: "保管庫・リポジトリ" }
      ],
      compounds: [
        { phrase: "expand one's repertoire", desc: "レパートリーを広げる" },
        { phrase: "concert repertoire", desc: "コンサートの演目" }
      ]
    },
    "rhapsody": {
      origin: "ギリシャ語 rhapsodia（詩の朗唱）から。rhaptein（縫い合わせる）とode（歌）が結合し、「縫い合わせた歌」の意。ホメロスの叙事詩を朗唱する行為が原義。後に自由な形式の音楽作品を指すようになった。",
      derivatives: [
        { word: "rhapsodic", desc: "熱狂的な・放縦な" },
        { word: "rhapsodize", desc: "熱狂的に語る・即興する" }
      ],
      family: [
        { word: "ode", desc: "頌歌・オード" },
        { word: "rapsodie", desc: "フランス語形" }
      ],
      compounds: [
        { phrase: "Bohemian Rhapsody", desc: "ボヘミアン・ラプソディ（クイーンの曲）" },
        { phrase: "Hungarian Rhapsody", desc: "ハンガリー狂詩曲（リストの曲）" }
      ]
    },
    "serenade": {
      origin: "イタリア語 serenata（夜の野外演奏）から。sereno（穏やかな夜空・晴れた）に由来し、ラテン語 serenus（晴れた・穏やかな）が語根。恋人の窓の下で行われた夜の演奏が原義。",
      derivatives: [
        { word: "serenata", desc: "セレナータ（器楽曲形式）" },
        { word: "serenader", desc: "セレナーデを奏でる人" }
      ],
      family: [
        { word: "serene", desc: "穏やかな・静かな" },
        { word: "serenity", desc: "静謐・穏やかさ" }
      ],
      compounds: [
        { phrase: "Eine Kleine Nachtmusik", desc: "モーツァルトの小夜曲（セレナーデ）" },
        { phrase: "serenade a lover", desc: "恋人にセレナーデを贈る" }
      ]
    },
    "soprano": {
      origin: "イタリア語 sopra（上に・上方に）から。ラテン語 supra（上に）に由来。女声の最高音域、または少年の変声前の高い声を指す。同語根の英語 superior（上位の）、super- とつながる。",
      derivatives: [
        { word: "soprano saxophone", desc: "ソプラノサックス" },
        { word: "coloratura soprano", desc: "コロラトゥーラソプラノ" }
      ],
      family: [
        { word: "mezzo-soprano", desc: "メゾソプラノ" },
        { word: "super", desc: "上・超（ラテン語 supra と同根）" },
        { word: "superior", desc: "上位の" }
      ],
      compounds: [
        { phrase: "dramatic soprano", desc: "ドラマティックソプラノ" },
        { phrase: "lyric soprano", desc: "リリックソプラノ" }
      ]
    },
    "tonality": {
      origin: "フランス語 tonalité から。ラテン語 tonus（音・緊張）、ギリシャ語 tonos（緊張・音）に由来。tonal（調性の）に -ity（名詞接尾辞）が付いた形。特定の音を中心とした音楽の体系を指す。",
      derivatives: [
        { word: "tonal", desc: "調性の（形容詞）" },
        { word: "tonally", desc: "調性的に" }
      ],
      family: [
        { word: "atonal", desc: "無調の" },
        { word: "tone", desc: "音・色調" },
        { word: "semitone", desc: "半音" }
      ],
      compounds: [
        { phrase: "functional tonality", desc: "機能的調性" },
        { phrase: "tonal center", desc: "調的中心音" }
      ]
    },
    "troubadour": {
      origin: "古プロヴァンス語 trobador（詩を見つける人・詩作する人）から。trobar（見つける・作る）に由来し、ラテン語 tropare（比喩を用いる）が語根とも。11〜13世紀の南フランスで活躍した吟遊詩人。",
      derivatives: [
        { word: "trouvère", desc: "トルヴェール（北フランスの吟遊詩人）" }
      ],
      family: [
        { word: "find", desc: "見つける（語根 trobar と意味的対応）" },
        { word: "trouver", desc: "見つける（フランス語）" }
      ],
      compounds: [
        { phrase: "troubadour tradition", desc: "吟遊詩人の伝統" },
        { phrase: "troubadour poetry", desc: "吟遊詩" }
      ]
    },
    "virtuoso": {
      origin: "イタリア語 virtuoso（美徳ある者・卓越した者）から。virtù（卓越した技量・美徳）に由来し、ラテン語 virtus（力・勇気・美徳）が語根。vir（男性・人）と関連し「人としての卓越性」を意味した。",
      derivatives: [
        { word: "virtuosity", desc: "卓越した演奏技術" },
        { word: "virtuosic", desc: "超絶技巧の" }
      ],
      family: [
        { word: "virtue", desc: "美徳・長所" },
        { word: "virtual", desc: "仮想の（virtus から）" },
        { word: "virile", desc: "男性的な・力強い" }
      ],
      compounds: [
        { phrase: "piano virtuoso", desc: "ピアノの名人" },
        { phrase: "virtuoso performance", desc: "超絶技巧の演奏" }
      ]
    },
`;

const newContent = content.slice(0, insertPoint) + newEntries + content.slice(insertPoint);
fs.writeFileSync('js/origins.js', newContent);
console.log('Inserted batch C (music: atonal - virtuoso)');
