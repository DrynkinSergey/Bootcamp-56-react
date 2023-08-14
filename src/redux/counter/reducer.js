const initialState = {
	counter: 2,
	step: 1,
}

export const counterReducer = (state = initialState, action) => {
	const { counter, step } = state
	switch (action.type) {
		case 'INC':
			return {
				...state,
				counter: counter + step,
			}
		case 'DEC':
			return {
				...state,
				counter: counter - step,
			}
		case 'RESET':
			return {
				...state,
				counter: 0,
			}
		case 'INC_BY_10':
			return {
				...state,
				counter: counter + action.payload,
			}
		default:
			return state
	}
}
