import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories, CategoriesByPage } from "@/types/Categories";

interface ChangePasswordParams {
    userId: string,
    newPassword?: string,
    displayName?: string,
    birthDay?: string,
    userEmail?: string,
    userPhone?: string,
    userImage?: any,
    userAddress?: string,
}

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/users`,
    }),
    tagTypes: ["User"],

    endpoints: (builder) => ({
        getUser: builder.query<ChangePasswordParams, string>({
            query: (userId: string) => `/${userId}`, // lấy thông tin người dùng theo userId
            providesTags: ["User"],
        }),
        editUser: builder.mutation<
            any, ChangePasswordParams
        >({
            query: (formData: ChangePasswordParams) => ({
                url: ``,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetUserQuery,
    useEditUserMutation,
} = userAPI;
