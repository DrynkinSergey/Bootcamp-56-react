import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../RegisterForm/RegisterForm.styled'
import { Flex } from '../../styles/GlobalStyles'

const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({
	searchValue,
	title,
	toggleModal,
	activeSkill,
	isAvailable,
	onChangeSearchValue,
	onChangeSkill,
	onChangeAvailable,
}) => {
	return (
		<Filters>
			<h1>Filters</h1>
			<h2>{title}</h2>
			<button onClick={toggleModal}>Open Modal</button>
			<Flex $height='100px' $items='center'>
				<StyledInput type='text' value={searchValue} onChange={e => onChangeSearchValue(e.target.value)} />
				<label htmlFor='isAvailable'>
					<input type='checkbox' id='isAvailable' checked={isAvailable} onChange={onChangeAvailable} />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex $height='100px' $items='center'>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							type='radio'
							checked={radioButtonName === activeSkill}
							value={radioButtonName}
							onChange={() => onChangeSkill(radioButtonName)}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</Flex>
		</Filters>
	)
}
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #cbd3ff;
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 20px;
`
