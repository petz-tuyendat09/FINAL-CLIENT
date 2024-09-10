import ProductCardAdmin from "@/components/admin/UI/ProductCardAdmin/ProductCardAdmin";
import { Product } from "@/types/Product";

interface AdminShopGridProps {
  products: Product[];
}

export default function AdminShopGrid({ products }: AdminShopGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products?.map((product, index) => (
        <ProductCardAdmin key={index} Product={product} />
      ))}
    </div>
  );
}
