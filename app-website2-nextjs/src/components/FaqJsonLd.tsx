"use client";

import { useEffect } from "react";
import { faqs } from "@/data/faqs";

export const FaqJsonLd = () => {
    useEffect(() => {
        const faqJsonLd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(faqJsonLd);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script); // クリーンアップ
        };
    }, []);

    return null;
};
