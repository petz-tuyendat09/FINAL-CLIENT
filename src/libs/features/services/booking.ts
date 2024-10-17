import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

export const { useGetBookingByDateQuery, useLazyGetBookingByDateQuery } =
  bookingsAPI;
