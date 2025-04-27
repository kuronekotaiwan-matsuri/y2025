import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

export interface Header44Props {
  title: string;
  descriptions: {
    title: string;
    description: string;
    mapUrl?: string;
  }[];
  image: {
    heading: string;
    src: string;
    alt: string;
    link: string;
  }
}

export function Header44(props: Header44Props) {
  return (
    <section id="kuroneko-header44" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full">
          <h2 className="mb-5 text-4xl font-bold">
            {props.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="grid grid-cols-1 gap-y-5 content-center">
              {props.descriptions.map((description, index) => (
                <div key={index} className="grid gap-x-4" style={{ gridTemplateColumns: '110px 1fr' }}>
                  <div className="font-bold text-right">{description.title}</div>
                  <div>
                    {description.description}
                    {description.mapUrl && (
                      <a href={description.mapUrl} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h3>
                <div>
                  <a href={props.image.link} target="_blank" rel="noopener noreferrer">
                    {props.image.heading}
                  </a>
                </div>
              </h3>
              <a href={props.image.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image.src} alt={props.image.alt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
