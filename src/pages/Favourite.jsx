import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavPosts } from '../redux/selectors'
import { FavItem } from '../components/FovouritePosts/FavItem'

export const Favourite = () => {
	const data = useSelector(selectFavPosts)
	return (
		<div>
			<ul className='flex flex-col w-full mx-auto py-10 px-10 gap-4'>
				{data.map(post => (
					<FavItem key={post.id} {...post} />
				))}
			</ul>
		</div>
	)
}
