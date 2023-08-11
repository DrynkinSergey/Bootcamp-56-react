import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Flex } from '../pages/SingleUser'

export const UserPosts = () => {
	const { id } = useParams()
	const [posts, setPosts] = useState([])
	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => setPosts(res.data))
	}, [id])
	return (
		<div>
			UserPosts {id}
			<Flex>
				<ol>
					{posts.map(post => (
						<li key={post.id}>
							<Link to={`/posts/${post.id}`}>{post.title}</Link>
						</li>
					))}
				</ol>
			</Flex>
		</div>
	)
}
