
export interface Header1Props {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  }
}


export function Header1(props: Header1Props) {
  return (
    <section id="kuroneko-header1" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold">
              {props.title}
            </h1>
            <p className="md:text-md">
              {props.description}
            </p>
          </div>
          <div>
            <img
              src={props.image.src}
              className="w-full rounded-image object-cover"
              alt={props.image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
