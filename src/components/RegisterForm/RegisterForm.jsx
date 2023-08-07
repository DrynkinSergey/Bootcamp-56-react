import { Component, useState } from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'
const INITIAL_STATE = {
	name: '',
	password: '',
	email: '',
}

//1. Необхідно прибрати слова class, extends
//2. Копіюємо ретерн
//3. Видаляємо всі this
//4. Додаємо наші методи з класу
//5. Додаємо конст до методів

export const RegisterForm = () => {
	// const [state, setState] = useState(INITIAL_STATE)
	// const { name, password, email } = state
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// this.props.register(this.state)
		// this.setState(INITIAL_STATE)
	}

	const handleChangeInput = ({ target }) => {
		const { name, value } = target
		if (value.includes('!')) {
			alert('Invalid word')
		}
		// setState(prev => ({ ...prev, [name]: value }))
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
		// this.setState({ [name]: value })
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
// export class RegisterForm extends Component {
// 	state = INITIAL_STATE

// handleSubmit = e => {
// 	e.preventDefault()
// 	this.props.register(this.state)
// 	this.setState(INITIAL_STATE)
// }

// handleChangeInput = ({ target }) => {
// 	const { name, value } = target
// 	if (value.includes('!')) {
// 		alert('Invalid word')
// 	}

// 	this.setState({ [name]: value })

// 	// this.setState({ name: value })
// 	// this.setState({ password: value })

// 	// const a = {
// 	// 	[e.target.name]: 'dsfasf',
// 	// }
// 	// console.log(a[name])
// }

// 	render() {
// 		const { name, password, email } = this.state
// return (
// 	<FlexContainer>
// 		<StyledLoginForm onSubmit={this.handleSubmit}>
// 			<StyledTitle>Register</StyledTitle>
// 			<StyledLabel>
// 				Name:
// 				<StyledInput onChange={this.handleChangeInput} type='text' name='name' value={name} />
// 			</StyledLabel>
// 			<br />
// 			<StyledLabel>
// 				Email:
// 				<StyledInput onChange={this.handleChangeInput} type='text' name='email' value={email} />
// 			</StyledLabel>
// 			<br />

// 			<StyledLabel>
// 				Password:
// 				<StyledInput onChange={this.handleChangeInput} type='password' name='password' value={password} />
// 			</StyledLabel>

// 			<br />
// 			<StyledButton>Register</StyledButton>
// 		</StyledLoginForm>
// 	</FlexContainer>
// )
// 	}
// }

// export const RegisterForm = () => {
// 	return (
// 		<FlexContainer>
// 			<StyledLoginForm>
// 				<StyledTitle>Register</StyledTitle>
// 				<StyledLabel>
// 					Name:
// 					<StyledInput type='text' />
// 				</StyledLabel>
// 				<br />
// 				<StyledLabel>
// 					Email:
// 					<StyledInput type='text' />
// 				</StyledLabel>
// 				<br />

// 				<StyledLabel>
// 					Password:
// 					<StyledInput type='password' />
// 				</StyledLabel>

// 				<br />
// 				<StyledButton>Register</StyledButton>
// 			</StyledLoginForm>
// 		</FlexContainer>
// 	)
// }
