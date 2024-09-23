'use client'

import ProductCard from "@/components/ui/ProductCard/ProductCard"
import { useGetProductsQuery } from "@/libs/features/services/product"

export default function SaleSection() {
    const {data:Products} = useGetProductsQuery({salePercent:1})
  return (
<section>
        <h1 className="text-display font-serif my-4">Deal tốt cho bạn</h1>
        <div className="grid grid-cols-4 gap-4">
            {Products?.map((product) => 
            <ProductCard key={product._id} Product={product}/>
            )}
        </div>
</section>
  )
}