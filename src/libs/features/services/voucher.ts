import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VoucherPaginate } from "@/types/Voucher";

export interface QueryParams {
  page?: number;
  salePercentSort?: string; // asc || desc
  pointSort?: string; // asc || desc
  typeFilter?: string; // ON_ORDER_SAVINGS || PER_ITEM_SAVINGS
  limit?: number;
}

export interface ChangeVoucherParams {
  voucherPoint: number;
  voucherId: string;
  userId: string;
}

export const vouchersAPI = createApi({
  reducerPath: "vouchersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/voucher`,
  }),
  tagTypes: ["Voucher"],

  endpoints: (builder) => ({
    getVouchers: builder.query<VoucherPaginate, QueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();

        return `?${queryParams}`;
      },
      providesTags: ["Voucher"],
    }),
    insertVoucher: builder.mutation<
      void,
      {
        voucherType: string;
        salePercent: number;
        voucherPoint: number;
        voucherDescription: string;
      }
    >({
      query: ({
        voucherType,
        salePercent,
        voucherPoint,
        voucherDescription,
      }) => ({
        url: `/`,
        method: "POST",
        body: {
          voucherType: voucherType,
          salePercent: salePercent,
          voucherPoint: voucherPoint,
          voucherDescription: voucherDescription,
        },
      }),
      invalidatesTags: ["Voucher"],
    }),
    deleteVoucher: builder.mutation<
      any,
      { deleteVoucherId: string | string[] }
    >({
      query: ({ deleteVoucherId }) => ({
        url: "",
        method: "DELETE",
        body: {
          deleteVoucherId: Array.isArray(deleteVoucherId)
            ? deleteVoucherId
            : [deleteVoucherId],
        },
      }),
      invalidatesTags: ["Voucher"],
    }),
    editVoucher: builder.mutation<
      void,
      {
        editVoucherId: string;
        newVoucherType: string;
        newSalePercent: number;
        newVoucherPoint: number;
        newVoucherDescription: string;
      }
    >({
      query: ({
        editVoucherId,
        newVoucherType,
        newSalePercent,
        newVoucherPoint,
        newVoucherDescription,
      }) => ({
        url: `/`,
        method: "PUT",
        body: {
          editVoucherId: editVoucherId,
          newVoucherType: newVoucherType,
          newSalePercent: newSalePercent,
          newVoucherPoint: newVoucherPoint,
          newVoucherDescription: newVoucherDescription,
        },
      }),
      invalidatesTags: ["Voucher"],
    }),
    changeVoucher: builder.mutation<any, ChangeVoucherParams>({
      query: (formData: ChangeVoucherParams) => ({
        url: "/change-voucher",
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Voucher"],
    }),
  }),
});

export const {
  useGetVouchersQuery,
  useInsertVoucherMutation,
  useDeleteVoucherMutation,
  useEditVoucherMutation,
  useChangeVoucherMutation,
} = vouchersAPI;
