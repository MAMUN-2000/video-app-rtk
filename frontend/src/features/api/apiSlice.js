import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "  http://localhost:9000",
  }),
  endpoints: (builder) => ({
    fetchVideos: builder.query({
      query: () => "/videos",
    }),
  }),
});

export const { useFetchVideosQuery } = apiSlice;
