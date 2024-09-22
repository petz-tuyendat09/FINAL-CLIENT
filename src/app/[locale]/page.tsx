import HeroSection from "@/components/pages/NewHomes/HeroSection/HeroSection";
import ServicesSection from "@/components/pages/NewHomes/ServicesSection/ServicesSection";
import BookingSection from "@/components/pages/NewHomes/BookingSection/BookingSection";
import FeedbackSection from "@/components/pages/NewHomes/FeedbackSection/FeedbackSection";
import Categories from "@/components/pages/NewHomes/Categories/Categories";
export default function page() {
  return (
    <div className="container">
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <FeedbackSection />
      <Categories />
    </div>
  );
}
