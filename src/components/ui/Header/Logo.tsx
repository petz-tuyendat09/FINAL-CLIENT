import LogoImage from "@@/assets/images/logo.png";
import ResponsiveImage from "../ResponsiveImage";
import Link from "next/link";

interface LogoProps {
  textColor?: "text-black" | "text-white";
}

export default function Logo({ textColor }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${textColor}`}>
      <div className="w-8">
        <ResponsiveImage
          imageSrc={LogoImage}
          altImage="Logo"
          imageWidth={500}
          imageHeight={500}
        />
      </div>
      <p className="font-bold tracking-wider">PETZ</p>
    </Link>
  );
}
