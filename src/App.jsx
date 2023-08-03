import React, { Component } from 'react'
import { Posts } from './components/Posts/Posts'
import { fetchPosts } from './components/Services/api'
import { SearchForm } from './components/SearchForm/SearchForm'
import { styled } from 'styled-components'
import { ColorRing } from 'react-loader-spinner'

export class App extends Component {
	state = {
		posts: [],
		page: 1,
		limit: 10,
		skip: 0,
		total: null,
		query: '',
		error: '',
		loading: false,
	}

	async componentDidMount() {
		try {
			this.setState({ loading: true })
			const { posts, limit, skip, total } = await fetchPosts({ limit: 3 })
			this.setState(prev => ({ posts: [...prev.posts, ...posts], limit, skip, total }))
		} catch (error) {
			alert(error.message)
		} finally {
			this.setState({ loading: false })
		}
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query || prevState.skip !== this.state.skip) {
			try {
				this.setState({ loading: true })

				const { posts, total } = await fetchPosts({ limit: 3, q: this.state.query, skip: this.state.skip })
				this.setState(prev => ({
					posts: prevState.query !== this.state.query ? posts : [...prev.posts, ...posts],
					total,
				}))
			} catch (error) {
				alert(error.message)
			} finally {
				this.setState({ loading: false })
			}
		}
	}

	handleChangeQuery = query => {
		this.setState({ query })
	}
	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}

	render() {
		const { loading, posts } = this.state
		return (
			<Container>
				<SearchForm setQuery={this.handleChangeQuery} />
				{loading && !posts.length ? <h1>Loading...</h1> : <Posts data={this.state.posts} />}
				{posts.length ? (
					<button disabled={loading} onClick={this.handleLoadMore}>
						{loading ? (
							<ColorRing
								visible={true}
								height='20'
								width='20'
								ariaLabel='blocks-loading'
								wrapperStyle={{}}
								wrapperClass='blocks-wrapper'
								colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
							/>
						) : (
							'LoadMore'
						)}
					</button>
				) : null}
			</Container>
		)
	}
}
const Container = styled.div`
	max-width: 80vw;
	margin: 0 auto;
	padding: 20px;
`
