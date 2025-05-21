import { Metadata } from "next";

import { Header49 } from "@/components/Header49";
import { Team5 } from "@/components/Team5";
import { Layout16 } from "@/components/Layout16";

import { members } from "@/data/members";

export const metadata: Metadata = {
    title:
        "運営メンバー情報 | 黒猫台湾まつり2025",
};

export default function Member() {
    return (
        <>
            <Header49
                heading="運営メンバー紹介"
                description="黒猫台湾まつりを支える運営メンバーをご紹介します。台湾文化への情熱と、地域を盛り上げたいという思いで集まった個性豊かなメンバーたちです。"
            />
            <Team5 members={members} />
            <Layout16
                title="ボランティア参加のメリットと募集"
                description="台湾の魅力がぎゅっと詰まった「黒猫台湾まつり」を一緒に盛り上げてくれる仲間を募集します。"
                benefits={[
                    "**台湾文化に触れ**、本場のグルメや雑貨、音楽、ワークショップを間近で体験！",
                    "**地域の方々や来場者と交流しながら、町おこし** に貢献できます。",
                    "同じ想いを持つ仲間と出会え、**新しい友達やつながり** もきっとできるはず。"
                ]}
            />
        </>
    );
}
