import FooterImgae from "@@/assets/images/FooterImage.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Footer() {
  return (
    <>
      <div className="mt-12">
        <ResponsiveImage
          additionClass="rounded-lg object-cover"
          imageHeight={800}
          imageWidth={800}
          imageSrc={FooterImgae}
          altImage="Market Section Image"
        />

        <div className="flex h-12 items-center justify-center bg-black text-white">
          @2024 PETZ | All Rights Reserved
        </div>
      </div>
    </>
  );
}
