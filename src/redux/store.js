// Імпортуємо редьюсери
import { counterReducer } from './counter/counterSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Імпортуємо функцію  створення стору
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/todoSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

// Створюємо стор, та експортуємо його для використання в index.js
export const store = configureStore({
	// Додаємо редьюсери, якщо їх декілька
	reducer: {
		counter: counterReducer,
		todoList: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})
console.log(process.env)
export const persistor = persistStore(store)
// Якщо один редьюсер
// export const store = configureStore({
// 	reducer: counterReducer,
// })
