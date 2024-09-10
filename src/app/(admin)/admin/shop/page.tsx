import { Suspense } from "react";
import AdminShop from "./AdminShop";
import { getProductWithPaginate } from "@/apis/product";
import { PaginateProduct } from "@/types/Product";

async function AdminShopServer() {
  const data: PaginateProduct = await getProductWithPaginate({
    page: 1,
    limit: 6,
  });
  return (
    <AdminShop
      initialData={data.products}
      initialTotalPages={data.totalPages}
    />
  );
}

export default async function page() {
  return (
    <Suspense fallback="Loading">
      <AdminShopServer />
    </Suspense>
  );
}
