// slice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	counter: 0,
	step: 1,
}
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		//action
		increment: (state, action) => {
			state.counter += 1
		},
		decrement: (state, { payload }) => {
			state.counter -= 1
		},
		reset: (state, { payload }) => {
			state.counter = 0
		},
		incrementByValue: (state, action) => {
			state.counter -= action.payload
		},
	},
})

export const { increment, decrement, reset, incrementByValue } = counterSlice.actions
export const counterReducer = counterSlice.reducer
