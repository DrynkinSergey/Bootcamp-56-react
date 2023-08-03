import { styled } from 'styled-components'

export const StyledWrapper = styled.form`
	display: flex;
	justify-content: center;
	gap: 20px;
	& input {
		width: 100%;
		border: none;
		font-size: 2rem;
		border-bottom: 2px solid gray;
		outline: none;
		padding: 0 10px;
	}
	& button {
		padding: 10px;
		width: 40%;
		border: none;
		box-shadow: ${({ theme }) => theme.shadows.default};
		color: ${({ theme }) => theme.colors.second};
		background-color: ${({ theme }) => theme.colors.main};
		border-radius: ${({ theme }) => theme.radius.default};
		&:hover {
			cursor: pointer;
			background-color: ${({ theme }) => theme.colors.hoverMain};
		}
	}
`
