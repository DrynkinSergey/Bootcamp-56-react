import axios from 'axios'
import { normalizeData } from '../helpers/normalizeData'
// 'https://dummyjson.com/posts/search'

axios.defaults.baseURL = 'https://dummyjson.com'

export const fetchTodos = async () => {
	const { data } = await axios.get('/todos')
	const todos = data.todos
	return { total: data.total, limit: data.limit, todos }
}
