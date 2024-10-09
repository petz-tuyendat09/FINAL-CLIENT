"use client";

import Button from "@/components/ui/Button";
import HeroSectionImage from "@@/public/images/hero-section-1.png";
import HeroSectionImage2 from "@@/public/images/hero-section-2.png";

import { Icon } from "@iconify/react/dist/iconify.js";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion } from "framer-motion";
import TransitionLink from "@/components/ui/NavigateBar/TransitionLink";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";

const textAppearVariant = {
  enter: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="container">
      <div className="mb-24 flex h-screen items-center justify-center">
        <div className="font-serif text-display">
          <div>
            <h1>Spa đẳng cấp cho</h1>
          </div>
          <div className="flex gap-2">
            <div className="w-28">
              <ResponsiveImage
                additionClass="rounded-[10px]"
                imageSrc={HeroSectionImage}
                altImage="Hero Section Image 1"
                imageWidth={500}
                imageHeight={500}
              />
            </div>
            <div>
              những <span className="italic">người bạn</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex w-fit flex-col">
              lông xù
              <NormalTransitionLink
                className="w-fit self-end rounded-full bg-primary px-6 py-2 font-sans text-base text-white"
                href="/booking"
              >
                Đặt lịch ngay
              </NormalTransitionLink>
            </div>
            <div className="w-24 flex-grow">
              <ResponsiveImage
                additionClass="rounded-button"
                imageSrc={HeroSectionImage2}
                altImage="Hero Section Image 1"
                imageWidth={500}
                imageHeight={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
