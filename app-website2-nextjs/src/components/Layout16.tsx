"use client";

import ReactMarkdown from "react-markdown";
import { Button } from "@mui/material";
import Image from "next/image";
const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface Layout16Props {
  title: string;
  description: string;
  benefits: string[];
}

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPDT1QiFfjInWKKIrsQyOYWHEMP0gkwjGBAKynjOfSZ_HMIA/viewform?usp=dialog";

export function Layout16(props: Layout16Props) {
  const handleClickButton = () => {
    window.open(
      FORM_URL,
      "_blank"
    );
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-5xl font-bold md:mb-6">
              {props.title}
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              {props.description}
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {props.benefits.map((benefit, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Image
                      src={`${imageBasePath}/neko_face.png`}
                      alt="dot"
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </div>
                  <ReactMarkdown>{benefit}</ReactMarkdown>
                </li>
              ))}
            </ul>
              

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              参加してみたい！と思ったら、こちらからご応募ください。
              <Button
                title="応募" variant="contained"
                onClick={handleClickButton}
              >応募</Button>
            </div>
          </div>
          <div>
            <Image
              src={`${imageBasePath}/member/volunteer.jpg`}
              className="w-full rounded-image object-cover"
              alt="ボランティア募集"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
