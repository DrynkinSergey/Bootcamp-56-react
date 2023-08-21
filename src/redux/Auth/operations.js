import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// https://goit-task-manager.herokuapp.com/
// Example1234qwe@mail.com
const auth = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})

export const registerThunk = createAsyncThunk('auth/reg', async (credentials, thunkAPI) => {
	try {
		const { data } = await auth.post('users/signup', credentials)
		console.log(data)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const { data } = await auth.post('users/login', credentials)
		console.log(data)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
