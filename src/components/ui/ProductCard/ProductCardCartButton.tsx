import { Product } from "@/types/Product";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProductCardSelectWeightProps {
  Product: Product;
}

export default function ProductCardSelectWeight({
  Product,
}: ProductCardSelectWeightProps) {
  return (
    <div className="absolute right-4 top-8 flex flex-col gap-2 overflow-y-hidden text-white">
      <button className="w-fit rounded-full bg-white p-3 text-black">
        <Icon className="size-5" icon="icon-park-outline:mall-bag" />
      </button>
    </div>
  );
}
