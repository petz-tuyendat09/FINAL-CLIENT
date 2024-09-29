"use client";

import Button from "@/components/ui/Button";
import HeroSectionImage1 from "@@/assets/images/hero-section-image-1.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion } from "framer-motion";

const textAppearVariant = {
  enter: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="mb-24 h-screen">
      <div className="flex h-full">
        <div className="flex w-1/2 flex-col text-center text-display">
          <div className="mt-auto">
            <p className="text-h4">Chăm sóc thú cưng của bạn</p>
            <div className="mb-4 font-serif">
              <motion.h1
                variants={textAppearVariant}
                initial="enter"
                animate="animate"
                transition={{ duration: 0.5 }}
              >
                Spa Đẳng Cấp Cho
              </motion.h1>
              <motion.h1
                variants={textAppearVariant}
                initial="enter"
                animate="animate"
                transition={{ duration: 0.5 }}
              >
                Những Người Bạn
              </motion.h1>
              <motion.h1
                variants={textAppearVariant}
                initial="enter"
                animate="animate"
                transition={{ duration: 0.5 }}
              >
                Lông Xù
              </motion.h1>
            </div>
          </div>
          <div className="mb-4 mt-auto flex items-center justify-between px-4">
            <Button additionClass="text-h4">
              Đặt lịch ngay
              <Icon
                className="mx-auto ml-2 size-8 rotate-90 text-white"
                icon="majesticons:arrow-up-line"
              />
            </Button>
            <div className="flex w-fit gap-2 text-base">
              <div className="text-base">
                <p>Khám phá </p>
                <p>sản phẩm</p>
              </div>
              <button className="size-12 rotate-45 rounded-full bg-black transition duration-300 hover:rotate-90">
                <Icon
                  className="mx-auto size-8 text-white"
                  icon="majesticons:arrow-up-line"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 py-4">
          <ResponsiveImage
            imageSrc={HeroSectionImage1}
            imageHeight={1000}
            imageWidth={1000}
            altImage="Hero Image"
            additionClass=" object-cover rounded-button"
          />
        </div>
      </div>
    </section>
  );
}
