import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './postsSlice'
import { favouritePostReducer } from './fovouriteSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigPosts = {
	key: 'posts',
	version: 1,
	storage,
}
const persistConfigFav = {
	key: 'favourite',
	version: 1,
	storage,
}
const persistedReducerPosts = persistReducer(persistConfigPosts, postsReducer)
const persistedReducerFav = persistReducer(persistConfigFav, favouritePostReducer)

export const store = configureStore({
	reducer: {
		postList: persistedReducerPosts,
		favourite: persistedReducerFav,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
