import { Navbar7 } from "./Navbar7";

export function Header() {
    return (
        <>
            <Navbar7
                logo={{
                    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
                    alt: "Logo image",
                    url: `${import.meta.env.BASE_URL}`
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
                        handle: "kuronekotaiwan_matsuri",
                        type: "instagram",
                    },
                ]}
            />
        </>
    );
}
