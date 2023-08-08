import { useState } from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'
const INITIAL_STATE = {
	name: '',
	password: '',
	email: '',
}

export const RegisterForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
	}

	const handleChangeInput = ({ target }) => {
		const { name, value } = target
		if (value.includes('!')) {
			alert('Invalid word')
		}
		switch (name) {
			case 'name':
				setName(value)
				break
			case 'password':
				setPassword(value)
				break
			case 'email':
				setEmail(value)
				break
			default:
				break
		}
	}
	return (
		<FlexContainer>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput onChange={handleChangeInput} type='text' name='name' value={name} />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput onChange={handleChangeInput} type='text' name='email' value={email} />
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput onChange={handleChangeInput} type='password' name='password' value={password} />
				</StyledLabel>

				<br />
				<StyledButton>Register</StyledButton>
			</StyledLoginForm>
		</FlexContainer>
	)
}
