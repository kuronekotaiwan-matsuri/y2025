"use client";

import { FaqAccordion } from "@/components/FaqAccordion";

export function Faq4() {
  return (
    <section id="kuroneko-faq4" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-5">
            よくある質問とご案内
          </h2>
          <p className="md:text-md">
            黒猫台湾まつりをもっと楽しんでいただくためのご質問とその回答をまとめました。
          </p>
        </div>

        <FaqAccordion />
      </div>
    </section>
  );
}
