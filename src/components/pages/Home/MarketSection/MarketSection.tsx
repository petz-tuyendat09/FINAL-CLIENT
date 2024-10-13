import MarketSectionImage from "@@/public/images/adopted-section.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import DummyCat1 from "@@/public/images/DummyCat1.jpg";
import DummyCat2 from "@@/public/images/DummyCat2.jpg";
import DummyCat3 from "@@/public/images/DummyCat3.jpg";
import DummyCat4 from "@@/public/images/DummyCat4.jpg";
import CatCard from "@/components/ui/CatCard/CatCard";
export default function MarketSection() {
  return (
    <section className="container my-24">
      <div>
        <div className="w-fit text-display font-bold uppercase">
          <h1>
            <span className="text-primary">Tìm ngay</span> người bạn
          </h1>
          <div className="flex gap-2">
            lông xù
            <div className="flex-grow">
              <ResponsiveImage
                imageSrc={MarketSectionImage}
                imageHeight={600}
                imageWidth={600}
                altImage="A cat hiding in red background"
                additionClass="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-8">
          <CatCard CatImage={DummyCat1} />
          <CatCard CatImage={DummyCat2} />
          <CatCard CatImage={DummyCat3} />
          <CatCard CatImage={DummyCat4} />
        </div>
      </div>
    </section>
  );
}
