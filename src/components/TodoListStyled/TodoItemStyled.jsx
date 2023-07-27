import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Text } from './TodoList.styled'
export const TodoItemStyled = ({ todo, completed, id, index }) => {
	return (
		<Card $index={index} $completed={completed}>
			<Text $color='black'>
				{index + 1}. {todo}
			</Text>
			<Button>Delete</Button>
		</Card>
	)
}

TodoItemStyled.propTypes = {
	todo: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	index: PropTypes.number,
}
