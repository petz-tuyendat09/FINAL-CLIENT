import Image from "next/image";
import ProductCardAdminButtonAction from "./ProductCardAdminButtonAction";
import { Product } from "@/types/Product";
import ProductCardAdminInfo from "./ProductCardAdminInfo";

interface ProductCardAdminProps {
  Product: Product;
}

export default function ProductCardAdmin({ Product }: ProductCardAdminProps) {
  const thumbnailURL = Product.productThumbnail;

  return (
    <div>
      <div>
        <div className="group relative rounded-lg bg-primary">
          <ProductCardAdminButtonAction
            // handleDeleteProduct={handleDeleteProduct}
            productId={Product._id}
            productSlug={Product.productSlug}
          />
          <Image
            unoptimized
            src={thumbnailURL}
            alt="Product Image"
            width={222}
            height={222}
            style={{ width: "100%", height: "100%" }}
            priority
          />
        </div>
      </div>
      <ProductCardAdminInfo
        productSalePercent={Product.salePercent}
        productPrice={Product.productPrice}
        productName={Product.productName}
        productBuy={Product.productBuy}
        productQuantity={Product.productQuantity}
      />
    </div>
  );
}
