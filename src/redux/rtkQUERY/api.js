import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
	reducerPath: 'booksApi',
	tagTypes: ['books'],
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4444/',
	}),
	endpoints: builder => ({
		fetchBooks: builder.query({
			query: () => 'books',
			providesTags: ['books'],
		}),
		addBook: builder.mutation({
			query: body => ({
				url: 'books',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['books'],
		}),
		deleteBook: builder.mutation({
			query: id => ({
				url: `books/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['books'],
		}),
	}),
})

export const { useFetchBooksQuery, useAddBookMutation, useDeleteBookMutation } = booksApi
