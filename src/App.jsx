import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Posts } from './pages/Posts'
import { Favourite } from './pages/Favourite'
import { AddPost } from './pages/AddPost'
import { Login } from './pages/Login'
import { useSelector } from 'react-redux'
import { Todo } from './pages/Todo'

export const App = () => {
	const isLoggedIn = useSelector(state => state.user.isLoggedIn)
	if (!isLoggedIn) {
		return (
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		)
	}
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='posts' element={<Posts />} />
					<Route path='addPost' element={<AddPost />} />
					<Route path='favourite' element={<Favourite />} />
					<Route path='todo' element={<Todo />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
