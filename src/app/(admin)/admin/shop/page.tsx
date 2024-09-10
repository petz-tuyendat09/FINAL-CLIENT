import { Suspense } from "react";
import AdminShop from "./AdminShop";
import { getProductWithPaginate } from "@/apis/product";
<<<<<<< HEAD
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
=======

async function AdminShopServer() {
  const data = await getProductWithPaginate({ page: 1, limit: 6 });
  return <AdminShop initialData={data} />;
>>>>>>> 27ea2b71898f71d1b528b0ba3be043b4884d760e
}

export default async function page() {
  return (
    <Suspense fallback="Loading">
      <AdminShopServer />
    </Suspense>
  );
}
