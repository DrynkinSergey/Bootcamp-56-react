import axios from 'axios'

const baseUrl = 'https://dummyjson.com/posts'
const searchUrl = 'https://dummyjson.com/posts/search'

export const fetchPosts = async (params = {}) => {
	let url = params.q ? searchUrl : baseUrl
	const res = await axios.get(url, {
		params: {
			limit: 10,
			...params,
		},
	})
	return res.data
}
