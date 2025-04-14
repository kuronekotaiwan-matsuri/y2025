import { Navbar7 } from "./Navbar7";
//import { Navbar7_0 } from "./Navbar7_0";
//import { Navbar7_1 } from "./Navbar7_1";

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
                        url: `${import.meta.env.BASE_URL}shops`
                    },
                    {
                        title: "黒猫台湾まつりについて",
                        url: `${import.meta.env.BASE_URL}about`
                    },
                    {
                        title: "お問合せ",
                        url: `${import.meta.env.BASE_URL}contact-us`
                    },
                ]}
            />
            {/*
            <Navbar7_0
            />
            */}
            {/*
            <Navbar7_1 />
            */}
        </>
    );
}
