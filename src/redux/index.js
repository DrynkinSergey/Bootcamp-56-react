import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './postsSlice'
import { favouritePostReducer } from './fovouriteSlice'
//https://64abd6919edb4181202ea4d0.mockapi.io/todos
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { userReducer } from './userSlice'
import { persistConfigFav, persistConfigPosts, persistConfigUser } from './persistConfigs'
import { todoReducer } from './todoSlice'
import { toast } from 'react-toastify'
import { bookReducer } from './Books/bookSlice'
import { booksApi } from './rtkQUERY/api'
import { todosApi } from './rtkQUERY/todosApi'
const persistedReducerPosts = persistReducer(persistConfigPosts, postsReducer)
const persistedReducerFav = persistReducer(persistConfigFav, favouritePostReducer)

const myLogger = store => next => action => {
	if (action.payload?.title === 'angular') {
		action.payload.title = 'React'
		toast.warning('Angular is find!! ALARM')
		console.log('dont do this')
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		postList: persistedReducerPosts,
		favourite: persistedReducerFav,
		user: persistReducer(persistConfigUser, userReducer),
		todoList: todoReducer,
		booksList: bookReducer,
		[todosApi.reducerPath]: todosApi.reducer,
		[booksApi.reducerPath]: booksApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(booksApi.middleware, todosApi.middleware),
})

export const persistor = persistStore(store)
