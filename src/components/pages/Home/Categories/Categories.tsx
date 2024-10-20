"use client";

import { useState } from "react";
import ProductSlider from "./ProductSlider";
import CategoryButton from "./CategoryButton";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";
import { Icon } from "@iconify/react/dist/iconify.js";

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
          <div className="flex justify-between items-center gap-2 text-[30px] font-bold">
            <div className="flex flex-row gap-[10px] items-center">
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
            <NormalTransitionLink href="/shop" className="flex flex-row gap-[7px] items-center ml-auto font-[500] text-[17px]">
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
