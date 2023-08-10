import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import { StyledLink } from '../components/Navbar'

export const About = () => {
	return (
		<div>
			<div>
				<StyledLink to='mission'>Mission</StyledLink>
				<StyledLink to='company'>Company</StyledLink>
			</div>
			<Outlet />
		</div>
	)
}
