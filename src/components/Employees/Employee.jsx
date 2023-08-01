import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'

export class Employee extends React.Component {
	state = {
		users: userData,
		searchValue: '',
		activeSkill: 'all',
	}
	handleDeleteUser = id => {
		console.log('user #=>>> ', id)
		this.setState(prev => ({
			users: prev.users.filter(user => user.id !== id),
		}))
	}

	handleChangeSearchValue = value => {
		this.setState({ searchValue: value })
	}

	getFilteredData = () => {
		return this.state.users
			.filter(user =>
				user.name
					.toLowerCase()
					.includes(this.state.searchValue.toLowerCase().trim())
			)
			.filter(user =>
				this.state.activeSkill === 'all'
					? user
					: user.skills.includes(this.state.activeSkill)
			)
	}

	handleChangeSkill = skill => {
		// console.log(skill)
		this.setState({ activeSkill: skill })
	}
	render() {
		const { searchValue, activeSkill } = this.state
		// console.log(this.getFilteredData())
		const filteredData = this.getFilteredData()
		return (
			<>
				<EmployeesFilter
					activeSkill={activeSkill}
					searchValue={searchValue}
					onChangeSkill={this.handleChangeSkill}
					onChangeSearchValue={this.handleChangeSearchValue}
				/>
				<EmployeeList
					users={filteredData}
					onDeleteUser={this.handleDeleteUser}
				/>
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
