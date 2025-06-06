"use client";

import { Carousel } from "@/components/Carousel";
import { ImageProps, photos } from "@/data/photos";

type Props = {
  heading: string;
  description: string;
};

export type Gallery18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery18 = (props: Gallery18Props) => {
  const { heading, description } = {
    ...Gallery18Defaults,
    ...props,
  };

  //// photosをランダムにシャッフル
  //const shuffledPhotos = photos.sort(() => Math.random() - 0.5);
  //const images: ImageProps[] = shuffledPhotos;
  const images: ImageProps[] = photos;  // Hydrationエラーが発生するため、シャッフルをやめた

  return (
    <section id="kuroneko-gallery18">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6">
              {heading}
            </h2>
            {(description.length > 0) && (
              <p className="md:text-md">{description}</p>
            )}
          </div>
          <Carousel
            slides={
              images.map((image) => ({
                label: image.alt || "",
                imgPath: image.src,
              }))
            }
          />
        </div>
      </div>
    </section>
  );
};

export const Gallery18Defaults: Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
