import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))
	}, [])
	return (
		<div>
			<h1>Users list</h1>
			<ol>
				{users.map(user => (
					<li key={user.id}>
						<Link to={`${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ol>
		</div>
	)
}
