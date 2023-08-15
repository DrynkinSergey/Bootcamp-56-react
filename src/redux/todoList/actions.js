import { createAction, nanoid } from '@reduxjs/toolkit'

export const deleteTodo = createAction('todos/delete')
export const toggleTodo = createAction('todos/toggle')
export const setFilter = createAction('todos/setFilter')
export const addTodo = createAction('todos/add', title => {
	return {
		payload: {
			title,
			id: nanoid(),
			completed: false,
		},
	}
})
// export const deleteTodo = id => {
// 	return {
// 		type: DELETE_TODO,
// 		payload: id,
// 	}
// }
// export const addTodo = title => {
// 	return {
// 		type: ADD_TODO,
// 		payload: { title, id: nanoid(), completed: false },
// 	}
// }
// export const toggle = id => {
// 	return {
// 		type: TOGGLE_TODO,
// 		payload: id,
// 	}
// }
// export const setFilter = filter => {
// 	return {
// 		type: SET_FILTER,
// 		payload: filter,
// 	}
// }
