import { createReducer } from '@reduxjs/toolkit'
import { decrement, incByValue, increment, reset } from './actions'

const initialState = {
	counter: 2,
	step: 1,
}
//Refactoring reducer - object notation
// export const counterReducer = createReducer(initialState, {
// 	[increment]: (state, action) => {
// 		state.counter += state.step
// 	},
// 	[decrement]: (state, action) => {
// 		state.counter -= state.step
// 	},
// 	[reset]: (state, action) => {
// 		state.counter = 0
// 	},
// 	[incByValue]: (state, { payload }) => {
// 		state.counter += payload
// 	},
// })

//Refactoring reducer by builder

export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter += state.step
		})
		.addCase(decrement, (state, action) => {
			state.counter -= state.step
		})
		.addCase(reset, (state, action) => {
			state.counter = 0
		})
		.addCase(incByValue, (state, action) => {
			state.counter += action.payload
		})
})

// export const counterReducer = (state = initialState, action) => {
// 	const { counter, step } = state
// 	switch (action.type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				counter: counter + step,
// 			}
// 		case decrement.toString():
// 			return {
// 				...state,
// 				counter: counter - step,
// 			}
// 		case reset.type:
// 			return {
// 				...state,
// 				counter: 0,
// 			}
// 		case incByValue.type:
// 			return {
// 				...state,
// 				counter: counter + action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
