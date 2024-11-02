"use client";

import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";

export default function SaleSection() {
  const { data: Products } = useGetProductsQuery({ salePercent: 1 });
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-[32px] font-bold uppercase md:text-h1 md:leading-[70px]">
            <div className="mt-[200px]">
              <span className="text-primary">Ưu đãi</span> tốt
            </div>
            <div>Cho bạn</div>
          </div>
          <div className="mt-[30px] grid grid-cols-2 gap-4 md:grid-cols-3 2xl:grid-cols-4">
            {Products?.products.map((product) => (
              <ProductCard key={product._id} Product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
