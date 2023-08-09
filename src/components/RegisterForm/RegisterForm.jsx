import { useMemo, useState } from 'react'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'
const INITIAL_STATE = {
	name: '',
	password: '',
	email: '',
}

export const RegisterForm = () => {
	const [name, setName] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
	}

	const handleChangeInput = ({ target }) => {
		const { value } = target
		if (value.includes('!')) {
			alert('Invalid word')
		}
		setName(value)
	}
	return (
		<div>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput onChange={handleChangeInput} type='text' name='name' value={name} />
				</StyledLabel>
				<br />
				<button>Login</button>
			</StyledLoginForm>
		</div>
	)
}
