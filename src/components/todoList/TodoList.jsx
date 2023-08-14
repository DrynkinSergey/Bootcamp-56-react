import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggle } from '../../redux/todoList/actions'
import { FIlter } from './FIlter'
import { selectFilter, selectFilteredData } from '../../redux/todoList/selectors'

export const TodoList = () => {
	const [newTodoValue, setNewTodoValue] = useState('')

	const filter = useSelector(selectFilter)
	const filteredData = useSelector(selectFilteredData)

	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addTodo(newTodoValue))
	}

	const removeTodo = id => {
		//actionCreator
		dispatch(deleteTodo(id))
		// dispatch({
		// 	type: DELETE_TODO,
		// 	payload: id,
		// })
	}
	const toggleTodo = id => {
		dispatch(toggle(id))
	}
	// const getFilteredData = () => {
	// 	switch (filter) {
	// 		case 'active':
	// 			return todos.filter(item => !item.completed)
	// 		case 'completed':
	// 			return todos.filter(item => item.completed)
	// 		default:
	// 			return todos
	// 	}
	// }
	// const filteredData = getFilteredData()
	return (
		<div>
			<h1>НАШ ФІЛЬТЕР : {filter}</h1>
			<form onSubmit={handleSubmit}>
				<input
					value={newTodoValue}
					onChange={e => setNewTodoValue(e.target.value)}
					placeholder='enter new todo'
					type='text'
				/>
				<button>Add todo</button>
			</form>
			<br />
			<FIlter />
			<br />

			<ul>
				{filteredData.map(todo => (
					<li key={todo.id}>
						<input type='checkbox' onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
						{todo.title} <button onClick={() => removeTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
