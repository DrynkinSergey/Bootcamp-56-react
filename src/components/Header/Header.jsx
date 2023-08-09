import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { MyContext } from '../../store/context/ContextProvider'

export const Header = () => {
	const { logout, user } = useContext(MyContext)
	return (
		<StyledHeader>
			<h2>Logo</h2>{' '}
			<div>
				<h2>{user}</h2>
				<button onClick={logout}>Exit</button>
			</div>
		</StyledHeader>
	)
}
export const StyledHeader = styled.header`
	padding: 30px;
	background-color: teal;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	& div {
		display: flex;
		gap: 20px;
		& button {
			padding: 2px 35px;
		}
	}
`
