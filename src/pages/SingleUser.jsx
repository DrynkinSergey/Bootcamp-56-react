import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link, useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
import { StyledLink } from '../components/Navbar'

export const SingleUser = () => {
	const { id } = useParams()

	const location = useLocation()
	console.log(location)
	const [user, setUser] = useState({})
	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => setUser(res.data))
	}, [id])
	return (
		<>
			<Link to={location.state?.from || '/'}>Go back</Link>
			{/* <Link to='/users'>Go back</Link> */}
			<h1>SingleUser #{id}</h1>
			<h2>Name: {user.name}</h2>
			<h2>Email: {user.email}</h2>
			{/* <p>{undefined.city}</p> */}

			{/* {user.address && <h2>Address: {user.address.city}</h2>} */}
			<h2>Address: {user.address?.city}</h2>
			{/* <h2>Address: {user.undefined.city}</h2> */}

			<Flex>
				<StyledLink to='bio'>Show user bio</StyledLink>
				<StyledLink to='address'>Show user address</StyledLink>
				<StyledLink to='posts'>Show user posts</StyledLink>
			</Flex>
			<hr />
			<Outlet />
		</>
	)
}
export const Flex = styled.div`
	display: flex;
	gap: 20px;
`
