"use client";

import Image from "next/image";
const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

import { Member } from "@/data/members";

interface Team5Props {
  members: Member[];
}

export function Team5({ members }: Team5Props) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6">
            私たちのチーム
          </h2>
          <p className="md:text-md">
            黒猫台湾まつりを支える運営メンバーをご紹介します。
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {members.map((member, index) => (
            <div className="flex flex-col text-center" key={index}>
              <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
                <Image
                  src={`${imageBasePath}/${member.image}`}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="size-40 min-h-20 min-w-20 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                <h6 className="md:text-md">{member.position}</h6>
              </div>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
