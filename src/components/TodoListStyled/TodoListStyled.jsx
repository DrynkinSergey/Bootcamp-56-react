import React from 'react'
import PropTypes from 'prop-types'
import { TodoItemStyled } from './TodoItemStyled'

import { List, Title, Wrapper } from './TodoList.styled'

export const TodoListStyled = ({ list, message }) => {
	console.log(message)
	return (
		<Wrapper>
			<Title>Todo List Modules</Title>
			<h1>{message}</h1>
			<List>
				{list.map((todo, index) => (
					<TodoItemStyled key={todo.id} {...todo} index={index} />
				))}
			</List>
		</Wrapper>
	)
}

TodoListStyled.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			todo: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		})
	),
	message: PropTypes.string.isRequired,
}
