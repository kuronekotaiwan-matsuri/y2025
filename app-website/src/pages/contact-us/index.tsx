import { Header } from "../../components/Header";
import { Header49 } from "../../components/Header49";
import { Faq4 } from "../../components/Faq4";
import { Contact14 } from "../../components/Contact14";
import { Footer } from "../../components/Footer";

export default function ContactUs() {
    return (
        <div>
            <Header />
            <Header49
                heading="ご連絡はこちら "
                description="私たちへのお問合せは、以下の情報をご利用ください。迅速に対応いたしますので、お気軽にご連絡ください。"
            />
            <Faq4 />
            <Contact14 />
            <Footer />
        </div>
    );
}
