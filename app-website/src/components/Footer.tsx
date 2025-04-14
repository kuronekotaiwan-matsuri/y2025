import { Footer2 } from "./Footer2";

export function Footer() {
    return (
        <>
            <Footer2
                logo={{
                    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
                    alt: "Logo image"
                }}
                links={[
                    {
                        title: "お食事・お飲み物ガイド",
                        url: "/food-drink-guide"
                    },
                    {
                        title: "出店情報",
                        url: "/shops"
                    },
                    {
                        title: "黒猫台湾まつりについて",
                        url: "/about"
                    },
                    {
                        title: "お問合せ",
                        url: "/contact-us"
                    },  
                ]}
                socialLinks={[
                    {
                        title: "Instagram",
                        url: "https://www.instagram.com/kuronekotaiwan_matsuri/",
                        type: "instagram"
                    },
                ]}
                reserved="2025 黒猫台湾まつり実行委員会"
            />
        </>
    );
}
