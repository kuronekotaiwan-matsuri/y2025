/*
スタンプカード
*/
import { Metadata } from "next";

import StampPageClient from "./pageClient";


export const metadata: Metadata = {
    title:
        "スタンプラリーで楽しもう！ | 黒猫台湾まつり2025",
};

export default function Stamp() {
    return (
        <StampPageClient />
    );
}
