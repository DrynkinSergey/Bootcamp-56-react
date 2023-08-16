import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(login({ name, password }))
		navigate('/')
		toast.success('You add post! ')
	}
	return (
		<section className='flex flex-col gap-4 mx-auto min-h-[80vh] items-center justify-center mt-4 '>
			<div className='border-2 border-black rounded-lg shadow-md px-4 py-6'>
				<h1 className='mx-auto'>LOGIN</h1>
				<form className='mx-auto flex flex-col gap-4' onSubmit={handleSubmit}>
					<input
						className='px-4 text-2xl   border-2 border-black'
						placeholder='Enter your login....'
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						placeholder='Enter your pass....'
						className='px-4 text-2xl   border-2 border-black'
						type='text'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div>
						<button type='submit' className='border-2 border-black rounded-md w-1/2  px-4 py-2'>
							LOGIN
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
