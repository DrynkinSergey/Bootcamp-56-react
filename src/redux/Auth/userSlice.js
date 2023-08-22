import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

// 1.
// Створюємо слайс
const slice = createSlice({
	name: 'auth',
	// Будуємо початковий стейт
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: '',
		error: '',
		isLoggedIn: false,
		isRefreshing: false,
	},
	// Робимо екстра редьюсери, коли готові санки
	extraReducers: builder => {
		builder
			// Додаємо кейси під наші санки
			.addCase(registerThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
			.addCase(refreshThunk.pending, (state, action) => {
				state.isRefreshing = true
			})
			.addCase(refreshThunk.rejected, (state, action) => {
				state.isRefreshing = false
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

// ескпортуємо редьюсер для стора
// на цьому єтапі йдемо в стор
export const userReducer = slice.reducer
