import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/postsSlice'
import { addPostToFav } from '../../redux/fovouriteSlice'
import { motion } from 'framer-motion'

export const PostItem = ({ title, body, id, idx }) => {
	const favItem = { title, body, id }
	const dispatch = useDispatch()
	return (
		<motion.li
			initial={{ opacity: 0, x: idx % 2 === 0 ? 200 : -200, rotate: idx % 2 === 0 ? 20 : -20 }}
			animate={{ opacity: 1, x: 0, rotate: 0 }}
			exit={{
				opacity: 0,
				x: idx % 2 === 0 ? -200 : 200,
			}}
			className='border-2 border-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer '
		>
			<h3 className='text-2xl italic text-teal-500 font-bold'>{title}</h3>
			<h5>{body}</h5>
			<div className='flex gap-3 my-2'>
				<button
					onClick={() => dispatch(deletePost(id))}
					className='hover:bg-red-500 hover:text-white border-2 border-black px-3 rounded-md'
				>
					Delete
				</button>
				<button
					onClick={() => dispatch(addPostToFav(favItem))}
					className='hover:bg-blue-500 hover:text-white border-2 border-black px-3 rounded-md'
				>
					Add to favourite
				</button>
			</div>
		</motion.li>
	)
}
