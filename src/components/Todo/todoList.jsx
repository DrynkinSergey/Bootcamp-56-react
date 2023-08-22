import { useSelector } from 'react-redux'
import { SingleTodo } from './singleTodo'
import {
	selectError,
	selectFilteredData,
	selectFilteredDataMemo,
	selectIsLoading,
	selectTodos,
} from '../../redux/selectors'
import { toast } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'

export const TodoList = () => {
	const data = useSelector(selectFilteredDataMemo)

	const loading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	return (
		<div className='font-josefin '>
			<ul className='rounded-md '>
				<AnimatePresence>
					{data.map((todo, idx) => (
						<SingleTodo idx={idx} key={todo.id} {...todo} />
					))}
				</AnimatePresence>
			</ul>
		</div>
	)
}
