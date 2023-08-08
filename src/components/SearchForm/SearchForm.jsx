import React, { useContext } from 'react'
import { StyledWrapper } from './SearchForm.styled'
import { MyContext } from '../../context/MyContext'

export const SearchForm = ({ setQuery }) => {
	// FORM HANDLER
	const onSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const query = form.query.value
		setQuery(query)
	}
	const { user } = useContext(MyContext)
	/// JSX
	return (
		<StyledWrapper onSubmit={onSubmit}>
			<h2>{user.username}</h2>
			<input autoComplete='off' autoFocus='on' type='text' name='query' />
			<button>Search</button>
		</StyledWrapper>
	)
}
