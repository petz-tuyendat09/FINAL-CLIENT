import HeroSection from "@/components/pages/Home/HeroSection/HeroSection";
import ServicesSection from "@/components/pages/Home/ServicesSection/ServicesSection";
import Categories from "@/components/pages/Home/Categories/Categories";
import SaleSection from "@/components/pages/Home/SaleSection/SaleSection";
import FeedbackSection from "@/components/pages/Home/FeedbackSection/FeedbackSection";
import React from "react";
export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Categories />
      <SaleSection />
      <FeedbackSection />
    </>
  );
}
