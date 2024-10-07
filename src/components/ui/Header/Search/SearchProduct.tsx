import Image from "next/image";

import { useMemo } from "react";
import Link from "next/link";
import calculateSalePrice from "@/utils/caculateSalePrice";

interface SearchProductProps {
  productImg: string;
  productSalePercent: number;
  productName: string;
  productPrice: number;
  productSlug: string;
}

export default function SearchProduct({
  productImg,
  productSalePercent,
  productSlug,
  productName,
  productPrice,
}: SearchProductProps) {
  const { salePrice } = useMemo(() => {
    return calculateSalePrice(productSalePercent, productPrice);
  }, [productSalePercent, productPrice]);

  return (
    <div className="flex items-center gap-4 border-t-[0.5px] border-gray-300 text-white">
      <Link href={`shop/${productSlug}`} className="w-32">
        <Image
          priority
          className="object-contain"
          src={productImg}
          alt="Product Image"
          width={200}
          height={200}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </Link>
      <div>
        <p className="text-xl">{productName}</p>
        <span className="text-sm">{salePrice}$</span>
      </div>
    </div>
  );
}
