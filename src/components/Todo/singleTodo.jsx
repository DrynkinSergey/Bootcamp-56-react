import { useDispatch } from 'react-redux'
import icon from '../../assets/images/icon-check.svg'
import { updateTodoThunk } from '../../redux/operations'
import { motion } from 'framer-motion'
export const SingleTodo = ({ id, title, completed, idx }) => {
	const stylesActive = completed ? 'bg-gradient-to-br from-checkboxFrom to-checkboxTo' : ''
	const dispatch = useDispatch()
	return (
		<motion.li
			initial={{ opacity: 0, x: idx % 2 === 0 ? 200 : -200 }}
			animate={{ opacity: 1, x: 0, rotate: 0 }}
			exit={{
				opacity: 0,
				x: idx % 2 === 0 ? -200 : 200,
			}}
			transition={{ duration: 0.5 }}
			className='group  list-none cursor-pointer  py-4  border-b-white/10 border-b-[1px] text-white/80 grid  bg-darkMain grid-cols-todo items-center'
		>
			<label className='relative inline-block cursor-pointer'>
				<span
					onClick={() => dispatch(updateTodoThunk({ id, title, completed: !completed }))}
					className={`${stylesActive} absolute h-5 w-5 flex items-center justify-center  left-4 top-[-10px] rounded-full border-white/20 border-[1px]`}
				>
					{completed && <img src={icon} alt='' />}
				</span>
			</label>
			<span className={completed ? 'line-through text-white/20 transition-all' : 'transition-all'}>{title}</span>
			<button
				onClick={() => {
					// deleleTodo(id)
				}}
				className=' transition-all hidden text-white/20 hover:text-white  group-hover:block mx-auto'
			>
				X
			</button>
		</motion.li>
	)
}
