import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromFav } from '../../redux/fovouriteSlice'

export const FavItem = ({ title, body, id }) => {
	const favItem = { title, body, id }
	const dispatch = useDispatch()
	return (
		<li className='border-2 border-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer '>
			<h3 className='text-2xl italic text-teal-500 font-bold'>{title}</h3>
			<h5>{body}</h5>
			<div className='flex gap-3 my-2'>
				<button
					onClick={() => dispatch(removeFromFav(id))}
					className='hover:bg-red-500 hover:text-white border-2 border-black px-3 rounded-md'
				>
					Delete
				</button>
			</div>
		</li>
	)
}
