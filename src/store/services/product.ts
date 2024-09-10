import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginateProduct, Product } from "@/types/Product";

interface PageQuery {
  page: number;
  limit: number;
}

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api/product/",
  }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: (query) => `by-query/${query}`,
      providesTags: ["Product"],
    }),
    addNewProduct: builder.mutation<any, FormData>({
      query: (formData: FormData) => ({
        url: "",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId: string) => ({
        url: `/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    getProductByPage: builder.query<PaginateProduct, PageQuery>({
      query: ({ page, limit }) => `page/?${page}?limit=${limit}`,
      providesTags: ["Product"],
    }),
    editProduct: builder.mutation<any, { id: string; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductByPageQuery,
  useGetProductByPageQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productsAPI;
