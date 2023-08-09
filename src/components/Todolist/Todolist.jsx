import React, { useContext } from 'react'
import { MyContext } from '../../store/context/ContextProvider'

export const Todolist = () => {
	const { todos, deleteTodo } = useContext(MyContext)
	return (
		<div>
			<h1>My super todo with context!</h1>
			<ol>
				{todos.map(({ id, todo, completed }) => (
					<li key={id}>
						{todo} <button onClick={() => deleteTodo()}>Delete</button>
					</li>
				))}
			</ol>
		</div>
	)
}
