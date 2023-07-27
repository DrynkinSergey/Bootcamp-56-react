import { styled } from 'styled-components'

export const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Title = styled.h1`
	color: blue;
	font-size: 3rem;
	font-style: italic;
`
export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;
`
export const Card = styled.li`
	list-style: none;
	border: 2px solid black;
	border-radius: ${({ theme }) => theme.radius.default};
	padding: 10px 12px;
	box-shadow: ${({ theme }) => theme.shadows.default};
	color: ${({ theme }) => theme.colors.second};
	background-color: ${({ $completed }) =>
		$completed ? 'rgba(124, 23, 12 , .5)' : 'rgb(255, 111, 22)'};
	display: flex;
	justify-content: space-between;
	gap: 10px;
	transition: all 0.3s ease;
	align-items: center;
	&:hover {
		background-color: lightblue;
		cursor: pointer;
		transform: scale(1.1);
	}
`
export const Text = styled.span`
	color: ${props => (props.$color ? props.$color : 'blue')};
`
export const Button = styled.button`
	border-radius: ${({ theme }) => theme.radius.default};
	padding: 10px 12px;
`

export const Box = styled.div`
	height: 100px;
	width: 100px;
	padding-top: 1px;
	margin: 0;
	padding: 0;
`
