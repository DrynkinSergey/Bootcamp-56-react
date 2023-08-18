import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	const links = [
		{
			src: '/',
			title: 'Home',
		},
		{
			src: '/posts',
			title: 'Posts',
		},
		{
			src: '/favourite',
			title: 'Favourite',
		},
		{
			src: '/todo',
			title: 'Todo',
		},
		{
			src: '/books',
			title: 'Book SHELF',
		},
	]
	return (
		<nav className='py-4 flex px-10 lg:bg-red-500 md:bg-green-500  gap-4 bg-teal-500'>
			{links.map(({ title, src }) => (
				<NavLink key={src} className='hover:text-black-500 text-2xl text-white font-bold' to={src}>
					{title}
				</NavLink>
			))}
		</nav>
	)
}
