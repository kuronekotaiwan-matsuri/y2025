"use client";

//import { Button } from "@relume_io/relume-ui";
//import React from "react";
//import { RxChevronRight } from "react-icons/rx";

import ReactMarkdown from "react-markdown";

export interface Layout240Props {
  title: string;
  descriptions: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
}

export function Layout240(props: Layout240Props) {
  return (
    <section id="kuroneko-layout240" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold">
            {props.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {props.descriptions.map((description, index) => (
            <div key={index} className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8 w-72 h-36 overflow-hidden flex items-center">
                <img
                  src={description.image.src}
                  alt={description.image.alt}
                  className="rounded-image"
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                {description.title}
              </h3>
              <div>
                <ReactMarkdown>{description.description}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
