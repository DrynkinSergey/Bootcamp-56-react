import React from 'react'
import { StyledWrapper } from './SearchForm.styled'

export const SearchForm = ({ setQuery }) => {
	const onSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const query = form.elements.query.value
		setQuery(query)
		form.reset()
	}
	return (
		<StyledWrapper onSubmit={onSubmit}>
			<input autoComplete='off' autoFocus='on' type='text' name='query' />
			<button>Search</button>
		</StyledWrapper>
	)
}
