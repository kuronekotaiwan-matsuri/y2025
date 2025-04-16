
import ReactMarkdown from "react-markdown";

interface Layout18Props {
  heading: string;
  listItems: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export function Layout18(props: Layout18Props) {
  return (
    <section id="kuroneko-layout18" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <h2 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6">
          {props.heading}
        </h2>

        <div
          className="flex flex-col gap-10"
        >
          {props.listItems.map((item, index) => (
            <div
              key={index}
              className={"flex flex-col items-center gap-4 "+ (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[200px] object-cover md:w-[300px] md:h-auto md:aspect-square"
              />
              <div
                className="flex-col"
              >
                <div
                  className="mb-5 flex self-start gap-2"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                  <div
                    className="text-xl font-bold"
                  >
                    {item.title}
                  </div>
                </div>
                <div
                >
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
