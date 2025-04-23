import { Footer2 } from "./Footer2";

export function Footer() {
    return (
        <>
            <Footer2
                logo={{
                    src: "./kuroneko_icon.png",
                    alt: "黒猫台湾まつり",
                    url: `${import.meta.env.BASE_URL}`,
                }}
                links={[
                    {
                        title: "トップ",
                        url: `${import.meta.env.BASE_URL}`
                    },
                    /*
                    {
                        title: "お食事・お飲み物ガイド",
                        url: `${import.meta.env.BASE_URL}food-drink-guide`
                    },
                    */
                    {
                        title: "出店情報",
                        url: `${import.meta.env.BASE_URL}#/shops`
                    },
                    {
                        title: "黒猫台湾まつりについて",
                        url: `${import.meta.env.BASE_URL}#/about`
                    },
                    {
                        title: "運営メンバー",
                        url: `${import.meta.env.BASE_URL}#/member`
                    },
                    {
                        title: "お問合せ",
                        url: `${import.meta.env.BASE_URL}#/contact-us`
                    },
                    {
                        title: "スタンプラリー",
                        url: `${import.meta.env.BASE_URL}#/stamp`
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
