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
    authorize: builder.mutation({
      query: (req) => ({
        url: "/signin",
        method: "POST",
        body: req,
      }),
    }),
    getDataUser: builder.query({
      query: (req) => ({
        url: "/users/me",
        method: "GET",
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("jwt")),
        },
      }),
    }),
  }),
});
export const {
  useRegistryMutation,
  useAuthorizeMutation,
  useGetDataUserQuery,
} = userApi;
