import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// https://goit-task-manager.herokuapp.com/
// Example1234qwe@mail.com
export const API = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})

const setToken = token => {
	API.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
	API.defaults.headers.common.Authorization = ``
}

export const registerThunk = createAsyncThunk('auth/reg', async (credentials, thunkAPI) => {
	try {
		const { data } = await API.post('users/signup', credentials)
		console.log(data)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

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
