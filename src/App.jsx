import React from 'react'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
import { RegisterForm } from './components/RegisterForm/RegisterForm'

export const App = () => {
	return (
		<div>
			{/* <Counter /> */}
			{/* <ColorPicker /> */}
			{/* <TodoList /> */}
			<RegisterForm />
		</div>
	)
}
