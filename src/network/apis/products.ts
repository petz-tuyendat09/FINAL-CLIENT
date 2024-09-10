import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginateProduct, Product } from "@/types/Product";
import { api } from "../api";
import { IProduct } from "@/interfaces/products.interface";

interface PageQuery {
  page: number;
  limit: number;
}
const url = "product";
export const productsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
        query: () => ({
            url: url,
        }),
        transformResponse: (response: IProduct[]) => {
            return response;
        },
    })
    // addNewProduct: builder.mutation<any, FormData>({
    //   query: (formData: FormData) => ({
    //     url: "",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // deleteProduct: builder.mutation<void, string>({
    //   query: (productId: string) => ({
    //     url: `/${productId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // getProductByPage: builder.query<PaginateProduct, PageQuery>({
    //   query: ({ page, limit }) => `page/?${page}?limit=${limit}`,
    //   providesTags: ["Product"],
    // }),
    // editProduct: builder.mutation<any, { id: string; formData: FormData }>({
    //   query: ({ id, formData }) => ({
    //     url: `/${id}`,
    //     method: "PUT",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllProductsQuery
//   useLazyGetProductByPageQuery,
//   useGetProductByPageQuery,
//   useAddNewProductMutation,
//   useDeleteProductMutation,
//   useEditProductMutation,
} = productsAPI;
