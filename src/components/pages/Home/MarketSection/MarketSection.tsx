import MarketSectionImage from "@@/assets/images/marketplace-section.png"
import ResponsiveImage from "@/components/ui/ResponsiveImage"
import Button from "@/components/ui/Button"
export default function MarketSection() {
  return (
    <section className="my-24">
        <div className="flex gap-32 h-[40rem]">
        <div className="w-[40%] h-full">
            <ResponsiveImage additionClass="rounded-lg object-cover" imageHeight={800} imageWidth={800} imageSrc={MarketSectionImage} altImage="Market Section Image" />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
            <p>
                <h1 className="text-display font-serif">Tìm ngay <br /> người bạn lông xù </h1>
                <p  className="max-w-[645px] text-[26px] mt-4">Tìm ngay người bạn hoàn hảo cho chú mèo của bạn! Chúng tôi cung cấp những bé mèo đáng yêu, thân thiện và khỏe mạnh, sẵn sàng mang đến niềm vui và tình cảm cho gia đình bạn!</p>
            </p>
            <Button additionClass="w-fit text-h4">Xem ngay</Button>
        </div>
        </div>
    </section>
  )
}