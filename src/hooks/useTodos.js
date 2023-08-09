import { useEffect, useState } from 'react'
import { fetchTodos } from '../Services/api'

export const useTodos = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetchTodos().then(res => setTodos(res.todos))
	}, [])

	return [todos, setTodos]
}
