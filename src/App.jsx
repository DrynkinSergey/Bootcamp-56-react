import React, { Component } from 'react'
import { Posts } from './components/Posts/Posts'
import { SearchForm } from './components/SearchForm/SearchForm'
import { styled } from 'styled-components'
import { Spinner } from './components/Posts/Spinner'
import { fetchPosts } from './Services/api'
import { toast } from 'react-toastify'

export class App extends Component {
	state = {
		posts: [],
		limit: 5,
		skip: 0,
		total: null,
		error: '',
		loading: false,
		query: '',
		buttonIsGone: false,
	}

	async componentDidMount() {
		const { limit } = this.state
		try {
			this.setState({ loading: true })
			const { posts, total } = await fetchPosts({ limit })
			this.setState({ posts, total })
		} catch (error) {
		} finally {
			this.setState({ loading: false })
		}
	}

	async componentDidUpdate(prevProps, prevState) {
		const { skip, limit, query } = this.state
		if (prevState.skip !== skip || prevState.query !== query) {
			try {
				this.setState({ loading: true })
				const { posts, total, skip } = await fetchPosts({ limit, skip: this.state.skip, q: query })
				this.setState(prev => ({ skip, posts: [...prev.posts, ...posts], total }))
			} catch (error) {
			} finally {
				this.setState({ loading: false })
			}
		}
		if (this.state.posts.length === this.state.total && this.state.buttonIsGone !== prevState.buttonIsGone) {
			this.setState({ buttonIsGone: true })
		}
	}

	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	handleChangeQuery = query => {
		if (query === this.state.query) {
			toast.warning('Please change your query!')
		} else {
			this.setState({ query, skip: 0, posts: [] })
		}
	}

	render() {
		const { posts, loading, total, skip, buttonIsGone } = this.state
		return (
			<Container>
				<SearchForm setQuery={this.handleChangeQuery} />
				{loading && !posts.length ? <Spinner /> : <Posts data={posts} />}
				{buttonIsGone || (
					<Button disabled={loading} onClick={this.handleLoadMore}>
						{loading ? 'Loading...' : 'Load More'}
					</Button>
				)}
			</Container>
		)
	}
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
