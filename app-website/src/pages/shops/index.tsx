import { Header } from "../../components/Header";
import { Header49 } from "../../components/Header49";
import { Layout300 } from "../../components/Layout300";
import { Footer } from "../../components/Footer";

import { shopDefs, ShopDef } from "../../data/shops";


export default function Shops() {
    // 出店者情報
    //let shops: ShopDef[] = shopDefs.sort(() => Math.random() - 0.5);  // ランダムに並び替える
    let shops: ShopDef[] = shopDefs;

    return (
        <div>
            <Header />
            <Header49
                heading="出店者情報"
                description="このページでは、黒猫台湾まつりに出店する魅力的な出店者の情報を紹介します。台湾の文化や美味しい料理を楽しむための貴重な機会をお見逃しなく！"
            />
            <Layout300
                heading="多彩な出店者のご紹介"
                shops={shops}
            />
            <Footer />
        </div>
    );
}
