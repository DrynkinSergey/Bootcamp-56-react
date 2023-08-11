import { Navigate, useLocation } from 'react-router-dom'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './LoginForm.styled'
import { styled } from 'styled-components'
import { AuthContext } from '../../context/ContextProvider'
import { useContext } from 'react'

export const LoginForm = () => {
	const location = useLocation()
	console.log(location)
	const { user, login } = useContext(AuthContext)
	const onSubmit = e => {
		e.preventDefault()
		login(e.target.name.value)
	}
	if (user) {
		return <Navigate to={location.state?.from} />
	}
	return (
		<Flex>
			<StyledLoginForm onSubmit={onSubmit}>
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
