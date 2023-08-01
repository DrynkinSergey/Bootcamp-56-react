import { Flex } from './styles/GlobalStyles'

import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { UnControlledRegisterForm } from './components/RegisterForm/UnControlledRegisterForm'
export const App = () => {
	return (
		<Flex $items='center' $justify='center'>
			<RegisterForm />
			<UnControlledRegisterForm />
		</Flex>
	)
}
