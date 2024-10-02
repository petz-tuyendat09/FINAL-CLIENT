import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";
import { Product } from "@/types/Product";
import calculateSalePrice from "@/utils/caculateSalePrice";

interface ProductCartButtonProps {
  Product?: Product;
}
export default function ProductButton({ Product }: ProductCartButtonProps) {
  const { salePrice } = calculateSalePrice(
    Product!.salePercent,
    Product!.productPrice,
  );

  const formatedMoney = salePrice.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 transition">
      <button className="group flex h-10 w-48 items-center justify-between rounded-full bg-white px-4 drop-shadow-sm">
        <p>Mua ngay</p>
        <div className="rounded-full bg-black p-2 text-white transition duration-300 group-hover:translate-x-2">
          <Icon icon="humbleicons:arrow-up" className="size-5 rotate-90" />
        </div>
      </button>
      <Button additionClass="gap-1 text-base text-white">
        <p className="w-20">{formatedMoney}</p>
      </Button>
    </div>
  );
}
