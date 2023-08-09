import { useMemo, useState } from 'react'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'
import { styled } from 'styled-components'
import { useMyContext } from '../../hooks/useMyContext'
const INITIAL_STATE = {
	name: '',
	password: '',
	email: '',
}

export const RegisterForm = () => {
	const [name, setName] = useState('')
	const { login } = useMyContext()
	const handleSubmit = e => {
		e.preventDefault()
		login(name)
	}

	const handleChangeInput = ({ target }) => {
		const { value } = target
		if (value.includes('!')) {
			alert('Invalid word')
		}
		setName(value)
	}
	return (
		<Flex>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput onChange={handleChangeInput} type='text' name='name' value={name} />
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
