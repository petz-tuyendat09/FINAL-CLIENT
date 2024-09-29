import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {RegisterUser,VerifyEmail} from "@/types/User"

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888/api/auth/",
  }),

  endpoints: (builder) => ({
    signUp: builder.mutation<RegisterUser, RegisterUser>({
        query: (formData: RegisterUser) => ({
          url: "signup",
          method: "POST",
          body: formData,
        }),
      }),
      verifyEmail: builder.mutation<VerifyEmail, VerifyEmail>({
        query: (formData: VerifyEmail) => ({
          url: "verify-otp",
          method: "POST",
          body: formData,
        }),
      }),
      resendOTP: builder.mutation<any, string>({
        query: (email: string) => ({
          url: "resend-otp",
          method: "POST",
          body: email,
        }),
      }),
  }),
});

export const { useSignUpMutation,useVerifyEmailMutation } = authAPI;
