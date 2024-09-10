import Image from "next/image";
import ProductCardAdminButtonAction from "./ProductCardAdminButtonAction";
import { Product } from "@/types/Product";
import ProductCardAdminInfo from "./ProductCardAdminInfo";

interface ProductCardAdminProps {
  Product: Product;
  handleDeleteProduct?: Function;
}

export default function ProductCardAdmin({
  Product,
  handleDeleteProduct,
}: ProductCardAdminProps) {
  const imageURL = `http://localhost:8888/public/images/products/${Product.productImage}`;

  return (
    <div className="w-90 rounded-xl bg-gray-darker p-4">
      <div className="group relative">
        <ProductCardAdminButtonAction
          // handleDeleteProduct={handleDeleteProduct}
          productId={Product._id}
          productSlug={Product.productSlug}
        />
        <Image
          src={imageURL}
          alt="product img"
          width={222}
          height={222}
          style={{ width: "100%", height: "100%" }}
          priority
        />
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
