import { nanoid } from 'nanoid'
import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from './consts'

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id,
	}
}
export const addTodo = title => {
	return {
		type: ADD_TODO,
		payload: { title, id: nanoid(), completed: false },
	}
}
export const toggle = id => {
	return {
		type: TOGGLE_TODO,
		payload: id,
	}
}
export const setFilter = filter => {
	return {
		type: SET_FILTER,
		payload: filter,
	}
}
