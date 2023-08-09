import axios from 'axios'
import { normalizeData } from '../helpers/normalizeData'
// 'https://dummyjson.com/posts/search'

axios.defaults.baseURL = 'https://dummyjson.com'

export const fetchUsers = async () => {
	const { data } = await axios.get('/todos')
	const users = data.todos
	return { total: data.total, limit: data.limit, users }
}
