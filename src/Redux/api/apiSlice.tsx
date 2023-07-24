import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-b5bj.onrender.com",
  }),

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    getBookById: builder.query({
      query: (id) => `/book/${id}`,
    }),

    bookPost: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useBookPostMutation,
  useDeleteBookMutation,
} = booksApi;
