"use client";

import { useEffect } from "react";

import { Header49 } from "@/components/Header49";
import { Faq4 } from "@/components/Faq4";
import { Contact14 } from "../../components/Contact14";

import { faqs } from "../../data/faqs";

export default function ContactUs() {
    //const title="お問合せ | 黒猫台湾まつり2025";

    // FAQの情報から、JSON-LDを作る
    useEffect(() => {
        const faqJsonLd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => {
                return {
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                    },
                }
            }),
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(faqJsonLd);
        document.head.appendChild(script);
    })

    return (
        <>
            <Header49
                heading="ご連絡はこちら"
                description="私たちへのお問合せは、以下の情報をご利用ください。迅速に対応いたしますので、お気軽にご連絡ください。"
            />
            <Faq4 />
            <Contact14 />
        </>
    );
}
