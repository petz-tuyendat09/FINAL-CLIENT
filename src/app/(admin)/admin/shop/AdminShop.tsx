"use client";
import AdminGrid from "./AdminGrid";
import Link from "next/link";
import { Product } from "@/types/Product";
import useGetProduct from "@/hooks/useGetProduct";
import Filter from "@/components/admin/Shop/Filter/Filter";
import { useState } from "react";

interface AdminShopServerProps {
  initialData: Product[];
  initialTotalPages: number;
}

export default function AdminShopServer({
  initialData,
  initialTotalPages,
}: AdminShopServerProps) {
  const { products, handleFetchMore, handleQueryProduct } = useGetProduct({
    initialData,
    initialTotalPages,
  });

  const [filter, setFilter] = useState<object>({
    salePercent: 0,
    status: "lastest",
  });

  function handleLoadMore() {
    handleFetchMore(3);
  }

  function handleFilter(filterOption: string) {
    setFilter((prevState) => [...prevState, filterOption]);
    console.log(filter);
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <Filter
          handleQueryProduct={handleQueryProduct}
          handleFilter={handleFilter}
        />
        <Link
          className="rounded-xl bg-primary px-4 py-2 font-medium"
          href="add-product"
        >
          Thêm sản phẩm
        </Link>
      </div>
      <AdminGrid products={products} />
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
}
