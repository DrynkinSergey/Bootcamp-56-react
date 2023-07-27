import React from 'react'
import { TodoListModules } from './components/TodoListModules/TodoListModules'
import todos from './assets/todos.json'

export const App = () => {
	return (
		<>
			<TodoListModules list={todos} />
		</>
	)
}
