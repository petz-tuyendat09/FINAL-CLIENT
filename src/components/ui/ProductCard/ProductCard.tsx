import { memo } from "react";
import Image from "next/image";
import ProductInfo from "./ProductInfo";
import Link from "next/link";
import { Product } from "@/types/Product";
import ProductCardCartButton from "./ProductCardCartButton";
interface ProductBoxProps {
  Product: Product;
  additionalClassess?: string;
  status?: string | undefined;
}

const ProductCard = memo(
  ({ Product, additionalClassess, status }: ProductBoxProps) => {
    const productThumbnail = Product?.productThumbnail;

    return (
      <div className={`${additionalClassess}`}>
        <div className="relative mb-4 block">
          <Link href={`shop/${Product?.productSlug}`}>
            <Image
              className="rounded-xl select-none rounded-md object-cover"
              src={productThumbnail}
              alt="Product Image"
              width={500}
              height={500}
              style={{ width: "100%", height: "100%" }}
            />
            {Product.salePercent >= 1 && (
              <>
                <p className="absolute left-2 top-2 rounded-lg bg-black px-4 py-1 text-[10px] text-white md:text-base">
                  {Product.salePercent}%
                </p>
              </>
            )}
            {status === "latest" && (
              <i className="absolute right-0 top-[20%] bg-[#feeae7] px-[46px] py-[3px] font-cormorant text-[20px]">
                New
              </i>
            )}
          </Link>
          <ProductCardCartButton Product={Product} />
          <ProductInfo
            salePercent={Product?.salePercent}
            productName={Product?.productName}
            subCategoryId={Product?.productSubCategory}
            productOption={Product?.productOption}
          />
        </div>
      </div>
    );
  },
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
