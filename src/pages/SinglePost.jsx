import { useNavigate, useParams } from 'react-router'
import { useHttp } from '../hooks/useHttp'
import { fetchPostsById } from '../Services/api'

export const SinglePost = () => {
	const { postId } = useParams()
	const navigate = useNavigate()
	const [post] = useHttp(fetchPostsById, postId)

	return (
		<div>
			<button onClick={() => navigate(-1)}>Go back</button>
			<button onClick={() => navigate('/users')}>Go home</button>
			<div>
				<h1>{post.title}</h1>
				<h2>{post.body}</h2>
			</div>
		</div>
	)
}
