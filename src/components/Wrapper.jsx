import React from 'react'

export const Wrapper = ({ children }) => {
	return (
		<>
			<h1>Title</h1>
			<hr />
			{children}
		</>
	)
}
