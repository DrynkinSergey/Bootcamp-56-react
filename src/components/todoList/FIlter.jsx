import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/todoList/todoSlice'

export const FIlter = () => {
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => dispatch(setFilter('all'))}>All</button>
			<button onClick={() => dispatch(setFilter('active'))}>Active</button>
			<button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
		</div>
	)
}
