import calculateSalePrice from "@/utils/caculateSalePrice";
import { Icon } from "@iconify/react/dist/iconify.js";
interface ProductCardAdminInfoProps {
  productSalePercent: number;
  productPrice: number;
  productName: string;
  productBuy: number;
  productQuantity: number;
}

export default function ProductCardAdminInfo({
  productSalePercent,
  productPrice,
  productName,
  productBuy,
  productQuantity,
}: ProductCardAdminInfoProps) {
  const { salePrice } = calculateSalePrice(productSalePercent, productPrice);

  return (
    <div className="bg-gray-light mt-2 rounded-[20px] p-4">
      {productSalePercent === 0 && (
        <span className="font-bold">{salePrice.toFixed(2)} $</span>
      )}
      {productSalePercent !== 0 && (
        <>
          <span className="font-bold">{salePrice.toFixed(2)} $</span>
          <span className="ml-2 rounded-lg bg-black px-2 py-1 text-sm text-white">
            {productSalePercent}%
          </span>
        </>
      )}
      <p>{productName}</p>
      <div className="flex gap-2">
        <p className="flex items-center gap-1">
          <Icon icon="mdi:cart-outline" />
          Buy: {productBuy}
        </p>
        <p className="flex items-center gap-1 text-green-500">
          <Icon icon="tabler:box" />
          Quantity: {productQuantity}
        </p>
      </div>
    </div>
  );
}
