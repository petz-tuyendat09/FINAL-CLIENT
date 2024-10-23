import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order } from "@/types/Order";

interface QueryParams {
  userId?: string;
  serviceType?: string;
  bookingAmount?: "desc" | "asc";
}

export const orderAPI = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/orders`,
  }),
  tagTypes: ["Orders"],

  endpoints: (builder) => ({
    getOrders: builder.query<Order[], QueryParams>({
      query: (params: QueryParams) => {
        const queryParams = new URLSearchParams(params as any).toString();
        return `?${queryParams}`; // Return the URL with the query string
      },
      providesTags: ["Orders"],
    }),
    getOrdersByUserId: builder.query<Order[], QueryParams>({
      query: (params: QueryParams) => {
        const queryParams = new URLSearchParams(params as any).toString();
        return `/order-userId?${queryParams}`; // Return the URL with the query string
      },
      providesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrdersByUserIdQuery } = orderAPI;
