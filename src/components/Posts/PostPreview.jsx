import { styled } from 'styled-components'
import { SearchForm } from '../SearchForm/SearchForm'
import { Spinner } from './Spinner'
import { Posts } from './Posts'
import { toast } from 'react-toastify'
import { fetchPosts } from '../../Services/api'
import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { initialState, postReducer } from './reducer/reducer'
import { MyContext } from '../../context/MyContext'

export const PostPreview = () => {
	// const [posts, setPosts] = useState([])
	// const [limit, setLimit] = useState(5)
	// const [skip, setSkip] = useState(0)
	// const [totalItems, setTotalItems] = useState(null)
	// const [loading, setLoading] = useState(false)
	// const [error, setError] = useState('')
	// const [query, setQuery] = useState('')

	const myRef = useRef()
	const [state, dispatch] = useReducer(postReducer, initialState)
	const { posts, limit, skip, setTotalItems, loading, error, query } = state
	const value = useContext(MyContext)
	useEffect(() => {
		// setTimeout(() => {
		// 	myRef.current.click()
		// }, 2000)
		if (!query) {
			return
		}

		const fetchData = async () => {
			try {
				//Встановлення лоад в тру
				// setLoading(true)
				dispatch({ type: 'SET_LOADING', payload: true })
				// Отримання запиту з апі
				const { posts, total } = await fetchPosts({ skip, limit, q: query })
				// Розсипаємо минуле і додаємо нове
				// setPosts(prev => [...prev, ...posts])
				dispatch({ type: 'FETCH_POSTS', payload: posts })
				dispatch({ type: 'SET_TOTAL_ITEMS', payload: total })
				// Встановлення тотал
				// setTotalItems(total)
			} catch (error) {
			} finally {
				// Після запиту ставимо загрузку в фолз
				// setLoading(false)
				dispatch({ type: 'SET_LOADING', payload: false })
			}
		}

		fetchData()
	}, [limit, query, skip])

	const handleLoadMore = () => {
		// this.setState(prev => ({ skip: prev.skip + prev.limit }))
		// setSkip(prev => prev + limit)
		dispatch({ type: 'SET_SKIP' })
	}
	const handleChangeQuery = query => {
		if (!query) {
			toast.warning('Please change your query!')
		} else {
			// setQuery(query)
			dispatch({ type: 'SET_QUERY', payload: query })
			dispatch({ type: 'RESET_DEFAULT' })

			// setSkip(0)
			// setPosts([])
		}
	}
	return (
		<Container>
			<button onClick={() => alert('whats up!')} ref={myRef}>
				Click
			</button>
			<SearchForm setQuery={handleChangeQuery} />
			{loading && !posts.length ? <Spinner /> : <Posts data={posts} />}
			<Button disabled={loading} onClick={handleLoadMore}>
				{loading ? 'Loading...' : 'Load More'}
			</Button>
		</Container>
	)
}

const Button = styled.button`
	display: block;
	margin: 0 auto;
	border: none;
	background-color: teal;
	color: white;
	padding: 10px 20px;
	transition: all 0.3s ease;
	&:hover {
		background-color: #02c3c3;
		transform: scale(1.1);
		cursor: pointer;
	}
`
const Container = styled.div`
	max-width: 80vw;
	margin: 0 auto;
	padding: 20px;
`
