import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeldVouchersResponse } from "@/types/Voucher";
import { User } from "@/types/User";

interface ChangePasswordParams {
  userId: string;
  newPassword?: string;
  displayName?: string;
  birthDay?: string;
  userEmail?: string;
  userPhone?: string;
  userImage?: any;
  userAddress?: string;
}

export interface HeldVoucherQueryParams {
  userId?: string;
  page?: number;
  salePercentSort?: "asc" | "desc";
  typeFilter?: string;
  limit?: number;
}

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/users`,
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (userId: string) => `/${userId}`,
      providesTags: ["User"],
    }),
    editUser: builder.mutation<any, ChangePasswordParams>({
      query: (formData: ChangePasswordParams) => ({
        url: ``,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    deleteCartByUser: builder.mutation<any, string>({
      query: (id: string) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    getVouchersHeld: builder.query<
      HeldVouchersResponse,
      HeldVoucherQueryParams
    >({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();
        return `/voucher-held?${queryParams}`;
      },
    }),
  }),
});

export const { useGetUserQuery, useEditUserMutation, useGetVouchersHeldQuery, useDeleteCartByUserMutation } =
  userAPI;
