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
				<TodoList />
			</Flex>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<ColorPicker colors={colors} />
			</Flex>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<Counter />
			</Flex>
			<Flex $gap='24px' $justify='center' $items='center' $direction='column'>
				<Modal>
					<h1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						quisquam perspiciatis autem officia velit laboriosam porro illo ipsa
						earum enim totam qui laudantium, est alias incidunt exercitationem
						reprehenderit. Consectetur, culpa.
					</h1>
				</Modal>
			</Flex>
		</>
	)
}
