import { Navbar7 } from "./Navbar7";

export function Header() {
    return (
        <>
            <Navbar7
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
            />
        </>
    );
}
