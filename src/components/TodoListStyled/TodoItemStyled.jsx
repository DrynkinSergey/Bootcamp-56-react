import React from 'react'
import { styled } from 'styled-components'
export const TodoItemStyled = ({ todo, completed, id, index }) => {
	return (
		<Card $index={index}>
			<Text $color='black'>
				{index + 1}. {todo}
			</Text>
			<Button>Delete</Button>
		</Card>
	)
}

const Card = styled.li`
	list-style: none;
	border: 2px solid black;
	border-radius: ${({ theme }) => theme.radius.default};
	padding: 10px 12px;
	box-shadow: ${({ theme }) => theme.shadows.default};
	color: ${({ theme }) => theme.colors.second};
	background-color: ${({ $index }) => $index % 2 && 'lightgray'};
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
const Text = styled.span`
	color: ${props => (props.$color ? props.$color : 'blue')};
`
const Button = styled.button`
	border-radius: ${({ theme }) => theme.radius.default};
	padding: 10px 12px;
`
