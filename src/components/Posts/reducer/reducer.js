export const initialState = {
	posts: [],
	limit: 5,
	skip: 0,
	totalItems: null,
	loading: false,
	error: '',
	query: '',
}

export const postReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			}
		case 'FETCH_POSTS':
			return {
				...state,
				posts: [...state.posts, ...action.payload],
			}
		case 'SET_TOTAL_ITEMS':
			return {
				...state,
				totalItems: action.payload,
			}
		case 'SET_SKIP':
			return {
				...state,
				skip: state.skip + state.limit,
			}
		case 'SET_QUERY':
			return {
				...state,
				query: action.payload,
			}
		case 'RESET_DEFAULT':
			return {
				...state,
				skip: 0,
				posts: [],
			}

		default:
			return state
	}
}
