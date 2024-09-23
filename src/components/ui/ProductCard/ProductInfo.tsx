import React, { useMemo, memo } from "react";
import calculateSalePrice from "@/utils/caculateSalePrice";
interface ProductInfoProps {
  productName: string;
  productPrice: number;
  productSalePercent?: number;
}

const ProductInfo = memo(
  ({ productName, productPrice, productSalePercent = 0 }: ProductInfoProps) => {
    const { salePrice } = calculateSalePrice(productSalePercent, productPrice);
    const formatedMoney = salePrice.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });

    return (
      <div className="flex justify-between items-center text-center">
        <h2 className="font-serif text-h4">{productName}</h2>
        {productSalePercent === 0 && (
          <span className="text-body">{formatedMoney}</span>
        )}
        {productSalePercent !== 0 && (
          <>
            <span className="text-body">{formatedMoney}</span>
          </>
        )}
      </div>
    );
  },
);

ProductInfo.displayName = "ProductInfo";

export default ProductInfo;
