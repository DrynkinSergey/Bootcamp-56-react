import { Component } from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './RegisterForm.styled'
const INITIAL_STATE = {
	name: '',
	password: '',
	email: '',
}

export class RegisterForm extends Component {
	state = INITIAL_STATE

	handleSubmit = e => {
		e.preventDefault()
		this.props.register(this.state)
		this.setState(INITIAL_STATE)
	}

	handleChangeInput = ({ target }) => {
		const { name, value } = target
		if (value.includes('!')) {
			alert('Invalid word')
		}

		this.setState({ [name]: value })

		// this.setState({ name: value })
		// this.setState({ password: value })

		// const a = {
		// 	[e.target.name]: 'dsfasf',
		// }
		// console.log(a[name])
	}

	render() {
		const { name, password, email } = this.state
		return (
			<FlexContainer>
				<StyledLoginForm onSubmit={this.handleSubmit}>
					<StyledTitle>Register</StyledTitle>
					<StyledLabel>
						Name:
						<StyledInput
							onChange={this.handleChangeInput}
							type='text'
							name='name'
							value={name}
						/>
					</StyledLabel>
					<br />
					<StyledLabel>
						Email:
						<StyledInput
							onChange={this.handleChangeInput}
							type='text'
							name='email'
							value={email}
						/>
					</StyledLabel>
					<br />

					<StyledLabel>
						Password:
						<StyledInput
							onChange={this.handleChangeInput}
							type='password'
							name='password'
							value={password}
						/>
					</StyledLabel>

					<br />
					<StyledButton>Register</StyledButton>
				</StyledLoginForm>
			</FlexContainer>
		)
	}
}

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
