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
		await API.post('/tasks', body)
		thunkAPI.dispatch(fetchTodos())
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk(
	'todos/delete',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await API.delete(`/tasks/${id}`)
			dispatch(fetchTodos())
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

export const updateTodoThunk = createAsyncThunk('todos/update', async (body, { dispatch, rejectWithValue }) => {
	try {
		await API.patch(`/tasks/${body.id}`, body)
		dispatch(fetchTodos())
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
