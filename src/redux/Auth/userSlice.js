import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './operations'

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
