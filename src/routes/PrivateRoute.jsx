import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/ContextProvider'

export const PrivateRoute = ({ children }) => {
	const { user } = useContext(AuthContext)
	const location = useLocation()
	console.log(location)
	if (!user) {
		return <Navigate state={{ from: location }} to='/login' />
	}
	return children
}
