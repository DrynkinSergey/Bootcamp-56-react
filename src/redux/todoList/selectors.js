export const selectFilter = state => state.todoList.filter

export const selectFilteredData = state => {
	const filter = state.todoList.filter
	const todos = state.todoList.todos
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
}
