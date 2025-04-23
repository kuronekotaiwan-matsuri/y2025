
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export interface Footer2Props {
  logo: {
    src: string;
    alt: string;
    url: string;
  };
  links: {
    title: string;
    url: string;
  }[];
  socialLinks: {
    title: string;
    type: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube";
    url: string;
  }[];
  reserved: string;
}


export function Footer2(props: Footer2Props) {
  return (
    <footer id="kuroneko-footer2" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:gap-x-8">
            <a
              href={props.logo.url}
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src={props.logo.src}
                alt={props.logo.alt}
                style={{
                  width: "120px",
                  height: "auto"
                }}
              />
            </a>
            <div className="flex flex-col items-start justify-start">
              <ul>
                {props.links.map((link, index) => (
                  <li
                    key={index}
                    className="py-2 text-sm"
                  >
                    <a href={link.url} className="flex items-center gap-3">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-sm md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">© {props.reserved}. <br />掲載内容の無断使用はご遠慮ください.</p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            {props.socialLinks.map((socialLink, index) => (
              <a href={socialLink.url} key={index}>
                {socialLink.type === "facebook" && (
                  <BiLogoFacebookCircle className="size-6" />
                )}
                {socialLink.type === "instagram" && (
                  <BiLogoInstagram className="size-6" />
                )}
                {socialLink.type === "twitter" && (
                  <FaXTwitter className="size-6 p-0.5" />
                )}
                {socialLink.type === "linkedin" && (
                  <BiLogoLinkedinSquare className="size-6" />
                )}
                {socialLink.type === "youtube" && (
                  <BiLogoYoutube className="size-6" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
