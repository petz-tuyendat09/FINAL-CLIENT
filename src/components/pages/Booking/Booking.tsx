"use client";

import useBookingForm from "./_hook/useBookingForm";
import BookingDetail from "./BookingDetail";
import BookingForm from "./BookingForm";

export default function Booking() {
  const { formik } = useBookingForm();

  return (
    <section className="mt-14">
      <div>
        <div>
          <h1 className="px-4 text-[100px] font-bold uppercase">
            Đặt lịch spa
          </h1>
          <div className="xl:flex">
            <BookingForm formik={formik} />
            <BookingDetail formik={formik} />
          </div>
        </div>
      </div>
    </section>
  );
}
