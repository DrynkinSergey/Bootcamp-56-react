import React, { Component } from 'react'
import { Posts } from './components/Posts/Posts'
import { SearchForm } from './components/SearchForm/SearchForm'
import { styled } from 'styled-components'
import { Spinner } from './components/Posts/Spinner'
import { fetchPosts } from './Services/api'

export class App extends Component {
	state = {
		posts: [],
		limit: 10,
		skip: 0,
		total: null,
		error: '',
		loading: false,
	}
	async componentDidMount() {
		try {
			this.setState({ loading: true })
			const { posts, skip, total } = await fetchPosts()
			this.setState({ posts, skip, total })
		} catch (error) {
		} finally {
			this.setState({ loading: false })
		}
	}

	render() {
		const { posts, loading } = this.state
		return (
			<Container>
				<SearchForm />
				{loading ? <Spinner /> : <Posts data={posts} />}
			</Container>
		)
	}
}
const Container = styled.div`
	max-width: 80vw;
	margin: 0 auto;
	padding: 20px;
`
