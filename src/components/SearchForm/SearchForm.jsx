import React from 'react'
import { StyledWrapper } from './SearchForm.styled'

export const SearchForm = () => {
	return (
		<StyledWrapper>
			<input autoComplete='off' autoFocus='on' type='text' name='query' />
			<button>Search</button>
		</StyledWrapper>
	)
}
