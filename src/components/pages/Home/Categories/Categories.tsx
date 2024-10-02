"use client";

import CategoriesSlider from "./CategoriesSlider";
import { useState } from "react";
import ProductSlider from "./ProductSlider";
import CategoryButton from "./CategoryButton";

type FilterProductState =
  | { productBuy: number }
  | { productStatus: string }
  | { salePercent: number };

export default function Categories() {
  const [filterOption, setFilterOption] = useState<FilterProductState>({
    productBuy: 100,
  });

  function handleFilterProduct(filterOption: string) {
    switch (filterOption) {
      case "latest":
        setFilterOption({ productStatus: "latest" });
        break;
      case "discount":
        setFilterOption({ salePercent: 1 });
        break;
      case "bestseller":
        setFilterOption({ productBuy: 100 });
        break;
      default:
        setFilterOption({ productBuy: 100 });
    }
  }

  return (
    <div className="container mt-[10%] py-12">
      <div className="flex justify-between">
        <h1 className="mb-8 font-serif text-3xl text-h2">
          Khám phá sản phẩm dành cho bé
        </h1>
        <div className="space-x-4">
          <CategoryButton
            filterOption="bestseller"
            handleFilter={handleFilterProduct}
            buttonLabel="Bán chạy nhất"
          />
          <CategoryButton
            filterOption="latest"
            handleFilter={handleFilterProduct}
            buttonLabel="Mới nhất"
          />
          <CategoryButton
            filterOption="discount"
            handleFilter={handleFilterProduct}
            buttonLabel="Giảm giá"
          />
        </div>
      </div>
      <ProductSlider filterOption={filterOption} />
    </div>
  );
}
