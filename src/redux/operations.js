// https://64abd6919edb4181202ea4d0.mockapi.io/todos

import axios from 'axios'
import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
// axios.defaults.baseURL = 'https://64abd6919edb4181202ea4d0.mockapi.io'
export const todoInstance = axios.create({
	baseURL: 'https://64abd6919edb4181202ea4d0.mockapi.io',
})

export const fetchTodos = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
	try {
		const res = await todoInstance.get('/todos')
		return res.data
	} catch (error) {
		console.log(thunkAPI)
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
	try {
		const { data } = await todoInstance.post('/todos', body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk(
	'todos/delete',
	async (id, { rejectWithValue }) => {
		try {
			await todoInstance.delete(`/todos/${id}`)
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
		const { data } = await todoInstance.put(`/todos/${body.id}`, body)
		return data.id
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
