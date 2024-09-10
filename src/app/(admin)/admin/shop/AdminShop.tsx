"use client";

import useGetProduct from "@/hooks/useGetProduct";
import AdminShopGrid from "./AdminShopGrid";
import { Product } from "@/types/Product";
import Link from "next/link";
interface AdminShopProps {
  initialData: Product[];
  initialTotalPages: number;
}

export default function AdminShop({
  initialData,
  initialTotalPages,
}: AdminShopProps) {
  const { products, handleFetchMore, handleQueryProduct } = useGetProduct({
    initialData,
    initialTotalPages,
  });

  function handleLoadMore() {
    handleFetchMore(3);
  }

  return (
    <div>
      <div className="flex justify-between mb-8">
        <input
          onChange={(e) => handleQueryProduct(e.target.value)}
          type="text"
          className="border border-black px-2 py-1"
          placeholder="Search tí style"
        />
        <Link
          className="bg-primary rounded-xl px-4 py-2 font-medium"
          href="add-product"
        >
          Thêm sản phẩm
        </Link>
      </div>
      <AdminShopGrid products={products} />
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
}
