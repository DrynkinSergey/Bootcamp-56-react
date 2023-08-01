import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'

export class Employee extends React.Component {
	state = {
		users: userData,
	}
	handleDeleteUser = id => {
		console.log('user #=>>> ', id)
		this.setState(prev => ({
			users: prev.users.filter(user => user.id !== id),
		}))
	}
	render() {
		const { users } = this.state
		return (
			<>
				<EmployeesFilter />
				<EmployeeList users={users} onDeleteUser={this.handleDeleteUser} />
			</>
		)
	}
}
// export const Employee = () => {
// return (
// 	<>
// 		<EmployeesFilter />
// 		<EmployeeList users={userData} />
// 	</>
// )
// }
