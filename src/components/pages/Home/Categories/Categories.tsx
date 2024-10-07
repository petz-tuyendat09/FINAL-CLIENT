"use client";

import { useState } from "react";
import ProductSlider from "./ProductSlider";
import CategoryButton from "./CategoryButton";

type FilterProductState =
  | { productBuy: number }
  | { productStatus: string }
  | { salePercent: number };

export default function Categories() {
  const [filterOption, setFilterOption] = useState<FilterProductState>({
    productStatus: "lastest",
  });
  const [currentFilter, setCurrentFilter] = useState("lastest");

  function handleFilterProduct(filterOption: string) {
    switch (filterOption) {
      case "lastest":
        setFilterOption({ productStatus: "latest" });
        setCurrentFilter("lastest");

        break;
      case "discount":
        setFilterOption({ salePercent: 1 });
        setCurrentFilter("discount");
        break;
      case "bestseller":
        setFilterOption({ productBuy: 100 });
        setCurrentFilter("bestseller");

        break;
      default:
        setFilterOption({ productStatus: "latest" });
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
            currentFilter={currentFilter}
            filterOption="lastest"
            handleFilter={handleFilterProduct}
            buttonLabel="Mới nhất"
          />
          <CategoryButton
            currentFilter={currentFilter}
            filterOption="bestseller"
            handleFilter={handleFilterProduct}
            buttonLabel="Bán chạy nhất"
          />
          <CategoryButton
            currentFilter={currentFilter}
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
