import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	tagTypes: ['todos'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://64abd6919edb4181202ea4d0.mockapi.io',
	}),
	endpoints: builder => ({
		fetchTodos: builder.query({
			query: () => 'todos',
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

export const { useAddTodoMutation, useFetchTodosQuery, useDeleteTodoMutation } = todosApi
