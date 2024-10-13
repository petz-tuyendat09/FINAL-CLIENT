"use client";
import ProductTable from "./ProductTable";
import TransitionLinkAdmin from "../UI/TransitionLinkAdmin";

export default function AdminShop() {
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
      <ProductTable />
    </div>
  );
}
