import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home, Login, NotFound, Register, Todo } from './pages'
// import { NotFound } from './pages/NotFound'
// import { Login } from './pages/Login'
// import { Todo } from './pages/Todo'
// import { Register } from './pages/Register'
import { PrivateRoute } from './HOC/PrivateRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refresh } from './redux/Auth/operations'

export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refresh())
	}, [dispatch])
	return (
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
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
