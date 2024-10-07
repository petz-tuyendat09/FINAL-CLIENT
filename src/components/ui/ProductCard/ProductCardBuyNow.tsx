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
    <div className="absolute bottom-2 w-full md:bottom-4">
      <div className="w-full items-center justify-center gap-2 md:flex">
        <div className="mx-auto flex w-fit items-center rounded-full bg-black px-2 py-0.5 text-center text-white md:mx-0 md:px-4 md:py-2">
          <p className="w-fit text-[10px] md:text-base">{formatedMoney}</p>
          <div className="rounded-full bg-black p-1 text-white md:hidden">
            <Icon icon="humbleicons:arrow-up" className="size-3 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
