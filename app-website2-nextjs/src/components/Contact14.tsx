"use client";

import { BiEnvelope, BiMap, BiLogoInstagram } from "react-icons/bi";
import Link from "next/link";

import { MyMap } from "./MyMap";

export function Contact14() {
  return (
    <section id="kuroneko-contact14" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6">
            お問い合わせ
          </h2>
          <p className="md:text-md">
            イベントに関する詳細はお気軽にご連絡ください。
          </p>
        </div>
        <div className="
          grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12
          md:grid-cols-[minmax(280px,0.5fr)_1fr]
          md:gap-x-2 md:gap-y-16 justify-between"
        >
          <div className="
            grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10
          ">
            <div>
              <div className="mb-3 md:mb-4">
                <BiLogoInstagram className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Instagram
              </h3>
              <p className="mb-2">最新情報をチェック</p>
              <Link className="underline" href="https://www.instagram.com/kuronekotaiwan_matsuri/">
                @kuronekotaiwan_matsuri
              </Link>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                メール
              </h3>
              <p className="mb-2">ご質問があれば</p>
              kuronekotaiwan.matsuri@gmail.com
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                総合案内
              </h3>
              <p className="mb-2">
                〒213-0002 神奈川県川崎市高津区二子２丁目８−８ ウッディモアル　駄菓子の木村屋
              </p>
            </div>
          </div>
          <MyMap />
        </div>
      </div>
    </section>
  );
}
