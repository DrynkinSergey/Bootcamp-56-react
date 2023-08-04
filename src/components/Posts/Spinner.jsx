import React from 'react'
import { Comment } from 'react-loader-spinner'
import { styled } from 'styled-components'

export const Spinner = ({ height = 380, width = 380 }) => {
	return (
		<Wrapper>
			<Comment
				visible={true}
				height={height}
				width={width}
				ariaLabel='comment-loading'
				wrapperStyle={{}}
				wrapperClass='comment-wrapper'
				color='#fff'
				backgroundColor='#F4442E'
			/>
			<h1>Loading...</h1>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: grid;
	place-items: center;
	min-height: 80vh;
`
