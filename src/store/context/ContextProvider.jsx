import { nanoid } from 'nanoid'
import React, { createContext, useState } from 'react'
// Створюємо пустий контекст
export const MyContext1 = createContext()

// Створюємо компонент - обгортку, котра буде давати контекст чілдренам
export const ContextProvider = ({ children }) => {
	// Створюємо стейт для юзера, котрий буде доступний всюди

	const [user, setUser] = useState('')
	const [todos, setTodos] = useState([])

	// Створюємо функцію логінізації юзера
	const login = userName => setUser(userName)

	// Вихід юзера з системи
	const logout = () => setUser('')

	const add = todo => setTodos(prev => [...prev, { id: nanoid(), title: todo, completed: false }])

	const remove = id => setTodos(prev => prev.filter(todo => todo.id !== id))

	const toggle = id =>
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))

	const removeSelected = () => setTodos(prev => prev.filter(item => !item.completed))

	// Створюємо значення контекста, котре буде доступне всім компонентам
	const contextValue = {
		user,
		isLoggedIn: Boolean(user),
		login,
		logout,
		todos,
		todoApi: {
			add,
			remove,
			toggle,
			removeSelected,
		},
	}

	// Робимо обгортку котекст провайдером, передаємо в велью наш об'єкт
	return <MyContext1.Provider value={contextValue}>{children}</MyContext1.Provider>
}
