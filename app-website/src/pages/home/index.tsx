import { PageLayout } from "../../components/PageLayout";
import { Header1 } from "../../components/Header1";
import { Header44 } from "../../components/Header44";
import { Layout240 } from "../../components/Layout240";
import { Layout41 } from "../../components/Layout41";
import { Gallery18 } from "../../components/Gallery18";
import { Contact14 } from "../../components/Contact14";

export default function Home() {
    return (
        <PageLayout title="台湾まるごと体験！黒猫台湾まつり2025 公式サイト | 5/31(土) 6/1(日) 開催">
            <Header1
                title="黒猫台湾まつりで台湾文化を体験しよう"
                description="黒猫台湾まつりでは、台湾の美味しい料理や飲み物、文化を楽しむことができます。地域の人々との交流を通じて、台湾の魅力を存分に味わいましょう。"
                image={{
                    src: "./home/kuroneko_taiwan_top_ogp.jpeg",
                    alt: "黒猫台湾まつり トップ画像",
                }}
            />
            <Header44
                title="黒猫台湾まつり詳細情報"
                descriptions={[
                    {title:"開催日", description:"2025年5月31日と6月1日"},
                    {title:"開催場所", description:"川崎市高津区（大山街道沿いの商店や中庭）"},
                    {
                        title:"メイン会場・総合案内",
                        description:"〒213-0002 神奈川県川崎市高津区二子２丁目８−８ ウッディモアル　駄菓子の木村屋",
                        mapUrl: "https://maps.app.goo.gl/En2HiiN8Xxkav8616",
                    },
                    {title:"開催時間", description:"10:00-18:00"},
                    {title:"参加費", description:"無料"},
                ]}
            />
            <Layout240
                title="台湾文化を体験し、魅力を感じる特別な機会"
                descriptions={[
                    {
                        title: "台湾の豊かな文化と共に、美味しい料理や飲み物",
                        description: "**多彩な台湾フードを味わいながら、現地さながらの雰囲気を体験できます。** 豆花や台湾茶に加え、冷凍で本格的な魯肉をお持ち帰りできるお店も登場。ご自宅でも台湾の味を楽しめます。お子様から大人まで楽しめるメニューをご用意しています。",
                        image: {
                            src: "./home/mensen.jpg",
                            alt: "台湾の食文化の代表の麺線",
                        }
                    },
                    {
                        title: "参加者同士の交流",
                        description: "**参加者同士がつながり合い、台湾好き同士での親交を深めることができます。** 会話が生まれやすいワークショップやトークイベントもあり、偶然の出会いが新しい旅のヒントになるかもしれません。リピーターさんも初参加の方も、台湾をまだ知らない方も、みんなウェルカムな雰囲気です。",
                        image: {
                            src: "./home/exchange.jpg",
                            alt: "参加者同士が交流している",
                        }   
                    },
                    {
                        title: "地域の商店街を活性化し、賑わいを創出",
                        description: "**地元のビジネスを支援し、地域全体の活性化に貢献します。** イベントの開催により、多くの来場者が大山街道を訪れ、普段の商店街にも新たな注目が集まります。台湾文化との融合による「にぎわい」が、新しいまちの魅力づくりにもつながります。",
                        image: {
                            src: "./home/bustle.jpg",
                            alt: "商店に人がにぎわっている",
                        }   
                    }
                ]}
            />
            <Layout41
                heading="イベントへの“想い”"
                description={
                    [
                        "**黒猫台湾まつり2025** は、台湾を愛してやまない有志たちが心を込めて企画したイベントです。" +
                        "​台湾に住んでいた経験がある人、台湾にルーツを持つ人、何度も台湾を訪れてその魅力に惹かれた人たちが集まり、**台湾の文化や美味しい食べ物、温かい人々の魅力を日本の皆さんに伝えたい**という想いから生まれました。​",
                        "商業的な大規模イベントではなく、**台湾への深い愛情と敬意を持つ私たち**が、自分たちの手で作り上げる、小さいながらも愛にあふれた手作りの祭りです。" +
                        "​台湾を知っている人も、初めて触れる人も、ぜひこの機会に**台湾の魅力を体感**してください。",
                    ]
                }
            />
            <Gallery18
                heading="過去の開催風景"
                description=""
            />
            <Contact14 />
        </PageLayout>
    )
}
