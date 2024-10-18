"use client";
import ProductTable from "./ProductTable";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";

export default function AdminShop() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <NormalTransitionLink
          className="rounded-xl rounded-full bg-black px-4 py-2 font-medium text-white"
          href="add-product"
        >
          Thêm sản phẩm
        </NormalTransitionLink>
      </div>
      <ProductTable />
    </div>
  );
}
