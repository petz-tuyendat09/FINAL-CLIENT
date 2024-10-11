"use client";

import { useState } from "react";
import ProductSlider from "./ProductSlider";
import CategoryButton from "./CategoryButton";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";

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
    <section className="container mt-[200px]">
      <div className="mb-8">
        <div className="space-x-4">
          <div className="flex items-center gap-2 text-[26px] font-bold">
            SẢN PHẨM
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
            <NormalTransitionLink href="/shop" className="ml-auto underline">
              XEM TẤT CẢ
            </NormalTransitionLink>
          </div>
        </div>
      </div>
      <ProductSlider filterOption={filterOption} />
    </section>
  );
}
