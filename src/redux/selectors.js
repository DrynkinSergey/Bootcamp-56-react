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

export const selectNotCompleted = (state, todos) => {
	console.log(state, todos)
	return todos.reduce((acc, curr) => (curr.completed ? acc : acc + 1), 0)
}
