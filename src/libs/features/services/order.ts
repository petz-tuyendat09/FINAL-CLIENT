import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order, PaginateOrder } from "@/types/Order";

export interface BaseOrderQuery {
  page?: number;
  limit?: number;
  year?: number;
  month?: number;
  day?: number;
  userId?: string;
  customerName?: string;
  totalPriceSort?: string;
  productQuantitySort?: string;
  orderStatus?: string;
}

interface QueryParams {
  userId?: string;
  orderId?: string;
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
    getOrders: builder.query<PaginateOrder, BaseOrderQuery>({
      query: (params: BaseOrderQuery) => {
        const queryParams = new URLSearchParams(params as any).toString();
        return `?${queryParams}`;
      },
      providesTags: ["Orders"],
    }),
    getOrdersByUserId: builder.query<Order[], QueryParams>({
      query: (params: QueryParams) => {
        const queryParams = new URLSearchParams(params as any).toString();
        return `/order-userId?${queryParams}`;
      },
      providesTags: ["Orders"],
    }),
    getOrdersByOrderId: builder.query<Order[], QueryParams>({
      query: (params: QueryParams) => {
        const queryParams = new URLSearchParams(params as any).toString();
        return `/order-id?${queryParams}`;
      },
      providesTags: ["Orders"],
    }),
    cancelOrder: builder.mutation<Order, { orderId: string }>({
      query: ({ orderId }) => ({
        url: `/cancel-order`,
        method: "POST",
        body: { orderId },
      }),
      invalidatesTags: ["Orders"],
    }),
    editOrderStatus: builder.mutation<
      Order,
      { orderId: string; newStatus: string }
    >({
      query: ({ orderId, newStatus }) => ({
        url: `/edit-order-status`,
        method: "PUT",
        body: { orderId, newStatus },
      }),
      invalidatesTags: ["Orders"],
    }),
    insertOrder: builder.mutation<Order, Order>({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersByUserIdQuery,
  useLazyGetOrdersByUserIdQuery,
  useGetOrdersByOrderIdQuery,
  useCancelOrderMutation,
  useEditOrderStatusMutation,
  useInsertOrderMutation,
} = orderAPI;
