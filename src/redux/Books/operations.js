import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const bookInstance = axios.create({
	baseURL: 'http://localhost:4444',
})

export const fetchAllBooks = createAsyncThunk('books/fetchAll', async () => {
	const { data } = await bookInstance.get('/books')
	return data
})
