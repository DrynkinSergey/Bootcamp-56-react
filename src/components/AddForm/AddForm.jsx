import React, { useState } from 'react'
import { useMyContext } from '../../hooks/useMyContext'

export const AddForm = () => {
	const [value, setValue] = useState('')
	const { todoApi } = useMyContext()
	const onSubmit = e => {
		e.preventDefault()
		todoApi.add(value)
		setValue('')
	}
	return (
		<form onSubmit={onSubmit}>
			<input type='text' value={value} onChange={e => setValue(e.target.value)} />
			<button>Add todo</button>
		</form>
	)
}
