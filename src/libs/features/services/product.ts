import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginateProduct, Product } from "@/types/Product";

interface PageQuery {
  page: number;
  limit: number;
}

export interface QueryParams {
  page?: number;
  productName?: string;
  status?: string;
  limit?: number;
  productCategory?: string | string[];
  productSlug?: string;
  productSubCategory?: string | string[];
  salePercent?: number;
  productStatus?: string;
  animalType?: string | string[];
  productBuy?: number;
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
    getProducts: builder.query<PaginateProduct, QueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();
        console.log(queryParams);

        return `?${queryParams}`;
      },
    }),

    addNewProduct: builder.mutation<any, FormData>({
      query: (formData: FormData) => ({
        url: "insert-product",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId: string) => ({
        url: `/delete-product`,
        method: "DELETE",
        body: {
          productId: productId,
        },
      }),
      invalidatesTags: ["Product"],
    }),

    editProduct: builder.mutation<any, FormData>({
      query: (formData: FormData) => ({
        url: `/edit-product`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productsAPI;
