import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodos, updateTodoThunk } from './operations'

const pending = (state, action) => {
	state.loading = true
	state.error = ''
}

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

			.addCase(fetchTodos.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addMatcher(
				isAnyOf(fetchTodos.fulfilled, addTodoThunk.fulfilled, deleteTodoThunk.fulfilled, updateTodoThunk.fulfilled),
				(state, action) => {
					state.loading = false
				}
			)
			.addMatcher(
				isAnyOf(fetchTodos.pending, addTodoThunk.pending, deleteTodoThunk.pending, updateTodoThunk.pending),
				pending
			)
	},
})

export const { addTodo, removeTodo, toggleTodo } = slice.actions
export const todoReducer = slice.reducer
