"use client";

import { BookingProvider } from "./store/BookingContext";
import BookingsTable from "./BookingsTable";
import BookingsFilter from "./BookingsFilter";

function Bookings() {
  return (
    <>
      <BookingsFilter />
      <BookingsTable />
    </>
  );
}

export default function BookingsPage() {
  return (
    <BookingProvider>
      <Bookings />
    </BookingProvider>
  );
}
