"use client";

import Slider from "./ProductSlider";
import CategoriesSelect from "./CategoriesSelect";
import { useState } from "react";
export default function CategoriesSlider() {
  const [filterProduct, setFilterProduct] = useState(
    "66e1769b96f787f5520019c1",
  );

  function handleFilterProduct(categoryName: string) {
    setFilterProduct(categoryName);
  }

  return (
    <div className="mt-20 flex items-center gap-12">
      <CategoriesSelect
        handleFilterProduct={handleFilterProduct}
      ></CategoriesSelect>
      <Slider categoryName={filterProduct}></Slider>
    </div>
  );
}
