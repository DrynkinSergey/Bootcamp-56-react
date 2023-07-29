import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todoData from './../../assets/todos.json'

export const TodoList = () => {
	return (
		<div>
			<StyledTodoList>
				<StyledInput type='text' />
				<StyledButton>Add</StyledButton>
				{[].map(item => (
					<StyledTodo>
						<input type='checkbox' />
						<span>todo</span>
						<StyledButton size='18px'>Delete</StyledButton>
					</StyledTodo>
				))}
				<button>Clear</button>
			</StyledTodoList>
		</div>
	)
}
