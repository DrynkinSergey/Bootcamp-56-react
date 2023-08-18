import { createSlice } from '@reduxjs/toolkit'
import { fetchAllBooks } from './operations'

const slice = createSlice({
	name: 'book',
	initialState: {
		books: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchAllBooks.fulfilled, (state, { payload }) => {
			state.books = payload
		})
	},
})

export const bookReducer = slice.reducer
