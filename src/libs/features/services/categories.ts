import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories, CategoriesByPage } from "@/types/Categories";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api/categories/",
  }),
  tagTypes: ["Categories"],

  endpoints: (builder) => ({
    getCategories: builder.query<Categories[] | Categories, string | void>({
      query: (categoryId?: string) =>
        categoryId ? `?categoryId=${categoryId}` : "",
      providesTags: ["Categories"],
    }),
    getCategoriesPaginate: builder.query<CategoriesByPage, number>({
      query: (page: number) => `page?page=${page}`,
      providesTags: ["Categories"],
    }),
    editCategory: builder.mutation<
      any,
      { categoryId: string; editCategoryName: string }
    >({
      query: ({ categoryId, editCategoryName }) => ({
        url: "", // Adjust the URL based on your API structure
        method: "PUT",
        body: {
          categoryId: categoryId,
          editCategoryName: editCategoryName,
        },
      }),
      invalidatesTags: ["Categories"], // Correcting to invalidate tags after mutation
    }),
    addCategory: builder.mutation<any, { newCategoryName: string }>({
      query: ({ newCategoryName }) => ({
        url: "", // Adjust the URL based on your API structure
        method: "POST",
        body: {
          newCategoryName: newCategoryName,
        },
      }),
      invalidatesTags: ["Categories"], // Correcting to invalidate tags after mutation
    }),
    deleteCategory: builder.mutation<any, { deleteCategoryId: string }>({
      query: ({ deleteCategoryId }) => ({
        url: "", // Adjust the URL based on your API structure
        method: "DELETE",
        body: {
          deleteCategoryId: deleteCategoryId,
        },
      }),
      invalidatesTags: ["Categories"], // Correcting to invalidate tags after mutation
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoriesPaginateQuery,
  useLazyGetCategoriesPaginateQuery,
  useEditCategoryMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesAPI;
