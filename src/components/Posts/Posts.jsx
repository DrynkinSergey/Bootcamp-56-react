import React from 'react'
import { SinglePost } from './SinglePost'
import { StyledList } from './Posts.styled'

export const Posts = ({ data }) => {
	return (
		<StyledList>
			{data.map(post => (
				<SinglePost key={post.id} {...post} />
			))}
		</StyledList>
	)
}
