import { PaginateBooking } from "@/types/Booking";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BookingInformation {
  userId: string | null;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  selectedServices: {};
  bookingDate: string;
  bookingHours: string;
  totalPrice: Number;
}

interface BookingUserIdQueryParams {
  userId?: string;
  year?: number;
  month?: number;
  day?: number;
  status?: string;
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
    getBookingByUserId: builder.query<
      PaginateBooking,
      BookingUserIdQueryParams
    >({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();

        console.log(queryParams);

        return `/booking-userId/?${queryParams}`;
      },
      providesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingByDateQuery,
  useLazyGetBookingByDateQuery,
  useCreateBookingMutation,
  useGetBookingByUserIdQuery,
} = bookingsAPI;
