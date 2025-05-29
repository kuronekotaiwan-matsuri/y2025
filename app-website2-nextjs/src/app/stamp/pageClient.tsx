"use client";

import { useEffect } from "react";

import { Header49 } from "@/components/Header49";
import { StampCard } from "@/components/StampCard";
import { Layout41Copy } from "@/components/Layout41Copy";
import { MyMap } from "@/components/MyMap";

declare global {
    interface Window {
        // `gtag`の正確な型定義が不要なため、一時的にanyを使用する
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag: (...args: any[]) => void;
    }
}

export default function StampPageClient() {
    useEffect(() => {
        const url = new URL(window.location.href);
        const stampId = url.searchParams.get("stampId");
        if (stampId) {
            // GA4のイベント送付
            if (typeof window.gtag === "function") {
                window.gtag("event", "collect_stamp", {
                    stamp_id: stampId,
                });
            }
        }
    });
    
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
                        "二子二丁目公園",
                        "formosa",
                        "菓子屋chercheuses",
                        "黒猫豆花",
                        "zoojeebaa",
                        "トーキーズ",
                        "最後に、駄菓子の木村屋（運営本部）へお越しください！",
                    ]
                }
            />
            <MyMap />
        </>
    );
}
