import React from 'react'
import { Header } from '../Header/Header'
import { Todolist } from '../Todolist/Todolist'
import { AddForm } from '../AddForm/AddForm'

export const HomePage = () => {
	return (
		<>
			<Header />
			<AddForm />
			<Todolist />
		</>
	)
}
