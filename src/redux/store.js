// Імпортуємо редьюсери
import { counterReducer } from './counter/counterSlice'

// Імпортуємо функцію  створення стору
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/todoSlice'

// Створюємо стор, та експортуємо його для використання в index.js
export const store = configureStore({
	// Додаємо редьюсери, якщо їх декілька
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
	},
})

// Якщо один редьюсер
// export const store = configureStore({
// 	reducer: counterReducer,
// })
