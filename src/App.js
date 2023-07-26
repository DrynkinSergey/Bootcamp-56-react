import React from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { Wrapper } from './components/Wrapper'

export const App = () => {
	const moviesData = [
		{ id: 1, title: 'Terminator' },
		{ id: 2, title: 'Taxi' },
		{ id: 3, title: 'StepUp' },
		{ id: 4, title: 'TEst123' },
	]
	const goodsData = [
		{ id: 1, title: 'Phone' },
		{ id: 2, title: 'Cabbage' },
		{ id: 3, title: 'Milk' },
	]
	const isOnline = false
	return (
		<>
			<Header />
			{isOnline ? <h1>ONLINE</h1> : <h1>Offline</h1>}
			{isOnline ? (
				<Section sectionTitle='Movies' data={moviesData} />
			) : (
				<Section sectionTitle='Goods' data={goodsData} />
			)}
			{isOnline ? <h2>Welcome back</h2> : <h2>Please login</h2>}

			<Wrapper>
				<h1>Hello world</h1>
			</Wrapper>

			<Wrapper>
				<h1>hello</h1>
			</Wrapper>
		</>
	)
}
