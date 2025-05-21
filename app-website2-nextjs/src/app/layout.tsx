import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
    title:
        "台湾まるごと体験！黒猫台湾まつり2025 公式サイト | 5/31(土) 6/1(日) 開催",
    description:
        "台湾グルメや雑貨、ワークショップが楽しめる「黒猫台湾まつり」は、川崎市二子新地・大山街道で5月31日〜6月1日開催！町歩きと台湾体験を一度に♪",
    robots: "index, follow",
    icons: {
        icon: `${imageBasePath}/favicon.ico`,
    },
    openGraph: {
        title: "黒猫台湾まつり2025｜川崎市二子新地で台湾文化体験！",
        description:
            "台湾グルメや雑貨、ワークショップが楽しめる「黒猫台湾まつり」は、川崎市二子新地・大山街道で5月31日〜6月1日開催！町歩きと台湾体験を一度に♪",
        url: "https://kuronekotaiwan-matsuri.github.io/y2025/",
        type: "website",
        images: [
            "https://kuronekotaiwan-matsuri.github.io/y2025/home/kuroneko_taiwan_top.png",
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "黒猫台湾まつり2025｜川崎市二子新地で台湾文化体験！",
        description:
            "台湾グルメや雑貨、ワークショップが楽しめる「黒猫台湾まつり」は、川崎市二子新地・大山街道で5月31日〜6月1日開催！町歩きと台湾体験を一度に♪",
        images: [
            "https://kuronekotaiwan-matsuri.github.io/y2025/home/kuroneko_taiwan_top.png",
        ],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            {/* Google Analytics */}
            <Script
                id="gtag"
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-PQ0WELTF8R"
            ></Script>
            <Script
                id="gtag-init"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PQ0WELTF8R', { 'anonymize_ip': true });
                    `,
                }}
            />
            {/* Schema.org */}
            <Script
                id="schema-org"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: "黒猫台湾まつり 2025",
                        description: "台湾を愛してやまない有志たちが心を込めて企画した、台湾関連の飲食や物販、トークイベント、音楽ライブを行います。",
                        startDate: "2025-05-31T11:00+09:00",
                        endDate: "2025-06-01T17:00+09:00",
                        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                        eventStatus: "https://schema.org/EventScheduled",
                        location: {
                            "@type": "Place",
                            name: "二子大通り商和会商店街 駄菓子の木村屋",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "川崎市高津区二子2丁目8-8",
                                addressLocality: "神奈川",
                                postalCode: "2130002",
                                addressCountry: "日本",
                            },
                        },
                        image: [
                            "https://kuronekotaiwan-matsuri.github.io/y2025/home/kuroneko_taiwan_top.png",
                            "https://kuronekotaiwan-matsuri.github.io/y2025/home/exchange.jpg",
                            "https://kuronekotaiwan-matsuri.github.io/y2025/home/bustle.jpg",
                        ],
                        performer: [
                        {
                            "@type": "Organization",
                            name: "你你好好",
                            sameAs: "https://www.instagram.com/ninihaohao_podcast",
                        },
                        {
                            "@type": "Organization",
                            name: "HowTo Taiwan",
                            sameAs: "https://www.instagram.com/howto_taiwan",
                        },
                        {
                            "@type": "Person",
                            name: "佐野いくみ",
                            sameAs: "https://www.instagram.com/kikitaiwan_podcast",
                        },
                        {
                            "@type": "Person",
                            name: "門司紀子",
                            sameAs: "https://www.instagram.com/norikomonji",
                        },
                        {
                            "@type": "Person",
                            name: "佐々木千絵",
                            sameAs: "https://www.instagram.com/chie_sasa",
                        },
                        {
                            "@type": "Person",
                            name: "竹内将子",
                            sameAs: "https://www.instagram.com/masako_asianbreeze",
                        },
                        {
                            "@type": "Person",
                            name: "young donuts",
                            sameAs: "https://www.instagram.com/youngdonuts1072",
                        },
                        {
                            "@type": "Person",
                            name: "洸美",
                            sameAs: "https://www.instagram.com/hiromitaiwan",
                        },
                        ],
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "JPY",
                            url: "https://kuronekotaiwan-matsuri.github.io/y2025",
                            availability: "https://schema.org/InStock",
                            validFrom: "2025-04-01T00:00:00+09:00",
                        },
                        organizer: {
                            "@type": "Organization",
                            name: "黒猫豆花",
                            url: "https://kuroneko-douhua.com",
                        },
                    }),
                }}
            />
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
