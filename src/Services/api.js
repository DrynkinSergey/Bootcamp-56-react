import axios from 'axios'
// 'https://dummyjson.com/posts/search'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async params => {
	let url = params.q ? 'posts/search' : 'posts'

	const { data } = await axios.get(url, {
		params: {
			limit: 15,
			...params,
		},
	})
	return data
}
