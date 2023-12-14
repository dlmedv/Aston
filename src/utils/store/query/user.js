import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.movies.exp.nomoredomains.work",
  }),
  endpoints: (builder) => ({
    registry: builder.mutation({
      query: (req) => ({
        url: "/signup",
        method: "POST",
        body: req,
      }),
    }),
  }),
});
export const { useRegistryMutation } = userApi;
