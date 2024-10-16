import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItem, RemoveCartItem } from "@/types/Cart";

export const cartAPI = createApi({
  reducerPath: "cartAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/cart`,
  }),

  endpoints: (builder) => ({
    addItemToCart: builder.mutation<CartItem, CartItem>({
      query: (formData: CartItem) => ({
        url: "",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    removeItemFromCart: builder.mutation<RemoveCartItem, RemoveCartItem>({
      query: (formData: RemoveCartItem) => ({
        url: "/remove-item",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
    }),
    getCartByUserId: builder.query<CartItem, string>({
      query: (userId) => ({
        url: `/${userId}`,
        method: "GET",
        credentials: "include",
      }),
    })
  }),
});

export const { useAddItemToCartMutation, useRemoveItemFromCartMutation, useGetCartByUserIdQuery } = cartAPI;
