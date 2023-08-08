import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'
// import { getFilteredData } from '../../services/getFileteredData'
import { Modal } from '../Modal/Modal'

export class Employee extends React.Component {
	state = {
		users: userData,
		searchValue: '',
		activeSkill: 'all',
		isAvailable: false,
		isModalOpen: false,
	}

	componentDidMount() {
		console.log('Mount')
		// setTimeout(() => {
		// 	this.setState({ isModalOpen: true })
		// }, 3000)
		const users = JSON.parse(window.localStorage.getItem('USERS'))
		if (users.length) {
			this.setState({ users })
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.users.length !== this.state.users.length) {
			window.localStorage.setItem('USERS', JSON.stringify(this.state.users))
		}
	}

	toggleModal = () => {
		this.setState(prev => ({ isModalOpen: !prev.isModalOpen }))
	}

	handleDeleteUser = id => {
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
		const { searchValue, activeSkill, isAvailable, isModalOpen } = this.state
		// console.log(this.getFilteredData())
		// const filteredData = getFilteredData(this.state)
		return (
			<>
				<EmployeesFilter
					toggleModal={this.toggleModal}
					title={this.props.title}
					isAvailable={isAvailable}
					activeSkill={activeSkill}
					searchValue={searchValue}
					onChangeSkill={this.handleChangeSkill}
					onChangeAvailable={this.handleChangeIsAvailable}
					onChangeSearchValue={this.handleChangeSearchValue}
				/>
				<EmployeeList users={[]} onDeleteUser={this.handleDeleteUser} />
				{isModalOpen && (
					<Modal onClose={this.toggleModal}>
						<h1>Продам холодильник</h1>
					</Modal>
				)}
			</>
		)
	}
}
