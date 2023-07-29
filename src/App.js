import React from 'react'
import todos from './assets/todos.json'
import { Flex } from './styles/GlobalStyles'

export const App = () => {
	return (
		<>
			<Flex
				$gap='24px'
				$justify='center'
				$items='center'
				$direction='column'
			></Flex>
		</>
	)
}
