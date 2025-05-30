// src/api/userApi.js
import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    chooseGenres: builder.mutation({
      query: (genres) => ({
        url: "/user/genres",
        method: "PATCH",
        body: genres,
      }),
    }),
    getProfile: builder.query({
      query: () => "/user/profile",
    }),
    getUserPoints: builder.query({
      query: () => "/user/points",
    }),
    updateProfilePhoto: builder.mutation({
      query: (formData) => ({
        url: "/user/update-profile-photo",
        method: "PUT",
        body: formData,
        formData: true,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useSignupMutation,
  useChooseGenresMutation,
  useGetProfileQuery,
    useGetUserPointsQuery, useUpdateProfilePhotoMutation
} = userApi;
