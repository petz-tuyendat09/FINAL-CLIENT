"use client";

import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import { OrderProvider } from "./store/OrderContext";

export default function Orders() {
  return (
    <OrderProvider>
      <h1 className="my-4 text-2xl font-semibold">Danh sách đơn hàng đã đặt</h1>

      <OrderFilter />
      <OrderTable />
    </OrderProvider>
  );
}
