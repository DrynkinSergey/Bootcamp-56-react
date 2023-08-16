export const deletePostAction = (state, { payload }, action) => {
	state[action] = state[action].filter(item => item.id !== payload)
}
