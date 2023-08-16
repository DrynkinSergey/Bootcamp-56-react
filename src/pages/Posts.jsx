import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, setLoading } from '../redux/postsSlice'
import { PostList } from '../components/PostList/PostList'
import { Loader } from '../components/Loader'
import { selectLoading, selectPosts } from '../redux/selectors'

export const Posts = () => {
	const dispatch = useDispatch()
	const loading = useSelector(selectLoading)
	const posts = useSelector(selectPosts)
	useEffect(() => {
		if (posts.length) {
			return
		}
		dispatch(setLoading(true))
		axios.get('https://dummyjson.com/posts?limit=10').then(res => {
			dispatch(fetchPosts(res.data.posts))
			dispatch(setLoading(false))
		})
	}, [dispatch, posts.length])
	return <div>{loading ? <Loader /> : <PostList />}</div>
}
