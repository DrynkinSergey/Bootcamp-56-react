import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { fetchUsers } from '../../Services/api'
// Створюємо пустий контекст
export const MyContext = createContext()

// Створюємо компонент - обгортку, котра буде давати контекст чілдренам
export const ContextProvider = ({ children }) => {
	useEffect(() => {
		fetchUsers().then(res => setTodos(res.users))
	}, [])

	// Створюємо стейт для юзера, котрий буде доступний всюди
	const [user, setUser] = useState('')
	const [todos, setTodos] = useState([])

	// Створюємо функцію логінізації юзера
	const login = userName => setUser(userName)

	// Вихід юзера з системи
	const logout = () => setUser('')

	// Створюємо значення контекста, котре буде доступне всім компонентам
	const contextValue = {
		user,
		isLoggedIn: Boolean(user),
		login,
		logout,
		todos,
	}

	// Робимо обгортку котекст провайдером, передаємо в велью наш об'єкт
	return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}
