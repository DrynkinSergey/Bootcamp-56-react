import axios from 'axios'
import { normalizeData } from '../helpers/normalizeData'
// 'https://dummyjson.com/posts/search'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchUsers = async () => {
	const { data } = await axios.get('https://dummyjson.com/users')
	const users = normalizeData(data.users)
	return { total: data.total, limit: data.limit, users }
}
