import { Product } from "@/types/Product";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProductCardSelectWeightProps {
  Product: Product;
}

export default function ProductCardCartButton({
  Product,
}: ProductCardSelectWeightProps) {
  return (
    <div className="group absolute right-1 top-1 text-white lg:right-2 lg:top-2">
      <button className="w-fit rounded-full bg-white p-1 text-black transition delay-75 duration-300 group-hover:bg-gray-100 lg:p-3">
        <Icon className="size-4 lg:size-5" icon="icon-park-outline:mall-bag" />
      </button>
    </div>
  );
}
