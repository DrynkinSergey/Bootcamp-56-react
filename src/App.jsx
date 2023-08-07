import React, { useEffect, useState } from 'react'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { Modal } from './components/Modal/Modal'
import { PostPreview } from './components/Posts/PostPreview'

export const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [state, setState] = useState(false)
	const toggleModal = () => {
		setIsOpen(prev => !prev)
	}

	useEffect(() => {
		// console.log(state)
	}, [state])
	return (
		<div>
			{/* <button onClick={toggleModal}>Open modal</button>
			{isOpen && (
				<Modal onClose={() => setIsOpen(false)}>
					<h1>Продам квартиру</h1>
				</Modal>
			)} */}
			{/* <Counter /> */}
			{/* <ColorPicker /> */}
			<PostPreview />
			{/* <TodoList /> */}
			{/* <RegisterForm /> */}
		</div>
	)
}
