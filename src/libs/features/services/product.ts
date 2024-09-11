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
    // Prepare headers dynamically
    // prepareHeaders: (headers, { getState }) => {
    //   // Ensure Content-Type is correctly set
    //   const contentType = headers.get("Content-Type");
    //   if (contentType !== "") {
    //     headers.set("Content-Type", "application/json");
    //   }
    //   if (contentType === "") {
    //     headers.delete("Content-Type");
    //   }

    //   // Get the token from the store and set the Authorization header
    //   const token = (getState() as RootState).user.token; // Adjust based on your state structure
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    // Modified getProducts endpoint to accept a params object
    getProducts: builder.query<Product[], Record<string, any>>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>
        ).toString();

        return `?${queryParams}`; // Return the URL with the query string
      },
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
