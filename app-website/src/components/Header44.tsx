
export interface Header44Props {
  title: string;
  descriptions: {
    title: string;
    description: string;
  }[];
}

export function Header44(props: Header44Props) {
  return (
    <section id="kuroneko-header44" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full">
          <h2 className="mb-5 text-4xl font-bold">
            {props.title}
          </h2>
          <div className="grid grid-cols-1 gap-y-5">
            {props.descriptions.map((description, index) => (
              <div key={index} className="grid gap-x-4" style={{ gridTemplateColumns: 'auto 1fr' }}>
                <div className="font-bold text-right w-20">{description.title}</div>
                <div>{description.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
