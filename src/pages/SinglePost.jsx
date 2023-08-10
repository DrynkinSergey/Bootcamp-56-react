import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export const SinglePost = () => {
	const { postId } = useParams()
	const navigate = useNavigate()
	const [post, setPost] = useState({})
	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => setPost(res.data))
	}, [postId])
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
