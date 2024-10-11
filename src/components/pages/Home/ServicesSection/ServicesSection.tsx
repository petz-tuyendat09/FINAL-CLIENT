"use client";
import ServicesImageSection from "@@/public/images/services-image-setion.png";
import ServicesItem from "./ServicesItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./ServicesSection.css";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";

export default function ServicesSection() {
  const images = [
    "/images/services-image-1.png",
    "/images/services-image-2.png",
    "/images/services-image-3.png",
    "/images/services-image-4.png",
    "/images/services-image-5.png" as any,
  ];

  return (
    <section className="mt-[150px] overflow-hidden">
      <div className="flex">
        <div className="ml-[60px]">
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="text-display font-bold text-primary">PETZ</div>
              <div>
                <ResponsiveImage
                  additionClass="rounded-button"
                  imageSrc={ServicesImageSection}
                  altImage="Services Image Section"
                  imageWidth={500}
                  imageHeight={500}
                />
              </div>
            </div>
            <div className="relative top-12 self-center text-[72px] font-bold text-black xl:text-[120px]">
              DỊCH VỤ
            </div>
          </div>
          <div className="my-4 max-w-[800px] text-h4">
            Dịch vụ spa chuyên nghiệp cho thú cưng, từ chăm sóc lông, da đến thư
            giãn. Chúng tôi cam kết mang lại sự thoải mái và an toàn tối đa cho
            thú cưng của bạn
          </div>
          <NormalTransitionLink
            className="rounded-full bg-primary px-6 py-2 text-white"
            href="/booking"
          >
            Đặt lịch ngay
          </NormalTransitionLink>
        </div>
        <Swiper
          className="w-1/2"
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1880: {
              slidesPerView: 2,
              spaceBetween: -80,
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
            <SwiperSlide className="h-[600px]" key={index}>
              <ServicesItem
                imageSrc={src}
                servicesText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, maxime."
                servicesTitle="Chăm sóc móng"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
