import {
    type BaseQueryFn,
    type FetchArgs,
    createApi,
    fetchBaseQuery,
    type FetchBaseQueryError,
    retry,
} from "@reduxjs/toolkit/query/react";
import { store } from "@/store/store";
const basePetQuery = retry(
    fetchBaseQuery({
        baseUrl: 'http://localhost:8888/api/',
        // prepareHeaders: async (headers: Headers) => {
        //     const contentType = headers.get("Content-Type");
        //     if (contentType !== "") {
        //         headers.set("Content-Type", "application/json");
        //     }
        //     if (contentType === "") {
        //         headers.delete("Content-Type");
        //     }
        //     let token = store.getState().user.token;
        //     if (token) {
        //         headers.set("authorization", `Bearer ${token}`);
        //     }
        //     return headers;
        // },
    }),
    { maxRetries: 0 }
);

export const api = createApi({
    reducerPath: "api",
    baseQuery: basePetQuery,
    keepUnusedDataFor: 0,
    refetchOnFocus: false,
    endpoints: () => ({}),
});