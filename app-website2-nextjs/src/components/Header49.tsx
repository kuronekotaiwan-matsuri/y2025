"use client";

export interface Header49Props {
  heading: string;
  description: string;
}

export function Header49(props: Header49Props) {
  return (
    <section id="kuroneko-header49" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-5xl font-bold">
              {props.heading}
            </h1>
          </div>
          <div>
            <p className="md:text-md">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
