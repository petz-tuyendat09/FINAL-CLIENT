"use client";

import { CategoryFilterContext } from "./_store/FilterContext";
import { useCategoryFilter } from "./_hook/useFilterCategory";
import Filter from "./Filter/Filter";
import ProductGrid from "./ProductGrid/ProductGrid";

export default function Shop() {
  const {
    filters,
    handleCategoryToggle,
    handleAnimalTypeToggle,
    handleSubCategoryToggle,
  } = useCategoryFilter();

  return (
    <CategoryFilterContext.Provider
      value={{
        filters,
        handleCategoryToggle,
        handleAnimalTypeToggle,
        handleSubCategoryToggle,
      }}
    >
      <div className="container my-24 flex gap-8">
        <Filter />
        <ProductGrid />
      </div>
    </CategoryFilterContext.Provider>
  );
}
