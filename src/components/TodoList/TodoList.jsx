import { nanoid } from 'nanoid'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todos from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export class TodoList extends React.Component {
	state = {
		todos,
		newTodoValue: '',
		loading: false,
	}

	componentDidMount() {
		axios
			// .get('https://dummyjson.com/todos?limit=7&skip=7')

			.get('https://dummyjson.com/todos', {
				params: {
					limit: 7,
					skip: 10,
				},
			})
			.then(res => this.setState({ todos: res.data.todos }))
			.catch(error => toast.error(error.message))
			.finally(console.log('Request is done!'))
	}

	handleAddTodo = () => {
		this.setState(prev => ({
			todos: [...prev.todos, { id: nanoid(), todo: prev.newTodoValue, completed: false }],
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
		this.setState(prev => ({
			todos: prev.todos.map(todo => {
				if (todo.id === id) {
					return {
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
						<StyledInput value={newTodoValue} onChange={this.handleChangeInput} type='text' />
						<button onClick={this.handleAddTodo}>Add</button>
					</Flex>
					{todos.map(item => (
						<StyledTodo key={item.id}>
							<input checked={item.completed} type='checkbox' onChange={() => this.handleToggleTodo(item.id)} />
							<span>
								{item.id}. {item.todo}
							</span>
							<button onClick={() => this.handleDelete(item.id)} size='18px'>
								Delete
							</button>
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
