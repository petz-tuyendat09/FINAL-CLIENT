import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories } from "@/types/Categories";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api/categories/",
  }),
  tagTypes: ["Categories"],

  endpoints: (builder) => ({
    getCategories: builder.query<Categories[], string>({
      query: () => "",
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
