/*
スタンプカード
*/
import { Metadata } from "next";

import { Header49 } from "@/components/Header49";
import { StampCard } from "@/components/StampCard";
import { Layout41Copy } from "@/components/Layout41Copy";

export const metadata: Metadata = {
    title:
        "スタンプラリーで楽しもう！ | 黒猫台湾まつり2025",
};

export default function Stamp() {
    return (
        <>
            <Header49
                heading="スタンプラリーで楽しさ倍増！"
                description="黒猫台湾まつりでは、参加するたびにワクワクがたまるスタンプカードをご用意しています。出店を巡ってスタンプを集め、素敵な特典をゲットしましょう！"
            />
            <StampCard />
            <Layout41Copy
                heading="スタンプがあるところ"
                description={
                    [
                        "駄菓子の木村屋（運営本部）",
                        "formosa",
                        "菓子屋chercheuses",
                        "黒猫豆花",
                        "ニコルーチェ",
                        "トーキーズ",
                        "最後に、駄菓子の木村屋（運営本部）へお越しください！",
                    ]
                }
            />
        </>
    );
}
