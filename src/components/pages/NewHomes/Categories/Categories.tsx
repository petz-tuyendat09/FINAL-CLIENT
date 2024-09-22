"use client";

import ProductCard from "@/components/ui/ProductCard/ProductCard";
import CategoriesSlider from "./CategoriesSlider";
import { useGetProductsQuery } from "@/libs/features/services/product";

export default function Categories() {
  return (
    <div className="container mt-[10%] py-12">
      <h1 className="mb-8 font-serif text-3xl text-display">
        Khám phá sản phẩm<p className="mt-4">cho bé</p>
      </h1>
      <CategoriesSlider />
    </div>
  );
}
