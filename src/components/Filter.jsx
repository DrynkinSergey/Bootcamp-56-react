import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setFilter } from '../redux/postsSlice'

export const Filter = () => {
	const [filterStr, setFilterStr] = useState('')
	const dispatch = useDispatch()
	const handleSubmit = e => {
		e.preventDefault()
		toast.success(filterStr)
		dispatch(setFilter(filterStr))
	}
	return (
		<form className='flex gap-2 mx-auto w-full justify-center mt-4' onSubmit={handleSubmit}>
			<input
				className='px-4 text-2xl  w-2/3 border-2 border-black'
				value={filterStr}
				onChange={e => setFilterStr(e.target.value)}
				type='text'
			/>
			<button className='border-2 border-black rounded-md  px-4 py-2'>Filter</button>
		</form>
	)
}
