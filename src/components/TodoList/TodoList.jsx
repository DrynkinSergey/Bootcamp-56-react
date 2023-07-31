import { nanoid } from 'nanoid'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todos from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React from 'react'

export class TodoList extends React.Component {
	state = {
		todos,
		newTodoValue: '',
	}
	handleAddTodo = () => {
		this.setState(prev => ({
			todos: [
				...prev.todos,
				{ id: nanoid(), todo: prev.newTodoValue, completed: false },
			],
			newTodoValue: '',
		}))
	}

	handleDelete = id => {
		console.log(id)
		this.setState(prev => ({
			todos: prev.todos.filter(todo => {
				return todo.id !== id
			}),
		}))
	}
	handleChangeInput = e => {
		this.setState({ newTodoValue: e.target.value })
	}

	handleToggleTodo = id => {
		// Тернарне вираження
		// this.setState(prev => ({
		// 	todos: prev.todos.map(todo =>
		// 		todo.id === id ? { ...todo, completed: !todo.completed } : todo
		// 	),
		// }))
		// Традиційне іф елс

		this.setState(prev => ({
			todos: prev.todos.map(todo => {
				if (todo.id === id) {
					return {
						// todo: todo.todo,
						// id: todo.id,
						// completed: todo.completed,
						...todo,
						completed: !todo.completed,
					}
				} else {
					return todo
				}
			}),
		}))
	}

	handleClear = () => {
		this.setState({ todos: [] })
	}

	render() {
		const { todos, newTodoValue } = this.state
		return (
			<>
				<StyledTodoList>
					<Flex $height='auto'>
						<StyledInput
							value={newTodoValue}
							onChange={this.handleChangeInput}
							type='text'
						/>
						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
					</Flex>
					{todos.map(item => (
						<StyledTodo key={item.id}>
							<input
								checked={item.completed}
								type='checkbox'
								onChange={() => this.handleToggleTodo(item.id)}
							/>
							<span>{item.todo}</span>
							<StyledButton
								onClick={() => this.handleDelete(item.id)}
								size='18px'
							>
								Delete
							</StyledButton>
						</StyledTodo>
					))}
					<button onClick={this.handleClear}>Clear</button>
				</StyledTodoList>
			</>
		)
	}
}

// export const TodoList = () => {
// 	return (
// 		<>
// 			<StyledTodoList>
// 				<Flex $height='auto'>
// 					<StyledInput type='text' />
// 					<StyledButton>Add</StyledButton>
// 				</Flex>
// 				{todos.map(item => (
// 					<StyledTodo>
// 						<input type='checkbox' />
// 						<span>{item.todo}</span>
// 						<StyledButton size='18px'>Delete</StyledButton>
// 					</StyledTodo>
// 				))}
// 				<button>Clear</button>
// 			</StyledTodoList>
// 		</>
// 	)
// }
