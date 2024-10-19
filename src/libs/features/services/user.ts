import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories, CategoriesByPage } from "@/types/Categories";

interface ChangePasswordParams {
    userId: string,
    newPassword?: string,
    displayName?: string,
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
    useEditUserMutation,
} = userAPI;
