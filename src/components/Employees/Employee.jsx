import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { styled } from 'styled-components'

export const Employee = () => {
	return (
		<Wrapper>
			<EmployeesFilter />
			<EmployeeList users={userData} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: lightgray;
`
