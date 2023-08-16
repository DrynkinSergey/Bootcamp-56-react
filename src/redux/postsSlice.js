import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
		filter: '',
	},
	reducers: {
		fetchPosts: (state, { payload }) => {
			state.posts = payload
		},
		setLoading: (state, { payload }) => {
			state.loading = payload
		},
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
})

export const { fetchPosts, setLoading, setFilter } = postsSlice.actions
export const postsReducer = postsSlice.reducer
