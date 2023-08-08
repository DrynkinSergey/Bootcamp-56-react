import { nanoid } from 'nanoid'

export const initialState = {
	todos: [],
	newTodoValue: '',
}

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				newTodoValue: action.payload,
			}
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, { id: nanoid(), todo: action.payload, completed: false }],
			}
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map(todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
			}
		default:
			return state
	}
}
