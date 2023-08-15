import { createReducer } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, setFilter, toggleTodo } from './actions'

const initialState = {
	todos: [{ id: 1, title: 'Hello redux', completed: true }],
	filter: 'all',
}

export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteTodo, (state, action) => {
			// state.todos = state.todos.filter(item => item.id !== action.payload)
			const itemIndex = state.todos.findIndex(item => item.id === action.payload)
			state.todos.splice(itemIndex, 1)
		})
		.addCase(toggleTodo, (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		})
		.addCase(setFilter, (state, { payload }) => {
			state.filter = payload
		})
		.addCase(addTodo, (state, { payload }) => {
			// state.todos.push(payload)
			state.todos = [...state.todos, payload]
		})
})

// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case deleteTodo.type:
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => item.id !== action.payload),
// 			}
// 		case addTodo.type:
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}

// 		case toggleTodo.type:
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		case setFilter.type:
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
