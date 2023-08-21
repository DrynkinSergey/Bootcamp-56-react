import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// https://goit-task-manager.herokuapp.com/
// Example1234qwe@mail.com

// Створюємо інстанс для аксіоса
export const API = axios.create({
	//Вказуємо бейс юрл
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})

// Робимо хелпери для запису токена, на всі наші запити буде додано хедер "Authorization"
const setToken = token => {
	API.defaults.headers.common.Authorization = `Bearer ${token}`
}
// Робимо хелпер для очистки токена, коли людина натискає вийти
const clearToken = () => {
	API.defaults.headers.common.Authorization = ``
}

// Створюємо санку регістрації

export const registerThunk = createAsyncThunk(
	'auth/reg',
	async (credentials /* Передаємо credentials як данні від компонента для реестрації*/, thunkAPI) => {
		try {
			// Робимо запит
			const { data } = await API.post('users/signup', credentials)
			//Отримаємо відповідь у data
			// Встановлюємо токен з відповіді для подальших запитів
			console.log(data)
			setToken(data.token)
			// Викидуємо дані для слайса та екстра редьюсерів
			return data
		} catch (error) {
			// Викидуємо помилку для rejected в addCase
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const { data } = await API.post('users/login', credentials)
		console.log(data)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		const { data } = await API.post('users/logout')
		clearToken()
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
