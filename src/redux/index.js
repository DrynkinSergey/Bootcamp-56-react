import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './postsSlice'
import { favouritePostReducer } from './fovouriteSlice'
//https://64abd6919edb4181202ea4d0.mockapi.io/todos
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { userReducer } from './userSlice'
import { persistConfigFav, persistConfigPosts, persistConfigUser } from './persistConfigs'

const persistedReducerPosts = persistReducer(persistConfigPosts, postsReducer)
const persistedReducerFav = persistReducer(persistConfigFav, favouritePostReducer)

export const store = configureStore({
	reducer: {
		postList: persistedReducerPosts,
		favourite: persistedReducerFav,
		user: persistReducer(persistConfigUser, userReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
