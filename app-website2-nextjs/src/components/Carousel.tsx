"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Slide = {
  label: string;
  imgPath: string;
};

interface CarouselProps {
  slides: Slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ renderBullet: (_index, _className) => "" }}
        autoplay={{ delay: 4000 }}
        loop
        style={{ borderRadius: 12, paddingBottom: 40 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={`${imageBasePath}/${slide.imgPath}`}
              alt={slide.label}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
