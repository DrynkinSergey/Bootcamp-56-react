import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	)
}
