import React, { Component } from 'react'
import { Posts } from './components/Posts/Posts'
import { SearchForm } from './components/SearchForm/SearchForm'
import { styled } from 'styled-components'

export class App extends Component {
	render() {
		return (
			<Container>
				<SearchForm />
				<Posts />
			</Container>
		)
	}
}
const Container = styled.div`
	max-width: 80vw;
	margin: 0 auto;
	padding: 20px;
`
