import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home, Login, NotFound, Register, Todo } from './pages'

import { PrivateRoute } from './HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './redux/Auth/operations'
import { selectRefresh } from './redux/Auth/selectors'
import { Loader } from './components/Loader'
import { PublicRoute } from './HOC/PublicRoute'

export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	const isRefresh = useSelector(selectRefresh)
	return isRefresh ? (
		<Loader />
	) : (
		<div style={{ outline: 'hidden' }}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path='todo'
						element={
							<PrivateRoute>
								<Todo />
							</PrivateRoute>
						}
					/>
					<Route
						path='register'
						element={
							<PublicRoute>
								<Register />
							</PublicRoute>
						}
					/>
					<Route
						path='login'
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
