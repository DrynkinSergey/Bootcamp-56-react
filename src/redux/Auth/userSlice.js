import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './operations'

const slice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: '',
		error: '',
		isLoggedIn: false,
	},
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, (state, action) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = ''
				state.isLoggedIn = false
			})
	},
})

export const userReducer = slice.reducer
