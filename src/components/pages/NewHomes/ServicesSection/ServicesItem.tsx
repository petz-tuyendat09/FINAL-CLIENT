import Link from "next/link";

interface ServicesItemProps {
  width: string;
  backgroundImageClass: string;
  imageText: string;
}

export default function ServicesItem({
  width,
  backgroundImageClass,
  imageText,
}: ServicesItemProps) {
  return (
    <div
      className={`group flex ${width} ${backgroundImageClass} flex-col justify-between rounded-button bg-[length:100%] bg-center p-4 font-serif text-h2 text-white transition-all duration-300 hover:bg-[length:110%] lg:text-h1`}
    >
      {imageText}
      <Link
        href={"/"}
        className="mx-auto block w-fit rounded-full bg-primary px-6 py-2 text-h4 text-black opacity-100 transition delay-75 duration-300 lg:translate-y-2 lg:text-h3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
      >
        Xem thêm
      </Link>
    </div>
  );
}
