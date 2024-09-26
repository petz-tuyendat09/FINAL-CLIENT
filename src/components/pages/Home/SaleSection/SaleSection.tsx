"use client";

import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/libs/features/services/product";

export default function SaleSection() {
  const { data: Products } = useGetProductsQuery({ salePercent: 1 });
  return (
    <section>
      <h1 className="my-4 font-serif text-display">Deal tốt cho bạn</h1>
      <div className="grid grid-cols-4 gap-4">
        {Products?.products.map((product) => (
          <ProductCard key={product._id} Product={product} />
        ))}
      </div>
    </section>
  );
}
