import React from 'react'
import { Flex, StyledPost, StyledTags, StyledTitle, Tag } from './Posts.styled'
import { AiFillHeart } from 'react-icons/ai'
export const SinglePost = ({ title, body, tags, reactions }) => {
	return (
		<StyledPost>
			<div>
				<StyledTitle>{title}</StyledTitle>
				<h3>{body}</h3>
			</div>
			<StyledTags>
				{tags.map(tag => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</StyledTags>
			<Flex>
				<AiFillHeart color='red' />
				{reactions}
			</Flex>
		</StyledPost>
	)
}
