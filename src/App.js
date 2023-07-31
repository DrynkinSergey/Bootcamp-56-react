import { Flex } from './styles/GlobalStyles'
import { TodoList } from './components/TodoList/TodoList'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
export const App = () => {
	return (
		<>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<ColorPicker colors={colors} />
			</Flex>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<Counter />
			</Flex>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<TodoList />
			</Flex>
		</>
	)
}
