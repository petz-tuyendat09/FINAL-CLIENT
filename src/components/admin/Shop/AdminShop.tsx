"use client";
import AdminGrid from "./AdminGrid";
import Link from "next/link";
import { Product } from "@/types/Product";
import Filter from "@/components/admin/Shop/Filter/Filter";
import { useState } from "react";
import useGetProductAdmin from "./_hooks/useGetProductAdmin";
export default function AdminShopServer() {
  const { products, handleFetchMore, handleQueryProduct } = useGetProductAdmin(
    {},
  );

  const [filter, setFilter] = useState<object>({
    salePercent: 0,
    status: "lastest",
  });

  function handleFilter(filterOption: string) {
    // setFilter((prevState) => [...prevState, filterOption]);
    console.log(filter);
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        {/* <Filter
          handleQueryProduct={handleQueryProduct}
          handleFilter={handleFilter}
        /> */}
        <Link
          className="rounded-xl rounded-full bg-black px-4 py-2 font-medium text-white"
          href="add-product"
        >
          Thêm sản phẩm
        </Link>
      </div>
      <AdminGrid products={products} />
      <button onClick={() => handleFetchMore(2)}>Load more</button>
    </div>
  );
}
