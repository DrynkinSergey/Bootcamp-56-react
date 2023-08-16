import { createSlice } from '@reduxjs/toolkit'
import { deletePost } from './postsSlice'
import { deletePostAction } from '../helpers/reducersHelpers/deleteActionHelper'

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
	extraReducers: builder => {
		builder.addCase(deletePost, (state, { payload }) => deletePostAction(state, { payload }, 'favouritePosts'))
	},
})

export const { addPostToFav, removeFromFav } = favouriteSlice.actions
export const favouritePostReducer = favouriteSlice.reducer
