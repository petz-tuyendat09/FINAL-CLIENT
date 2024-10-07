"use client";

import ServicesItem from "./ServicesItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./ServicesSection.css";

export default function ServicesSection() {
  const images = [
    "/images/services-image-1.png",
    "/images/services-image-2.png",
    "/images/services-image-3.png",
    "/images/services-image-4.png",
    "/images/services-image-5.png" as any,
  ];

  return (
    <section className="my-24 overflow-hidden">
      <h2 className="mb-8 text-center font-serif text-h2">
        Lên kế hoạch thư giãn cho người bạn lông xù
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        loop={true}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        speed={5000}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <SwiperSlide key={index}>
            <ServicesItem
              imageSrc={src}
              servicesText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, maxime."
              servicesTitle="Chăm sóc móng"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
