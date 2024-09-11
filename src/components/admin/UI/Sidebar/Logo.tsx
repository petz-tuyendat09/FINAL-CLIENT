import LogoImage from "@@/assets/images/logo2.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center ">
      <span className="w-16">
        <Image
          src={LogoImage}
          alt="Logo Image"
          width={500}
          height={500}
          style={{ width: "100%", height: "100%" }}
          priority
        />
      </span>
      <p className="-ml-4">Care4Pet</p>
    </div>
  );
}
