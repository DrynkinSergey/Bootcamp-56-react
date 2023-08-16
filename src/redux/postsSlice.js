import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
	},
	reducers: {
		fetchPosts: (state, { payload }) => {
			state.posts = payload
		},
		setLoading: (state, { payload }) => {
			state.loading = payload
		},
	},
})

export const { fetchPosts, setLoading } = postsSlice.actions
export const postsReducer = postsSlice.reducer
