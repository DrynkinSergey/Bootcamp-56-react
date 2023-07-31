import { Flex } from './styles/GlobalStyles'
import { TodoList } from './components/TodoList/TodoList'
export const App = () => {
	return (
		<>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<TodoList />
			</Flex>
		</>
	)
}
