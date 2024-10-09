"use client";
import AdminGrid from "./AdminGrid";
import Link from "next/link";
import {
  ProductActionProvider,
  useProductActionContext,
} from "./_store/AdminShopContext"; // Import context
import TransitionLinkAdmin from "../UI/TransitionLinkAdmin";

export default function AdminShopServer() {
  return (
    <ProductActionProvider>
      <AdminShop />
    </ProductActionProvider>
  );
}

function AdminShop() {
  const { products, handleFetchMore } = useProductActionContext();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <TransitionLinkAdmin
          className="rounded-xl rounded-full bg-black px-4 py-2 font-medium text-white"
          href="add-product"
        >
          Thêm sản phẩm
        </TransitionLinkAdmin>
      </div>
      <AdminGrid products={products} />
      <button onClick={() => handleFetchMore(2)}>Load more</button>
    </div>
  );
}
