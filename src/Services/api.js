import axios from 'axios'

export const fetchPosts = async () => {
	const { data } = await axios.get('https://dummyjson.com/posts')
	return data
}
