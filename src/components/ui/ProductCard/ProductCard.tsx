import { memo, useState } from "react";
import Image from "next/image";
import ProductInfo from "./ProductInfo";
import Link from "next/link";
import ProductCardBuyNow from "./ProductCardBuyNow";
import { Product } from "@/types/Product";
import DummyImage from "@@/assets/images/dummy-product.png";
import ProductCardSelectWeight from "./ProductCardCartButton";
interface ProductBoxProps {
  Product: Product;
  additionalClassess?: string;
}

const ProductCard = memo(({ Product, additionalClassess }: ProductBoxProps) => {
  const productWeight: string[] = Product.productWeight;

  const [selectedWeight, setSelectedWeight] = useState<string>(
    productWeight?.[0] || "200g",
  );

  function handleSelectWeigth(weigth: string) {
    setSelectedWeight(weigth);
  }

  const productThumbnail = Product?.productThumbnail;
  return (
    <div className={additionalClassess}>
      <div className="group relative mb-4 block">
        <Link href={`shop/${Product?.productSlug}`}>
          <Image
            className="rounded-xl select-none object-contain"
            src={DummyImage}
            alt="Product Image"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
          {Product.salePercent >= 1 && (
            <p className="absolute left-6 top-8 rounded-lg bg-black px-4 py-1 text-white">
              {Product.salePercent}%
            </p>
          )}
        </Link>
        <ProductCardSelectWeight Product={Product} />
        <ProductCardBuyNow Product={Product} />
      </div>
      <ProductInfo
        productName={Product?.productName}
        subCategoryId={Product?.productSubCategory}
        productWeigth={productWeight?.[0]}
      />
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
