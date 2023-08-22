import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			password: '',
		},
		isLoggedIn: false,
	},
	reducers: {
		login: (state, { payload }) => {
			state.user.name = payload.name
			state.user.password = payload.password
			state.isLoggedIn = true
		},
		logout: (state, { payload }) => {
			state.user.name = ''
			state.user.password = ''
			state.isLoggedIn = false
		},
	},
})

export const { login, logout } = slice.actions
export const userReducer = slice.reducer
