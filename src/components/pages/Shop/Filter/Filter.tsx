// Filter.tsx
import { useContext } from "react";
import { CategoryFilterContext } from "../_store/FilterContext";
import Category from "./FilterCategory";
import { useGetCategoriesQuery } from "@/libs/features/services/categories";

export default function Filter() {
  const { data: categories } = useGetCategoriesQuery("");
  const categoryFilterContext = useContext(CategoryFilterContext);

  if (!categoryFilterContext) {
    throw new Error("CategoryFilterContext not provided");
  }

  return (
    <div className="w-1/4 text-h4">
      <h2 className="mb-4 text-h2">Danh mục sản phẩm</h2>
      <div className="space-y-2">
        {categories?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}
