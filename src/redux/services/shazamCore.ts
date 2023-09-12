import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "13ff109dcdmsh5729b51b9d2f0f1p18a6ecjsne07d79d3d727"
      ),
        headers.set("X-RapidAPI-Host", "shazam-core7.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (genre) =>
        `charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=15`,
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
