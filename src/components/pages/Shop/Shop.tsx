"use client";

import { CategoryFilterContext } from "./_store/FilterContext";
import { useCategoryFilter } from "./_hook/useFilterCategory";
import Filter from "./Filter/Filter";
import ProductGrid from "./ProductGrid/ProductGrid";

export default function Shop() {
  const { filters, handleCategoryToggle, handleSubCategoryToggle } =
    useCategoryFilter();

  return (
    <CategoryFilterContext.Provider
      value={{
        filters,
        handleCategoryToggle,
        handleSubCategoryToggle,
      }}
    >
      <div className="text-md container pt-24 font-bold md:text-h3 xl:text-h1">
        <p>MUA SẮM SẢN PHẨM MỚI CỦA CHÚNG TÔI</p>
        <p> VÀ KHÁM PHÁ NHỮNG SẢN PHẨM MỚI NHẤT</p>
      </div>
      <ProductGrid />
    </CategoryFilterContext.Provider>
  );
}
