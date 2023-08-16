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
		deletePost: (state, { payload }) => {
			state.posts = state.posts.filter(post => post.id !== payload)
		},
		addPost: (state, { payload }) => {
			state.posts.unshift(payload)
		},
	},
})

export const { deletePost, fetchPosts, setLoading, setFilter, addPost } = postsSlice.actions
export const postsReducer = postsSlice.reducer
