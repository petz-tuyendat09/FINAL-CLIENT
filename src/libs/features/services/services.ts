import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Services } from "@/types/Services";

interface QueryParams {
  serviceType?: string;
  bookingAmount?: "desc" | "asc";
}

export const servicesAPI = createApi({
  reducerPath: "servicesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/services`,
  }),
  tagTypes: ["Services"],

  endpoints: (builder) => ({
    getServices: builder.query<Services[], QueryParams>({
      query: (params: QueryParams) => {
        const queryParams = new URLSearchParams(params as any).toString();

        return `?${queryParams}`; // Return the URL with the query string
      },
      providesTags: ["Services"],
    }),
  }),
});

export const { useGetServicesQuery } = servicesAPI;
