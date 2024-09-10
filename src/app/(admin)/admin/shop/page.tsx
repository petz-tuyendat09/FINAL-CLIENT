import { Suspense } from "react";
import AdminShop from "./AdminShop";
import { getProductWithPaginate } from "@/apis/product";

async function AdminShopServer() {
  const data = await getProductWithPaginate({ page: 1, limit: 6 });
  return <AdminShop initialData={data} />;
}

export default async function page() {
  return (
    <Suspense fallback="Loading">
      <AdminShopServer />
    </Suspense>
  );
}
