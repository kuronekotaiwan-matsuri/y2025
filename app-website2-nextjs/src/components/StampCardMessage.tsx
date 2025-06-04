import Link from "next/link";

export function StampCardMessage() {
    return (
        <section id="kuroneko-head-message" className="px-[10%] my-8">
            <div className="border-6 border-red-400 p-4">
            <h3
                className="text-2xl font-bold py-4"
            >黒猫台湾まつりは終了しましたが...</h3>
                <div>
                    スタンプラリーで使用したQRコード台紙（PDF）を公開しています。<br />
                    よかったらご自宅やおでかけ先で、お子さまと一緒に遊んでみてくださいね。<br />
                    <span className="font-bold">▶QRコード台紙はこちら：</span>
                    <Link href="/stamp/黒猫台湾まつりスタンプカード用QRコード.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="text-blue-500">PDFを開く</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

