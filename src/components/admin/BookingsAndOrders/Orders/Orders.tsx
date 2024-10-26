"use client";

import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import { OrderProvider } from "./store/OrderContext";

export default function Orders() {
  return (
    <OrderProvider>
      <OrderFilter />
      <OrderTable />
    </OrderProvider>
  );
}
