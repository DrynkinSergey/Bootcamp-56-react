import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from './consts'

const initialState = {
	todos: [{ id: 1, title: 'Hello redux', completed: true }],
	filter: 'all',
}
export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			}

		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		case SET_FILTER:
			return {
				...state,
				filter: action.payload,
			}
		default:
			return state
	}
}
