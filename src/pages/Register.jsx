import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/Auth/operations'

export const Register = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		const credentials = { name, password, email }
		dispatch(registerThunk(credentials))
	}

	return (
		<section className='flex flex-col gap-4 mx-auto min-h-[80vh] items-center justify-center mt-4 '>
			<div className='border-2 border-black rounded-lg shadow-md px-4 py-6'>
				<h1 className='mx-auto'>Register</h1>
				<form className='mx-auto flex flex-col gap-4' onSubmit={handleSubmit}>
					<input
						className='px-4 text-2xl   border-2 border-black'
						placeholder='Enter your name....'
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						className='px-4 text-2xl   border-2 border-black'
						placeholder='Enter your email....'
						type='text'
						value={email}
						onChange={e => setEmail(e.target.value)}
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
							Register
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
