
export const stampCard = {
    id: "stamp_card",
    name: "スタンプカード",
    image: "./stamp/stamp_card.png",
    width: 330,
    height: 330,
};

export const stampDefs: {
    [key: string]: {
        name: string;
        image: string;
        x: number;      // stampCardの左端を0.0、右端を100.0としたときのx座標
        y: number;      // stampCardの上端を0.0、下端を100.0としたときのy座標
        width: number;   // stampCardの幅を100.0としたときの幅
        height: number;  // stampCardの高さを100.0としたときの高さ
    }
} = {
    "formosa": {
        name: "フォルモサ",
        image: "./stamp/formosa.png",
        x: (50/stampCard.width)*100,
        y: (60/stampCard.height)*100,
        width: (70/stampCard.width)*100,
        height: (120/stampCard.height)*100,
    },
    "honbu": {
        name: "本部",
        image: "./stamp/honbu.png",
        x: (131/stampCard.width)*100,
        y: (122/stampCard.height)*100,
        width: (70/stampCard.width)*100,
        height: (60/stampCard.height)*100,
    },
    "chercheuses": {
        name: "シェルシューズ",
        image: "./stamp/chercheuses.png",
        x: (209/stampCard.width)*100,
        y: (130/stampCard.height)*100,
        width: (70/stampCard.width)*100,
        height: (74/stampCard.height)*100,
    },
    "kuroneko": {
        name: "黒猫豆花",
        image: "./stamp/kuroneko.png",
        x: (211/stampCard.width)*100,
        y: (67/stampCard.height)*100,
        width: (62/stampCard.width)*100,
        height: (60/stampCard.height)*100,
    },
    "nico_luce": {
        name: "ニコルーチェ",
        image: "./stamp/nico_luce.png",
        x: (140/stampCard.width)*100,
        y: (54/stampCard.height)*100,
        width: (52/stampCard.width)*100,
        height: (58/stampCard.height)*100,
    },
    "present": {
        name: "プレゼント",
        image: "./stamp/present.png",
        x: (217/stampCard.width)*100,
        y: (216/stampCard.height)*100,
        width: (74/stampCard.width)*100,
        height: (71/stampCard.height)*100,
    },
    "talkies": {
        name: "トーキーズ",
        image: "./stamp/talkies.png",
        x: (69/stampCard.width)*100,
        y: (200/stampCard.height)*100,
        width: (53/stampCard.width)*100,
        height: (78/stampCard.height)*100,
    },
};

