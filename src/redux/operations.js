// https://64abd6919edb4181202ea4d0.mockapi.io/todos

import axios from 'axios'
import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from './Auth/operations'
// axios.defaults.baseURL = 'https://64abd6919edb4181202ea4d0.mockapi.io'

export const fetchTodos = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
	try {
		const res = await API.get('/tasks')
		return res.data
	} catch (error) {
		console.log(thunkAPI)
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
	try {
		const { data } = await API.post('/tasks', body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk(
	'todos/delete',
	async (id, { rejectWithValue }) => {
		try {
			await API.delete(`/tasks/${id}`)
			return id
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
	{
		condition: (_, { getState }) => {
			console.log(getState())
			const loading = getState().todoList.loading
			if (loading) {
				toast.info('You have active loading')
				return false
			}
		},
	}
)

export const updateTodoThunk = createAsyncThunk('todos/update', async (body, { rejectWithValue }) => {
	try {
		const { data } = await API.patch(`/tasks/${body.id}`, body)
		return data.id
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
