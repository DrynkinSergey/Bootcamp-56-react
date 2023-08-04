import React from 'react'
import { StyledWrapper } from './SearchForm.styled'

export const SearchForm = ({ setQuery }) => {
	// FORM HANDLER
	const onSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const query = form.query.value
		setQuery(query)
	}
	/// JSX
	return (
		<StyledWrapper onSubmit={onSubmit}>
			<input autoComplete='off' autoFocus='on' type='text' name='query' />
			<button>Search</button>
		</StyledWrapper>
	)
}
