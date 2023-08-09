import React, { useContext } from 'react'
import { MyContext } from '../../store/context/ContextProvider'

export const Todolist = () => {
	const { todos, todoApi } = useContext(MyContext)
	return (
		<div>
			<h1>My super todo with context!</h1>
			<ol>
				{todos.map(({ id, title, completed }) => (
					<li key={id}>
						<input type='checkbox' checked={completed} onChange={() => todoApi.toggle(id)} />
						{title} <button onClick={() => todoApi.remove(id)}>Delete</button>
					</li>
				))}
				<button onClick={() => todoApi.removeSelected()}>Delete only checked</button>
			</ol>
		</div>
	)
}
