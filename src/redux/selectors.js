import { createSelector } from 'reselect'

//Posts selectors
export const selectFilter = state => state.postList.filter
export const selectPosts = state => state.postList.posts
export const selectLoading = state => state.postList.loading

//Fav selectors

export const selectFavPosts = state => state.favourite.favouritePosts

//TOdos selectors

export const selectTodos = state => state.todoList.todos
export const selectIsLoading = state => state.todoList.loading
export const selectError = state => state.todoList.error
export const selectFilterTodos = state => state.todoList.filter

// export const selectNotCompleted = (state, todos) => {
// 	console.log(state, todos)
// 	return todos.reduce((acc, curr) => (curr.completed ? acc : acc + 1), 0)
// }
export const selectNotCompleted = state => {
	console.log('calculate')
	const todos = selectTodos(state)
	return todos.reduce((acc, curr) => (curr.completed ? acc : acc + 1), 0)
}

export const selectFilteredData = state => {
	console.log('FILTER TODOS')
	const todos = selectTodos(state)
	const filter = selectFilterTodos(state)
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
}

export const selectFilteredDataMemo = createSelector([selectTodos, selectFilterTodos], (todos, filter) => {
	console.log('FILTER TODOS')
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
})

export const selectNotCompletedWithMemo = createSelector([selectTodos], todos => {
	console.log('calculate')
	return todos.reduce((acc, curr) => (curr.completed ? acc : acc + 1), 0)
})
