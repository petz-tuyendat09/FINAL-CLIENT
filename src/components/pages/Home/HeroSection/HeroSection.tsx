import Button from "@/components/ui/Button";
import HeroSectionImage1 from "@@/assets/images/hero-section-image-1.png";
import HeroSectionImage2 from "@@/assets/images/hero-section-image-2.png";
import HeroSectionImage3 from "@@/assets/images/hero-section-image-3.png";
import HeroSectionImage4 from "@@/assets/images/hero-section-image-4.png";
import HeroSectionImage5 from "@@/assets/images/hero-section-image-5.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
export default function HeroSection() {
  return (
    <section className="mb-24">
      <div className="text-center font-serif text-display">
        Spa đẳng cấp <p>cho những người bạn lông xù</p>
        <Button additionClass="text-h4 mx-auto gap-2">
          Đặt lịch
          <Icon icon="bi:arrow-right" />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="hidden w-1/5 space-y-4 lg:block">
          <div>
            <ResponsiveImage
              imageSrc={HeroSectionImage5}
              priority
              additionClass="rounded-button"
              altImage="Hero Section Image"
              imageWidth={500}
              imageHeight={500}
            />
          </div>
          <div>
            <ResponsiveImage
              imageSrc={HeroSectionImage3}
              priority
              additionClass="rounded-button"
              altImage="Hero Section Image"
              imageWidth={500}
              imageHeight={500}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <ResponsiveImage
            imageSrc={HeroSectionImage1}
            priority
            additionClass="rounded-button"
            altImage="Hero Section Image"
            imageWidth={500}
            imageHeight={500}
          />
        </div>
        <div className="hidden w-1/5 space-y-4 lg:block">
          <div>
            <ResponsiveImage
              imageSrc={HeroSectionImage2}
              priority
              additionClass="rounded-button"
              altImage="Hero Section Image"
              imageWidth={500}
              imageHeight={500}
            />
          </div>
          <div>
            <ResponsiveImage
              imageSrc={HeroSectionImage4}
              priority
              additionClass="rounded-button"
              altImage="Hero Section Image"
              imageWidth={500}
              imageHeight={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
