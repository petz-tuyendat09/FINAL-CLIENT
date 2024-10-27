"use client";

import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";

export default function SaleSection() {
  const { data: Products } = useGetProductsQuery({ salePercent: 1 });
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-display font-bold uppercase leading-[70px]">
            <div className="mt-[200px]">
              <span className="text-primary">Ưu đãi</span> tốt
            </div>
            <div>Cho bạn</div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-[30px]">
            {Products?.products.map((product) => (
              <ProductCard key={product._id} Product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
