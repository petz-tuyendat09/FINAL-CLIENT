import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SubCategories } from "@/types/SubCategories";

interface QueryParams {
  animalType?: string;
  categoryId?: string;
}

export const subCategoriesAPI = createApi({
  reducerPath: "subCategoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api/subcategories/",
  }),
  tagTypes: ["SubCategories"],

  endpoints: (builder) => ({
    // Modified getProducts endpoint to accept a params object
    getSubCategories: builder.query<SubCategories[], QueryParams>({
      query: (params: QueryParams) => {
        const queryParams = new URLSearchParams(
          params as Record<string, string>,
        ).toString();

        return `?${queryParams}`; // Return the URL with the query string
      },
      providesTags: ["SubCategories"],
    }),
  }),
});

export const { useGetSubCategoriesQuery, useLazyGetSubCategoriesQuery } =
  subCategoriesAPI;
