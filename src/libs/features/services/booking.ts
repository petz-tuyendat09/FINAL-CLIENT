import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BookingInformation {
  userId: string | null;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  selectedServices: {};
  bookingDate: string;
  bookingHours: string;
}

export const bookingsAPI = createApi({
  reducerPath: "bookingsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/booking`,
  }),
  tagTypes: ["Booking"],

  endpoints: (builder) => ({
    // Modified getProducts endpoint to accept a params object
    getBookingByDate: builder.query<
      string,
      { year: number; month: number; day: number }
    >({
      query: ({ year, month, day }) =>
        `/booking-by-date?year=${year}&month=${month}&day=${day}`,
      providesTags: ["Booking"],
    }),
    createBooking: builder.mutation<any, BookingInformation>({
      query: (formData: BookingInformation) => ({
        url: "", // Adjust the URL based on your API structure
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingByDateQuery,
  useLazyGetBookingByDateQuery,
  useCreateBookingMutation,
} = bookingsAPI;
