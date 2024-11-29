import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginateProduct, Product } from "@/types/Product";

interface Option {
  name: string;
  productQuantity: number;
}
export interface QueryParams {
  page?: number;
  productName?: string;
  status?: string;
  limit?: number;
  search?: string;
  productQuantity?: number;
  productCategory?: string | string[];
  productSlug?: string;
  productSubCategory?: string | string[];
  salePercent?: number;
  productStatus?: string;
  productBuy?: number;
  productOption?: Option[];
  lowStock?: boolean;
  sortBy?: string;
  size?: string[];
}

export interface ReviewQueryParams {
  userId?: string | undefined;
  ratingStatus?: "yes" | "no";
  sort?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/product`,
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
  tagTypes: ["Product", "ProductList", "Review"],

  endpoints: (builder) => ({
    getProducts: builder.query<PaginateProduct, QueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();

        return `?${queryParams}`;
      },
      providesTags: ["ProductList"],
    }),
    getProductsByCatId: builder.query<void, string>({
      query: (categoryId) => {
        const queryParams = new URLSearchParams({ categoryId }).toString();
        return `/by-cat-id?${queryParams}`;
      },
    }),
    getReview: builder.query<void, ReviewQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();
        return `/get-review?${queryParams}`;
      },
      providesTags: ["Review"],
    }),

    addNewProduct: builder.mutation<any, FormData>({
      query: (formData: FormData) => ({
        url: "/insert-product",
        method: "POST",
        body: formData,
      }),
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId: string) => ({
        url: `/delete-product`,
        method: "DELETE",
        body: { productId },
      }),
      // invalidatesTags: ["ProductList"],
    }),

    editProduct: builder.mutation<any, FormData>({
      query: (formData: FormData) => ({
        url: `/edit-product`,
        method: "PUT",
        body: formData,
      }),
    }),
    review: builder.mutation<any, FormData>({
      query: (formData: FormData) => ({
        url: `/review`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Review"],
    }),
    lowstockNofi: builder.mutation<any, string>({
      query: (productId) => ({
        url: `/lowstock-nofi`,
        method: "post",
        body: {
          productId: productId,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCatIdQuery,
  useLazyGetProductsQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useLowstockNofiMutation,
  useGetReviewQuery,
  useReviewMutation,
} = productsAPI;
