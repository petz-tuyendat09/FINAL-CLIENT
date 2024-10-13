"use client";

import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";

export default function SaleSection() {
  const { data: Products } = useGetProductsQuery({ salePercent: 1 });
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-display font-bold uppercase">
            <h1 className="mt-[200px]">
              <span className="text-primary">Ưu đãi</span> tốt
            </h1>
            <h1>Cho bạn</h1>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Products?.products.map((product) => (
              <ProductCard key={product._id} Product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
