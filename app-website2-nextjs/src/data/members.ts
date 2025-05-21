/*
運営メンバー
*/

export type Member = {
    name: string;
    position: string;
    image: string;
    description: string;
    instagram?: string;
    facebook?: string;
}

export const members: Member[] = [
    {
        name: "木村 憲司",
        position: "総責任者",
        image: "./member/kimura_neko2.png",
        description: "イベント全体の企画運営を担い、商店街や関係者との架け橋に。地域を台湾で元気に！",
    },
    {
        name: "見吉 勇治",
        position: "主催者、黒猫豆花店主",
        image: "./member/miyoshi_neko2.png",
        description: "台南で修行した本格派。豆花の味もイベントの味も、とことん追求する黒猫豆花店主！",
    },
    {
        name: "パーコ",
        position: "企画、イラストレーター",
        image: "./member/pa-ko_neko2.png",
        description: "台湾好きのイラストレーター。旅の風景や駅弁も描き、台湾ファンからも大人気。地元で開くアトリエ教室も好評！",
    },
    {
        name: "森脇 彬",
        position: "企画、調理",
        image: "./member/moriwaki_neko2.png",
        description: "本業はマッサージ師。イベントでは頼れる存在。丁寧に焼く台湾の蔥抓餅が人気です。",
    },
    {
        name: "やす子",
        position: "運営メンバーとりまとめ",
        image: "./member/yasuko_neko2.png",
        description: "地元の顔として大活躍。台湾好きで旅も多く、イベントではテキパキと頼れる存在です。",
    },
    {
        name: "池田 容一郎",
        position: "企画、IT",
        image: "./member/ikeda_neko2.png",
        description: "ITの力でイベントを支える台湾好き。HP作成から企画・分析まで幅広く活躍中！",
    },
    {
        name: "かなこ",
        position: "広告、SNS、デザイン",
        image: "./member/kanako_neko.png",
        description: "SNS運用やデザインでイベントを支える縁の下の力持ち。丁寧な仕事が光る頼れる存在です。",
    },
    {
        name: "きょん",
        position: "チラシ、デザイン",
        image: "./member/kyon_neko.png",
        description: "食べることが大好き！中国文化にも親しみ、若さと感性でイベントのデザイン面をサポート。",
    },
    {
        name: "しんじ",
        position: "ステージ責任者",
        image: "./member/shinji_neko.png",
        description: "オートハープ奏者で舞台の責任者。体力と明るさでイベントを支え、周囲を幸せな気分にしてくれます。",
    },
];
