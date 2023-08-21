import storage from 'redux-persist/lib/storage'

export const persistConfigPosts = {
	key: 'posts',
	version: 1,
	storage,
}
export const persistConfigFav = {
	key: 'favourite',
	version: 1,
	storage,
	blacklist: ['filter'],
}
export const persistConfigUser = {
	key: 'user',
	version: 1,
	storage,
	whitelist: ['token'],
}
