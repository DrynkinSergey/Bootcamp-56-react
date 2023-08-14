import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'

export const Counter = () => {
	const { counter, step } = useSelector(state => state.counter)

	return (
		<Flex>
			<h1>Counter Redux</h1>
			<h2>{counter}</h2>
			<div>
				<button>Minus</button>
				<button>Reset</button>
				<button>Plus</button>
			</div>
		</Flex>
	)
}
export const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
`
