import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggle } from '../../redux/todoList/actions'

export const TodoList = () => {
	const [newTodoValue, setNewTodoValue] = useState('')

	const { todos } = useSelector(state => state.todoList)

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
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={newTodoValue}
					onChange={e => setNewTodoValue(e.target.value)}
					placeholder='enter new todo'
					type='text'
				/>
				<button>Add todo</button>
			</form>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<input type='checkbox' onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
						{todo.title} <button onClick={() => removeTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
