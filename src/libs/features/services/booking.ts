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

export interface BookingQueryParams {
  userId?: string;
  customerName?: string;
  year?: number;
  month?: number;
  day?: number;
  status?: string;
  page?: number;
  limit?: number;
}

export const bookingsAPI = createApi({
  reducerPath: "bookingsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/booking`,
  }),
  tagTypes: ["Booking"],

  endpoints: (builder) => ({
    getBookingByDate: builder.query<
      string,
      { year: number; month: number; day: number }
    >({
      query: ({ year, month, day }) =>
        `/booking-by-date?year=${year}&month=${month}&day=${day}`,
      providesTags: ["Booking"],
    }),
    getBooking: builder.query<PaginateBooking, BookingQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();

        return `?${queryParams}`;
      },
      providesTags: ["Booking"],
    }),
    createBooking: builder.mutation<any, BookingInformation>({
      query: (formData: BookingInformation) => ({
        url: "",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Booking"],
    }),
    getBookingByUserId: builder.query<PaginateBooking, BookingQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();

        return `/booking-userId/?${queryParams}`;
      },
      providesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useGetBookingByDateQuery,
  useLazyGetBookingByDateQuery,
  useCreateBookingMutation,
  useGetBookingByUserIdQuery,
} = bookingsAPI;
