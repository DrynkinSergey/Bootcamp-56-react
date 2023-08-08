import { nanoid } from 'nanoid'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todoData from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { initialState, todoReducer } from './reducer'

export const TodoList = () => {
	const myRef = useRef()
	const [state, dispatch] = useReducer(todoReducer, initialState)
	const { todos, newTodoValue } = state
	useEffect(() => {
		myRef.current.focus()

		console.log(myRef.current)
		console.log(myRef.current.value)
	}, [])

	const handleDelete = id => {
		console.log(id)
		// setTodos(prev => prev.filter(todo => todo.id !== id))
		dispatch({ type: 'DELETE_TODO', payload: id })
	}
	const handleChangeInput = e => {
		// setNewTodoValue(e.target.value)
		dispatch({ type: 'CHANGE_INPUT', payload: e.target.value })
	}

	const handleToggleTodo = id => {
		// setTodos(prev =>
		// 	prev.map(todo =>
		// 		todo.id === id
		// 			? {
		// 					...todo,
		// 					completed: !todo.completed,
		// 			  }
		// 			: todo
		// 	)
		// )
		dispatch({ type: 'TOGGLE_TODO', payload: id })
	}
	const handleClear = () => {
		// setTodos([])
		myRef.current.focus()
	}

	return (
		<>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput ref={myRef} value={newTodoValue} onChange={handleChangeInput} type='text' />
					<StyledButton onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodoValue })}>Add</StyledButton>
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
