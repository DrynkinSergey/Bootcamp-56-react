import { styled } from 'styled-components'
import { SearchForm } from '../SearchForm/SearchForm'
import { Spinner } from './Spinner'
import { Posts } from './Posts'
import { toast } from 'react-toastify'
import { fetchPosts } from '../../Services/api'
import { Component, useEffect, useRef, useState } from 'react'

export const PostPreview = () => {
	const [posts, setPosts] = useState([])
	const [limit, setLimit] = useState(5)
	const [skip, setSkip] = useState(0)
	const [totalItems, setTotalItems] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [query, setQuery] = useState('')
	const [totalRenderState, setTotalRenderState] = useState(0)
	const isFirstRender = useRef(true)
	const totalRender = useRef(0)
	useEffect(() => {
		// setTotalRenderState(prev => prev + 1)
		console.log(`Компонент оновився ${totalRenderState} разів`)
	}, [totalRenderState])

	useEffect(() => {
		// Створення функції для запиту
		// if (isFirstRender.current) {
		// 	console.log('Відбувся перший рендер, ми його пропускаємо')
		// 	isFirstRender.current = false
		// 	return
		// }

		if (!query) {
			return
		}

		const fetchData = async () => {
			try {
				//Встановлення лоад в тру
				setLoading(true)
				// Отримання запиту з апі
				const { posts, total } = await fetchPosts({ skip, limit, q: query })
				// Розсипаємо минуле і додаємо нове
				setPosts(prev => [...prev, ...posts])
				// Встановлення тотал
				setTotalItems(total)
			} catch (error) {
			} finally {
				// Після запиту ставимо загрузку в фолз
				setLoading(false)
			}
		}

		fetchData()
	}, [limit, query, skip])

	const handleLoadMore = () => {
		// this.setState(prev => ({ skip: prev.skip + prev.limit }))
		setSkip(prev => prev + limit)
	}
	const handleChangeQuery = query => {
		if (!query) {
			toast.warning('Please change your query!')
		} else {
			setQuery(query)
			setSkip(0)
			setPosts([])
		}
		// if (query === this.state.query) {
		// 	toast.warning('Please change your query!')
		// } else {
		// 	this.setState({ query, skip: 0, posts: [] })
		// }
	}
	return (
		<Container>
			<SearchForm setQuery={handleChangeQuery} />
			{loading && !posts.length ? <Spinner /> : <Posts data={posts} />}
			<Button disabled={loading} onClick={handleLoadMore}>
				{loading ? 'Loading...' : 'Load More'}
			</Button>
		</Container>
	)
}

// export class PostPreview extends Component {
// 	state = {
// 		posts: [],
// 		limit: 5,
// 		skip: 0,
// 		total: null,
// 		error: '',
// 		loading: false,
// 		query: '',
// 		buttonIsGone: false,
// 	}

// 	async componentDidMount() {
// 		const { limit } = this.state
// try {
// 	this.setState({ loading: true })
// 	const { posts, total } = await fetchPosts({ limit })
// 	this.setState({ posts, total })
// } catch (error) {
// } finally {
// 	this.setState({ loading: false })
// }
// 	}

// 	async componentDidUpdate(prevProps, prevState) {
// 		const { skip, limit, query } = this.state
// 		if (prevState.skip !== skip || prevState.query !== query) {
// 			try {
// 				this.setState({ loading: true })
// 				const { posts, total, skip } = await fetchPosts({ limit, skip: this.state.skip, q: query })
// 				this.setState(prev => ({ skip, posts: [...prev.posts, ...posts], total }))
// 			} catch (error) {
// 			} finally {
// 				this.setState({ loading: false })
// 			}
// 		}
// 		if (this.state.posts.length === this.state.total && this.state.buttonIsGone !== prevState.buttonIsGone) {
// 			this.setState({ buttonIsGone: true })
// 		}
// 	}

// handleLoadMore = () => {
// 	this.setState(prev => ({ skip: prev.skip + prev.limit }))
// }
// handleChangeQuery = query => {
// 	if (query === this.state.query) {
// 		toast.warning('Please change your query!')
// 	} else {
// 		this.setState({ query, skip: 0, posts: [] })
// 	}
// }

// 	render() {
// 		const { posts, loading, total, skip, buttonIsGone } = this.state
// return (
// 	<Container>
// 		<SearchForm setQuery={this.handleChangeQuery} />
// 		{loading && !posts.length ? <Spinner /> : <Posts data={posts} />}
// 		{buttonIsGone || (
// 			<Button disabled={loading} onClick={this.handleLoadMore}>
// 				{loading ? 'Loading...' : 'Load More'}
// 			</Button>
// 		)}
// 	</Container>
// )
// 	}
// }
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
