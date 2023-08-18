import React from 'react'
import { useSelector } from 'react-redux'
import { PostItem } from './PostItem'
import { Filter } from '../Filter'
import { selectFilter, selectPosts } from '../../redux/selectors'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export const PostList = () => {
	const navigate = useNavigate()

	const posts = useSelector(selectPosts)
	const filter = useSelector(selectFilter)
	const getFilteredData = () => {
		return posts.filter(
			post =>
				post.title.toLowerCase().includes(filter.toLowerCase()) ||
				post.body.toLowerCase().includes(filter.toLowerCase())
		)
	}
	const filteredData = getFilteredData()
	return (
		<>
			<button
				onClick={() => navigate('/addPost')}
				className='fixed flex justify-center items-center hover:bg-blue-500 hover:cursor-pointer w-[40px] h-[40px] rounded-full right-4 bottom-4 bg-green-500 shadow-md'
			>
				+
			</button>
			<Filter />
			<ul className='flex flex-col w-full mx-auto py-10 px-10 gap-4'>
				<AnimatePresence mode='wait'>
					{filteredData.map((post, idx) => (
						<PostItem key={post.id} {...post} idx={idx} />
					))}
				</AnimatePresence>
			</ul>
		</>
	)
}
