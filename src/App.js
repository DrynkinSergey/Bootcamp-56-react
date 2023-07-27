import React from 'react'
import todos from './assets/todos.json'
import { TodoListStyled } from './components/TodoListStyled/TodoListStyled'
import { TodoListModules } from './components/TodoListModules/TodoListModules'
import { Box, Flex } from './styles/GlobalStyles'

export const App = () => {
	return (
		<>
			{/* <TodoListStyled list={todos} message='Hello PropTypes' />
			<TodoListModules list={todos} /> */}
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<Box />
				<Box $bg='red' />
			</Flex>
			<Flex $items='center' $justify='space-between'>
				<Box $bg='yellow' />
				<Box $bg='green' />
			</Flex>
		</>
	)
}
