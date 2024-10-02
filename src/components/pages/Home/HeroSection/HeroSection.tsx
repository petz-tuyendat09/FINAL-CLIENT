"use client";

import Button from "@/components/ui/Button";
import HeroSectionImage from "@@/assets/images/here-section-image.jpg";

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
      <div className="block h-full lg:flex">
        <div className="flex w-1/2 flex-col self-center text-center text-display">
          <div>
            <p className="text-h4">Chăm sóc thú cưng của bạn</p>
            <div className="mb-4 font-serif">
              <motion.h1
                variants={textAppearVariant}
                initial="enter"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-clip-text"
              >
                Spa Đẳng Cấp Cho
              </motion.h1>
              <motion.h1
                variants={textAppearVariant}
                initial="enter"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.5 }}
                className="-my-[16px] bg-clip-text"
              >
                Những Người Bạn
              </motion.h1>
              <motion.h1
                variants={textAppearVariant}
                initial="enter"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-clip-text"
              >
                Lông Xù
              </motion.h1>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 px-4">
            <Button additionClass="text-h4 group">
              Đặt lịch ngay
              <Icon
                icon="pajamas:long-arrow"
                className="mx-auto ml-2 size-8 text-white transition duration-300 group-hover:translate-x-1"
              />
            </Button>
            <Button
              textColor="black"
              additionClass="text-h4 bg-white border border-black hover:bg-black hover:text-white transition duration-300"
            >
              Cửa hàng
            </Button>
          </div>
        </div>

        <div className="w-1/2 py-4">
          <ResponsiveImage
            imageSrc={HeroSectionImage}
            imageHeight={1000}
            imageWidth={1000}
            altImage="Hero Image"
            additionClass=" object-cover rounded-[30px]"
          />
        </div>
      </div>
    </section>
  );
}
