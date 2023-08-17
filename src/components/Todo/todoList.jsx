import { useSelector } from 'react-redux'
import { SingleTodo } from './singleTodo'
import { selectError, selectIsLoading } from '../../redux/selectors'
import { toast } from 'react-toastify'

export const TodoList = () => {
	const data = useSelector(state => state.todoList.todos)
	const ViewData = () => data.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()
	const loading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				{loading && <h1 className='text-white text-4xl'>Loading...</h1>}
				{error && toast.error(error)}
				{!error && !loading && <ViewData />}
			</ul>
		</div>
	)
}
