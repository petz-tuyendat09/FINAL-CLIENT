import LogoImage from "@@/assets/images/logo.png";
import ResponsiveImage from "../ResponsiveImage";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-8">
        <ResponsiveImage
          imageSrc={LogoImage}
          altImage="Logo"
          imageWidth={500}
          imageHeight={500}
        />
      </div>
      <p className="font-bold tracking-wider">PETZ</p>
    </div>
  );
}
