import { Flex } from './styles/GlobalStyles'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Counter } from './components/Counter/Counter'
import colors from './assets/colors.json'
import Modal from './components/Modal/Modal'
export const App = () => {
	return (
		<>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<Counter />
			</Flex>
		</>
	)
}
