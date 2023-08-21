import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Posts } from './pages/Posts'
import { Favourite } from './pages/Favourite'
import { AddPost } from './pages/AddPost'
import { Login } from './pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { Todo } from './pages/Todo'
import { Books } from './pages/Books'
import { useEffect } from 'react'
import { registerThunk } from './redux/Auth/operations'
import { Register } from './pages/Register'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='posts' element={<Posts />} />
					<Route path='addPost' element={<AddPost />} />
					<Route path='favourite' element={<Favourite />} />
					<Route path='todo' element={<Todo />} />
					<Route path='books' element={<Books />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
