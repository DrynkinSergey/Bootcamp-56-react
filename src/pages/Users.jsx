import { Link, useLocation } from 'react-router-dom'
import { fetchUsers } from '../Services/api'
import { useHttp } from '../hooks/useHttp'

export const Users = () => {
	const [users] = useHttp(fetchUsers)
	const location = useLocation()
	console.log(location)
	return (
		<div>
			<h1>Users list</h1>
			<ol>
				{users.map(user => (
					<li key={user.id}>
						<Link state={{ from: location }} to={`${user.id}`}>
							{user.name}
						</Link>
					</li>
				))}
			</ol>
		</div>
	)
}
