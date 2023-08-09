import React, { createContext, useState } from 'react'
// Створюємо пустий контекст
export const MyContext = createContext()

// Створюємо компонент - обгортку, котра буде давати контекст чілдренам
export const ContextProvider = ({ children }) => {
	// Створюємо стейт для юзера, котрий буде доступний всюди
	const [user, setUser] = useState('')

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
	}

	// Робимо обгортку котекст провайдером, передаємо в велью наш об'єкт
	return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}
