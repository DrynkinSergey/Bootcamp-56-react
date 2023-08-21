import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/Auth/operations'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

//HOC - High Order Component

export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const location = useLocation()
	console.log(location)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const credentials = { email, password }
		dispatch(loginThunk(credentials))
			.unwrap()
			.then(res => {
				console.log(res)
				toast.success(`Welcome back, ${res.user.name}`)
				navigate(location.state?.from || '/')
			})
			.catch(err => {
				toast.error('Try another data!!')
			})
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
							LOGIN
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
