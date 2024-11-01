"use client";

import CategoriesTable from "./CategoriesTable";
import SubCategoriesTable from "./SubCategoriesTable";
import { RefetchProvider } from "./_store/reFetchContext";

export default function Categories() {
  return (
    <RefetchProvider>
      <div>
        <p className="mb-4 text-h3 font-bold">Danh mục</p>
        <div className="flex gap-2">
          <CategoriesTable />
          <SubCategoriesTable />
        </div>
      </div>
    </RefetchProvider>
  );
}
