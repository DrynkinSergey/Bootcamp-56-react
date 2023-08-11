import React from 'react'
import { Route, Routes } from 'react-router'
import { Link, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Users } from './pages/Users'
import { SingleUser } from './pages/SingleUser'
import { Bio } from './components/Bio'
import { OurMission } from './components/AboutNested/OurMission'
import { OurCompany } from './components/AboutNested/OurCompany'
import { UserPosts } from './components/UserPosts'
import { SinglePost } from './pages/SinglePost'
import { Posts } from './pages/Posts'

export const App = () => {
	return (
		<div>
			{/* /about/company/Microsoft */}
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />

					<Route path='about' element={<About />}>
						<Route index element={<h1>Welcome to about page!</h1>} />
						<Route path='mission' element={<OurMission />} />
						<Route path='company' element={<OurCompany />} />
					</Route>

					<Route path='posts/:postId' element={<SinglePost />} />
					{/* Redirect коли змінився маршрут */}
					<Route path='usersList' element={<Navigate to='/users' />} />
					<Route path='users' element={<Users />} />
					<Route path='posts' element={<Posts />} />

					<Route path='users/:id' element={<SingleUser />}>
						<Route index element={<h2>Напис, поки не клікнув на посилання</h2>} />
						<Route path='bio' element={<Bio />} />
						<Route path='address' element={<h1>USER ADDRESS</h1>} />
						<Route path='posts' element={<UserPosts />} />
					</Route>

					<Route path='*' element={<NotFound />} />
					{/* Redirect to='/' */}
					{/* <Route path='*' element={<Navigate to='/' />} /> */}
				</Route>
			</Routes>
		</div>
	)
}
