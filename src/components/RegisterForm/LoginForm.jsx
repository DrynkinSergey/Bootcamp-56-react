import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './LoginForm.styled'
import { styled } from 'styled-components'

export const LoginForm = () => {
	return (
		<Flex>
			<StyledLoginForm>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' name='name' />
				</StyledLabel>
				<br />
				<button>Login</button>
			</StyledLoginForm>
		</Flex>
	)
}

const Flex = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
