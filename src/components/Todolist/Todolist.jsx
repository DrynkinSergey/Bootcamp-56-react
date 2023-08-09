import { useMyContext } from '../../hooks/useMyContext'
import { Modal } from '../Modal/Modal'
import { useModal } from '../../hooks/useModal'

export const Todolist = () => {
	const { todos, todoApi } = useMyContext()
	const { isOpen, toggle } = useModal()
	return (
		<div>
			<h1>My super todo with context!</h1>
			<button onClick={toggle}>Open modal</button>
			<ol>
				{todos.map(({ id, todo, completed }) => (
					<li key={id}>
						<input type='checkbox' checked={completed} onChange={() => todoApi.toggle(id)} />
						{todo} <button onClick={() => todoApi.remove(id)}>Delete</button>
					</li>
				))}
				<button onClick={() => todoApi.removeSelected()}>Delete only checked</button>
			</ol>
			{isOpen && <Modal onClose={toggle}>HOOKS</Modal>}
		</div>
	)
}
