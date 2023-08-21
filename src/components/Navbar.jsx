import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectUser } from '../redux/Auth/selectors'

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

		{
			src: '/register',
			title: 'Register',
		},
		{
			src: '/login',
			title: 'Login',
		},
	]
	const { email } = useSelector(selectUser)
	return (
		<nav className='py-4 flex px-10 lg:bg-red-500 md:bg-green-500  gap-4 bg-teal-500'>
			{links.map(({ title, src }) => (
				<NavLink key={src} className='hover:text-black-500 text-2xl text-white font-bold' to={src}>
					{title}
				</NavLink>
			))}
			<div>{email}</div>
		</nav>
	)
}
