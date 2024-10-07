import HeroSection from "@/components/pages/Home/HeroSection/HeroSection";
import ServicesSection from "@/components/pages/Home/ServicesSection/ServicesSection";
import BookingSection from "@/components/pages/Home/BookingSection/BookingSection";
import FeedbackSection from "@/components/pages/Home/FeedbackSection/FeedbackSection";
import Categories from "@/components/pages/Home/Categories/Categories";
import SaleSection from "@/components/pages/Home/SaleSection/SaleSection";
import MarketSection from "@/components/pages/Home/MarketSection/MarketSection";
import React from "react";
export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <Categories />
      <MarketSection />
    </>
  );
}
