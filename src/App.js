import React from 'react'
import todos from './assets/todos.json'
import { TodoListStyled } from './components/TodoListStyled/TodoListStyled'

export const App = () => {
	return (
		<>
			<TodoListStyled list={todos} message='Hello PropTypes' />
		</>
	)
}
