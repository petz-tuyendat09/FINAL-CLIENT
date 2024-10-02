import { Product } from "@/types/Product";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProductCardSelectWeightProps {
  Product: Product;
}

export default function ProductCardSelectWeight({
  Product,
}: ProductCardSelectWeightProps) {
  return (
    <div className="group absolute right-4 top-8 text-white">
      <button className="w-fit rounded-full bg-white p-3 text-black transition delay-75 duration-300 group-hover:bg-gray-100">
        <Icon className="size-5" icon="icon-park-outline:mall-bag" />
      </button>
    </div>
  );
}
