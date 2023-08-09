import { useMemo, useState } from 'react'
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

	// const calc = () => {
	// 	for (let i = 1; i < 1000000000; i++) {}
	// 	console.log('calc')
	// }
	// const res = useMemo(() => calc(), [password])

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
		<div>
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
				<button>Register</button>
			</StyledLoginForm>
		</div>
	)
}
