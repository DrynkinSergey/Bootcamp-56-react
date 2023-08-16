import { createSlice } from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
	name: 'favourite',
	initialState: {
		favouritePosts: [],
	},
	reducers: {
		addPostToFav: (state, { payload }) => {
			state.favouritePosts.push(payload)
		},
		removeFromFav: (state, { payload }) => {
			state.favouritePosts = state.favouritePosts.filter(item => item.id !== payload)
		},
	},
})

export const { addPostToFav, removeFromFav } = favouriteSlice.actions
export const favouritePostReducer = favouriteSlice.reducer
