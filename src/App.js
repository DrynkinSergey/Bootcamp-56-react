import React from 'react'
import { TodoListModules } from './components/TodoListModules/TodoListModules'
import todos from './assets/todos.json'
import { TodoListStyled } from './components/TodoListStyled/TodoListStyled'

export const App = () => {
	return (
		<>
			<TodoListModules list={todos} />
			<TodoListStyled list={todos} />
		</>
	)
}
