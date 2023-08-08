import React, { createContext, useEffect, useState } from 'react'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { Modal } from './components/Modal/Modal'
import { PostPreview } from './components/Posts/PostPreview'
import { Employee } from './components/Employees/Employee'

export const App = ({ title }) => {
	return (
		<div>
			{/* <Counter /> */}
			{/* <ColorPicker /> */}

			<PostPreview />
			{/* <TodoList /> */}
			{/* <RegisterForm /> */}
		</div>
	)
}
