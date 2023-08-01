import { Flex } from './styles/GlobalStyles'

import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
export const App = () => {
	return (
		<Flex $items='center' $justify='center'>
			<RegisterForm />
		</Flex>
	)
}
