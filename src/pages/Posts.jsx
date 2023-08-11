import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchPosts, fetchPostsByQuery } from '../Services/api'
import { useSearchParams } from 'react-router-dom'

export const Posts = () => {
	const [posts, setPosts] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('query')
	const page = searchParams.get('page')
	const limit = searchParams.get('limit')

	const [value, setValue] = useState(query)
	// console.log({ limit, page, query })
	useEffect(() => {
		if (query) {
			fetchPostsByQuery(query).then(res => setPosts(res.posts))
		} else fetchPosts().then(res => setPosts(res.posts))
	}, [query])
	useEffect(() => {
		console.log(query)
	}, [query])
	const onsubmit = e => {
		e.preventDefault()
		setSearchParams(value ? { query: value, page: 1, limit: 12 } : {})
	}
	return (
		<div>
			<h1>Awesome page with posts</h1>
			<form onSubmit={onsubmit}>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' placeholder='Enter your query...' />
				<button>Search 🔥</button>
			</form>
			{/* <form onSubmit={onsubmit}>
				<input
					value={query}
					onChange={e => setSearchParams(e.target.value ? { query: e.target.value } : {})}
					type='text'
					placeholder='Enter your query...'
				/>
				<button>Search 🔥</button>
			</form> */}
			<ol>
				{posts.map(({ id, title, body }) => (
					<li key={id}>
						<h3>{title}</h3>
						<p>{body}</p>
					</li>
				))}
			</ol>
		</div>
	)
}
