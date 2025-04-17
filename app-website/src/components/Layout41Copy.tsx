import ReactMarkdown from "react-markdown";

type Props = {
  heading: string;
  description: string[];
};

export type Layout41CopyProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout41Copy = (props: Layout41CopyProps) => {
  const { heading, description } = {
    ...Layout41CopyDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold">{heading}</h2>
          </div>
          <div>
            {description.map((description, index) => (
                <div key={index} className="mb-3 md:mb-4 flex gap-2">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                  <div className="text-lg font-bold">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Layout41CopyDefaults: Props = {
  heading: "Medium length section heading goes here",
  description:
    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."],
};
