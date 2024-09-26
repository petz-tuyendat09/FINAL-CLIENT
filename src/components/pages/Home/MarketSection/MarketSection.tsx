import MarketSectionImage from "@@/assets/images/marketplace-section.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Button from "@/components/ui/Button";
export default function MarketSection() {
  return (
    <section className="my-24">
      <div className="flex h-[40rem] gap-32">
        <div className="h-full w-[40%]">
          <ResponsiveImage
            additionClass="rounded-lg object-cover"
            imageHeight={800}
            imageWidth={800}
            imageSrc={MarketSectionImage}
            altImage="Market Section Image"
          />
        </div>
        <div className="flex w-1/2 flex-col justify-between">
          <div>
            <h1 className="font-serif text-display">
              Tìm ngay <br /> người bạn lông xù{" "}
            </h1>
            <p className="mt-4 max-w-[645px] text-[26px]">
              Tìm ngay người bạn hoàn hảo cho chú mèo của bạn! Chúng tôi cung
              cấp những bé mèo đáng yêu, thân thiện và khỏe mạnh, sẵn sàng mang
              đến niềm vui và tình cảm cho gia đình bạn!
            </p>
          </div>
          <Button additionClass="w-fit text-h4">Xem ngay</Button>
        </div>
      </div>
    </section>
  );
}
