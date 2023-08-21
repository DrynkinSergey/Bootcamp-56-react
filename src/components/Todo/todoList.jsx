import { useSelector } from 'react-redux'
import { SingleTodo } from './singleTodo'
import { selectError, selectIsLoading } from '../../redux/selectors'
import { toast } from 'react-toastify'
import { useFetchTodosQuery } from '../../redux/rtkQUERY/todosApi'

export const TodoList = () => {
	const { data = [] } = useFetchTodosQuery()
	const ViewData = () => data.map((todo, idx) => <SingleTodo idx={idx} key={todo.id} {...todo} />).reverse()
	const loading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	return (
		<div className='font-josefin '>
			<ul className='rounded-md '>
				{loading && !data.length && <h1 className='text-white text-4xl'>Loading...</h1>}
				{error && toast.error(error)}
				{!error && <ViewData />}
			</ul>
		</div>
	)
}
