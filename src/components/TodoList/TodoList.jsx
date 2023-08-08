import { nanoid } from 'nanoid'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todoData from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { MyContext } from '../../context/MyContext'

export const TodoList = () => {
	// state = {
	// 	todos,
	// 	newTodoValue: '',
	// }
	const myRef = useRef()
	const [todos, setTodos] = useState(todoData)
	const [newTodoValue, setNewTodoValue] = useState('')
	const { todoValue } = useContext(MyContext)
	useEffect(() => {
		myRef.current.focus()

		console.log(myRef.current)
		console.log(myRef.current.value)
	}, [])

	const handleAddTodo = () => {
		setTodos(prev => [...prev, { id: nanoid(), todo: newTodoValue, completed: false }])
		setNewTodoValue('')
		// //
		// this.setState(prev => ({
		// 	todos: [...prev.todos, { id: nanoid(), todo: prev.newTodoValue, completed: false }],
		// 	newTodoValue: '',
		// }))
		myRef.current.focus()
	}

	const handleDelete = id => {
		console.log(id)
		setTodos(prev => prev.filter(todo => todo.id !== id))
		// this.setState(prev => ({
		// 	todos: prev.todos.filter(todo => {
		// 		return todo.id !== id
		// 	}),
		// }))
	}
	const handleChangeInput = e => {
		setNewTodoValue(e.target.value)
		// this.setState({ newTodoValue: e.target.value })
	}

	const handleToggleTodo = id => {
		setTodos(prev =>
			prev.map(todo =>
				todo.id === id
					? {
							...todo,
							completed: !todo.completed,
					  }
					: todo
			)
		)

		// this.setState(prev => ({
		// 	todos: prev.todos.map(todo => {
		// 		if (todo.id === id) {
		// 			return {
		// 				...todo,
		// 				completed: !todo.completed,
		// 			}
		// 		} else {
		// 			return todo
		// 		}
		// 	}),
		// }))
	}

	const handleClear = () => {
		setTodos([])
		myRef.current.focus()

		// this.setState({ todos: [] })
	}

	return (
		<>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput ref={myRef} value={newTodoValue} onChange={handleChangeInput} type='text' />
					<StyledButton onClick={handleAddTodo}>Add</StyledButton>
				</Flex>
				{todos.map(item => (
					<StyledTodo key={item.id}>
						<input checked={item.completed} type='checkbox' onChange={() => handleToggleTodo(item.id)} />
						<span>{item.todo}</span>
						<StyledButton onClick={() => handleDelete(item.id)} size='18px'>
							Delete
						</StyledButton>
					</StyledTodo>
				))}
				<button onClick={handleClear}>Clear</button>
			</StyledTodoList>
		</>
	)
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
