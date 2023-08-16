import React from 'react'
import { useSelector } from 'react-redux'
import { PostItem } from './PostItem'
import { Filter } from '../Filter'

export const PostList = () => {
	const posts = useSelector(state => state.postList.posts)
	const filter = useSelector(state => state.postList.filter)
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
			<Filter />
			<ul className='flex flex-col w-full mx-auto py-10 px-10 gap-4'>
				{filteredData.map(post => (
					<PostItem key={post.id} {...post} />
				))}
			</ul>
		</>
	)
}
