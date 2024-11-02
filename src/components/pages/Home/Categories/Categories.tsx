"use client";

import { useState } from "react";
import ProductSlider from "./ProductSlider";
import CategoryButton from "./CategoryButton";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";
import { Icon } from "@iconify/react/dist/iconify.js";

type FilterProductState = { productBuy: number } | { sortBy: string };

export default function Categories() {
  const [filterOption, setFilterOption] = useState<FilterProductState>({
    sortBy: "lastest",
  });
  const [currentFilter, setCurrentFilter] = useState("lastest");

  function handleFilterProduct(filterOption: string) {
    switch (filterOption) {
      case "lastest":
        setFilterOption({ sortBy: "latest" });
        setCurrentFilter("lastest");

        break;

      case "bestseller":
        setFilterOption({ productBuy: 100 });
        setCurrentFilter("bestseller");

        break;
      default:
        setFilterOption({ sortBy: "latest" });
    }
  }

  return (
    <section className="container mt-[200px]">
      <div className="mb-8">
        <div className="space-x-4">
          <div className="flex items-center justify-between gap-2 text-[16px] font-bold md:text-[32px]">
            <div className="flex flex-row items-center gap-[10px]">
              <h1>SẢN PHẨM</h1>
              <div className="flex flex-row gap-[10px]">
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
              </div>
            </div>
            <NormalTransitionLink
              href="/shop"
              className="ml-auto flex flex-row items-center gap-[7px] text-[12px] font-[500] md:text-[17px]"
            >
              <span>Xem tất cả</span>
              <Icon icon="lsicon:right-filled" width={20} />
            </NormalTransitionLink>
          </div>
        </div>
      </div>
      <ProductSlider filterOption={filterOption} />
    </section>
  );
}
