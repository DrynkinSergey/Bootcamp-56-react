import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'
import { Todo } from './pages/Todo'
import { Register } from './pages/Register'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='todo' element={<Todo />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
