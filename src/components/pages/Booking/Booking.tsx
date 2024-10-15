import BookingDetail from "./BookingDetail";
import BookingForm from "./BookingForm";

export default function Booking() {
  return (
    <section className="mt-14">
      <div>
        <div>
          <h1 className="px-4 text-[100px] font-bold uppercase">
            Đặt lịch spa{" "}
          </h1>
          <div className="flex">
            <BookingForm />
            <BookingDetail />
          </div>
        </div>
      </div>
    </section>
  );
}
