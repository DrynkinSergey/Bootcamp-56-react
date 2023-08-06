import styled from 'styled-components'
import { EmployeeCard } from './EmployeeCard'

export const EmployeeList = ({ users = [], onDeleteUser }) => {
	return (
		<UserList>
			{users.map(user => (
				<EmployeeCard key={user.id} {...user} onDeleteUser={onDeleteUser} />
			))}
		</UserList>
	)
}

const UserList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`
