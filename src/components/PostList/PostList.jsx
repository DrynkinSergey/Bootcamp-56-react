import React from 'react'
import { useSelector } from 'react-redux'
import { PostItem } from './PostItem'

export const PostList = () => {
	const posts = useSelector(state => state.postList.posts)
	return (
		<ul className='flex flex-col w-full mx-auto py-10 px-10 gap-4'>
			{posts.map(post => (
				<PostItem key={post.id} {...post} />
			))}
		</ul>
	)
}
