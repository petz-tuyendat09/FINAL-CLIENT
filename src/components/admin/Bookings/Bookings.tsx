"use client";

import { BookingProvider } from "./store/BookingContext";
import BookingsTable from "./BookingsTable";
import BookingsFilter from "./BookingsFilter";

export default function Bookings() {
  return (
    <BookingProvider>
      <h1 className="mb-4 text-2xl font-semibold">Danh sách dịch vụ đã đặt</h1>
      <BookingsFilter />
      <BookingsTable />
    </BookingProvider>
  );
}
