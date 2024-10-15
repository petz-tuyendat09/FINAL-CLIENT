import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartItem, Cart } from "@/types/Cart";

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
  }),
});

export const { useAddItemToCartMutation } = cartAPI;
