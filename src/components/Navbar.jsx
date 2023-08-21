import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../redux/Auth/selectors'
import { logoutThunk } from '../redux/Auth/operations'
import { toast } from 'react-toastify'

export const Navbar = () => {
	const links = [
		{
			src: '/',
			title: 'Home',
		},

		{
			src: '/todo',
			title: 'Todo',
		},
	]
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const { email } = useSelector(selectUser)
	const handleExit = () => {
		dispatch(logoutThunk())
			.unwrap()
			.then(() => {
				toast.success('Goobye!')
			})
	}
	return (
		<nav className='py-4 flex px-10 justify-between lg:bg-red-500 md:bg-green-500  gap-4 bg-teal-500'>
			<div className='flex gap-4'>
				{links.map(({ title, src }) => (
					<NavLink key={src} className='hover:text-black-500 text-2xl text-white font-bold' to={src}>
						{title}
					</NavLink>
				))}
			</div>
			<div>{email}</div>
			{!isLoggedIn ? (
				<div className='flex gap-4'>
					<NavLink className='hover:text-black-500 text-2xl text-white font-bold' to='/login'>
						Login
					</NavLink>
					<span> | </span>
					<NavLink className='hover:text-black-500 text-2xl text-white font-bold' to='/register'>
						Register
					</NavLink>
				</div>
			) : (
				<button onClick={handleExit} className='hover:text-black text-2xl text-white font-bold'>
					Exit
				</button>
			)}
		</nav>
	)
}
