import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SubCategories } from "@/types/SubCategories";

export const subCategoriesAPI = createApi({
  reducerPath: "subCategoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api/subcategories/",
  }),
  tagTypes: ["SubCategories"],

  endpoints: (builder) => ({
    getSubCategories: builder.query<SubCategories[], string>({
      query: (categoryName) => `?categoryName=${categoryName}`,
      providesTags: ["SubCategories"],
    }),
  }),
});

export const { useGetSubCategoriesQuery, useLazyGetSubCategoriesQuery } =
  subCategoriesAPI;
