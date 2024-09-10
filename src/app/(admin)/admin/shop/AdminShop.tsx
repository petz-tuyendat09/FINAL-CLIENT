"use client";

<<<<<<< HEAD
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
=======
import useGetProduct from "./hooks/useGetProduct";
import AdminShopGrid from "./AdminShopGrid";
import { PaginateProduct } from "@/types/Product";
import Link from "next/link";
interface AdminShopProps {
  initialData: PaginateProduct;
}

export default function AdminShop({ initialData }: AdminShopProps) {
  const { products, handleFetchMore, handleQueryProduct } = useGetProduct({
    initialData,
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
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
