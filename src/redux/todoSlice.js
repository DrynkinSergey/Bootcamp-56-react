import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodos, updateTodoThunk } from './operations'

const slice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		loading: false,
		error: '',
	},
	reducers: {
		toggleTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			if (item) {
				item.completed = !item.completed
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.todos = action.payload
				state.loading = false
			})
			.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
				state.todos.push(payload)
			})
			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter(item => item.id !== payload)
			})
			.addCase(updateTodoThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload)
				if (item) {
					item.completed = !item.completed
				}
			})

			.addCase(fetchTodos.pending, (state, action) => {
				state.loading = true
			})

			.addCase(fetchTodos.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export const { addTodo, removeTodo, toggleTodo } = slice.actions
export const todoReducer = slice.reducer
