import ReactMarkdown from "react-markdown";

type Props = {
  heading: string;
  description: string[];
};

export type Layout41Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout41 = (props: Layout41Props) => {
  const { heading, description } = {
    ...Layout41Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold md:text-6xl">{heading}</h2>
          </div>
          <div>
            {description.map((description, index) => (
                <p key={index} className="mb-3 md:mb-4">
                    <ReactMarkdown>{description}</ReactMarkdown>
                </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout41Defaults: Props = {
  heading: "Medium length section heading goes here",
  description:
    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."],
};
