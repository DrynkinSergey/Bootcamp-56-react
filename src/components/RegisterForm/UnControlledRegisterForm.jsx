import { Component } from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './RegisterForm.styled'

export const UnControlledRegisterForm = () => {
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const name = form.elements.name.value
		const email = form.elements.email.value
		const password = form.elements.password.value
		if (name.includes('!')) {
			alert('Error')
			form.reset()
			return
		}
		console.log({ name, email, password })
		form.reset()
	}
	return (
		<FlexContainer>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput name='name' type='text' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput name='email' type='text' />
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput name='password' type='password' />
				</StyledLabel>

				<br />
				<StyledButton>Register</StyledButton>
			</StyledLoginForm>
		</FlexContainer>
	)
}
