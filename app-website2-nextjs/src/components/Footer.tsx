"use client";

import { Footer2 } from "@/components/Footer2";

export function Footer() {
    return (
        <>
            <Footer2
                logo={{
                    src: "/kuroneko_icon.png",
                    alt: "黒猫台湾まつり",
                    url: "/",
                }}
                links={[
                    {
                        title: "トップ",
                        url: "/",
                    },
                    /*
                    {
                        title: "お食事・お飲み物ガイド",
                        url: "/food-drink-guide",
                    },
                    */
                    {
                        title: "出店情報",
                        url: "/shops",
                    },
                    {
                        title: "黒猫台湾まつりについて",
                        url: "/about",
                    },
                    {
                        title: "運営メンバー",
                        url: "/member",
                    },
                    {
                        title: "お問合せ",
                        url: "/contact-us",
                    },
                    {
                        title: "スタンプラリー",
                        url: "/stamp",
                    },
                    {
                        title: "プレスリリース",
                        url: "/press",
                    },
                ]}
                socialLinks={[
                    {
                        title: "Instagram",
                        url: "https://www.instagram.com/kuronekotaiwan_matsuri/",
                        type: "instagram",
                    },
                ]}
                reserved="2025 黒猫台湾まつり実行委員会"
            />
        </>
    );
}
