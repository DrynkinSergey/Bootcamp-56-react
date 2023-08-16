import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className='py-4 flex px-10 lg:bg-red-500 md:bg-green-500  gap-4 bg-teal-500'>
			<NavLink className='hover:text-black-500 text-2xl text-white font-bold' to='/'>
				Home
			</NavLink>
			<NavLink className='hover:text-black-500 text-2xl text-white font-bold' to='/posts'>
				Posts
			</NavLink>
			<NavLink className='hover:text-black-500 text-2xl text-white font-bold' to='/favourite'>
				Favourite
			</NavLink>
		</nav>
	)
}
