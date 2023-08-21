import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './postsSlice'
//https://64abd6919edb4181202ea4d0.mockapi.io/todos
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { persistConfigPosts, persistConfigUser } from './persistConfigs'
import { todoReducer } from './todoSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { userReducer } from './Auth/userSlice'
const persistedReducerPosts = persistReducer(persistConfigPosts, postsReducer)

export const store = configureStore({
	reducer: {
		postList: persistedReducerPosts,
		// Додаємо створений редьюсер
		user: persistReducer(persistConfigUser, userReducer),
		todoList: todoReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
setupListeners(store.dispatch)
