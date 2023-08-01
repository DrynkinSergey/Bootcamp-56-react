import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'
import { getFilteredData } from '../../services/getFileteredData'

export class Employee extends React.Component {
	state = {
		users: userData,
		searchValue: '',
		activeSkill: 'all',
		isAvailable: false,
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

	handleChangeSkill = skill => {
		// console.log(skill)
		this.setState({ activeSkill: skill })
	}

	handleChangeIsAvailable = () => {
		this.setState(prev => ({ isAvailable: !prev.isAvailable }))
	}

	render() {
		const { searchValue, activeSkill, isAvailable } = this.state
		// console.log(this.getFilteredData())
		const filteredData = getFilteredData(this.state)
		return (
			<>
				<EmployeesFilter
					isAvailable={isAvailable}
					activeSkill={activeSkill}
					searchValue={searchValue}
					onChangeSkill={this.handleChangeSkill}
					onChangeAvailable={this.handleChangeIsAvailable}
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
