
interface Layout237Props {
  heading: string;
  description: string;
  listItems: {
    title: string;
    description: string;
  }[];
}

export function Layout237(props: Layout237Props) {
  return (
    <section id="kuroneko-layout237" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-left">
          <div className="rb-12 mb-12 w-full max-w-lg text-left md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6">
              {props.heading}
            </h2>
            <div className="md:text-md">
              {props.description.split("\\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {props.listItems.map((item, index) => (
              <div className="flex w-full flex-col items-center text-center" key={index}>
                <div className="rb-5 mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
