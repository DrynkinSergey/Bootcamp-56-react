import { Flex } from './styles/GlobalStyles'

import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { UnControlledRegisterForm } from './components/RegisterForm/UnControlledRegisterForm'
export const App = () => {
	const registerUser = data => {
		console.log('Send data....')
		setTimeout(() => {
			console.log(`Congratulation, you have next access: `, data)
		}, 2000)
	}
	return (
		<Flex $items='center' $justify='center'>
			<RegisterForm register={registerUser} />
			<UnControlledRegisterForm register={registerUser} />
		</Flex>
	)
}
