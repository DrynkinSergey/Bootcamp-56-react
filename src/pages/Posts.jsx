import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, setLoading } from '../redux/postsSlice'
import { PostList } from '../components/PostList/PostList'
import { Loader } from '../components/Loader'

export const Posts = () => {
	const dispatch = useDispatch()
	const loading = useSelector(state => state.postList.loading)
	useEffect(() => {
		dispatch(setLoading(true))
		axios.get('https://dummyjson.com/posts').then(res => {
			dispatch(fetchPosts(res.data.posts))
			dispatch(setLoading(false))
		})
	}, [dispatch])
	return <div>{loading ? <Loader /> : <PostList />}</div>
}
