import React, { useContext, useState } from 'react'
import { MyContext } from '../../store/context/ContextProvider'

export const AddForm = () => {
	const [value, setValue] = useState('')
	const { todoApi } = useContext(MyContext)
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
