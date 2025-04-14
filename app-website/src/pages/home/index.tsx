import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Header1 } from "../../components/Header1";
import { Header44 } from "../../components/Header44";
import { Layout240 } from "../../components/Layout240";
import { Gallery18 } from "../../components/Gallery18";
import { Contact14 } from "../../components/Contact14";

export default function Home() {
    return (
        <div>
            <Header />
            <Header1
                title="黒猫台湾まつりで台湾文化を体験しよう"
                description="黒猫台湾まつりでは、台湾の美味しい料理や飲み物、文化を楽しむことができます。地域の人々との交流を通じて、台湾の魅力を存分に味わいましょう。"
                image={{
                    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                    alt: "Relume placeholder image",
                }}
            />
            <Header44
                title="黒猫台湾まつり詳細情報"
                descriptions={[
                    {title:"開催日", description:"2025年5月31日と6月1日"},
                    {title:"開催場所", description:"川崎市高津区"},
                    {title:"開催時間", description:"10:00-18:00"},
                    {title:"参加費", description:"無料"},
                ]}
            />
            <Layout240
                title="台湾文化を体験し、魅力を感じる特別な機会です。"
                descriptions={[
                    {
                        title: "台湾の豊かな文化と共に、美味しい料理や飲み物",
                        description: "多彩な台湾フードを味わい、文化を感じることができます。",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        }
                    },
                    {
                        title: "参加者同士の交流",
                        description: "参加者同士がつながり合い、親交を深めることができます。",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        }   
                    },
                    {
                        title: "地域の商店街を活性化し、賑わいを創出",
                        description: "地元のビジネスを支援し、地域全体の活性化に貢献します。",
                        image: {
                            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                            alt: "Relume placeholder image",
                        }   
                    }
                ]}
            />
            <Gallery18
                heading="これまでのおまつり風景"
                description=""
                images={[
                    {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 1",
                    },
                    {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 2",
                    },
                    {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 3",
                    },
                    {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 4",
                    },
                    {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 5",
                    },
                    {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 6",
                    },
                ]}
            />
            <Contact14 />
            <Footer />
        </div>
    )
}
