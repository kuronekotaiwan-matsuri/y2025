"use client";
import { Navbar7 } from "@/components/Navbar7";

export function Header() {
    return (
        <>
            <Navbar7
                logo={{
                    src: "/logo.png",
                    alt: "黒猫台湾まつり",
                    url: "/"
                }}
                links={[
                    {
                        title: "トップ",
                        url: "/"
                    },
                    /*
                    {
                        title: "お食事・お飲み物ガイド",
                        url: "/food-drink-guide"
                    },
                    */
                    {
                        title: "出店情報",
                        url: "/shops"
                    },
                    {
                        title: "黒猫台湾まつりについて",
                        url: "/about"
                    },
                    {
                        title: "運営メンバー",
                        url: "/member"
                    },
                    {
                        title: "お問合せ",
                        url: "/contact-us"
                    },
                    {
                        title: "スタンプラリー",
                        url: "/stamp"
                    },
                ]}
                socialLinks={[
                    {
                        title: "Instagram",
                        url: "https://www.instagram.com/kuronekotaiwan_matsuri/",
                        handle: "kuronekotaiwan_matsuri",
                        type: "instagram",
                    },
                ]}
            />
        </>
    );
}
