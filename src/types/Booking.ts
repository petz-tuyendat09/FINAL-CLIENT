export enum BookingStatus {
  Booked = "Đã đặt",
  Done = "Đã hoàn thành",
  Canceled = "Đã hủy",
}

export interface Booking {
  _id: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string[]; // Array of service IDs
  bookingDate: string; // ISO string for date
  bookingStatus: string; // Enum type for booking status
  totalPrice: number;
  bookingHours: string; // Time in "HH:MM" format
  __v: number;
}

export interface PaginateBooking {
  bookings: Booking[];
  page: number;
  totalPages: number;
}
