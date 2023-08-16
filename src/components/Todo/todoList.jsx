import { SingleTodo } from './singleTodo'

export const TodoList = () => {
	const ViewData = () => [].map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
			</ul>
		</div>
	)
}
