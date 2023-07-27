import React from 'react'
import { TodoItemStyled } from './TodoItemStyled'
import { styled } from 'styled-components'

export const TodoListStyled = ({ list }) => {
	return (
		<Wrapper>
			<Title>Todo List Modules</Title>
			<List>
				{list.map((todo, index) => (
					<TodoItemStyled key={todo.id} {...todo} index={index} />
				))}
			</List>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Title = styled.h1`
	color: blue;
	font-size: 3rem;
	font-style: italic;
`
const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;
`
