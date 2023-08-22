import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/Auth/selectors'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	if (isLoggedIn) {
		return <Navigate to='/todo' />
	}
	return children
}
