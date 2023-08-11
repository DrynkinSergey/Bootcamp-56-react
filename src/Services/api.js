import axios from 'axios'
// 'https://dummyjson.com/posts/search'

axios.defaults.baseURL = 'https://dummyjson.com'

export const fetchTodos = async () => {
	const { data } = await axios.get('/todos')
	const todos = data.todos
	return { total: data.total, limit: data.limit, todos }
}

export const fetchPosts = async () => {
	const { data } = await axios.get('/posts')
	return data
}
export const fetchPostsByQuery = async query => {
	// const { data } = await axios.get(`/posts?q=${query}`)
	const { data } = await axios.get(`/posts/search`, {
		params: {
			q: query,
		},
	})

	return data
}
