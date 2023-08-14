import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'

export const Counter = () => {
	const { counter } = useSelector(state => state.counter)
	const dispatch = useDispatch()

	const increment = () => {
		dispatch({ type: 'INC' })
	}
	const reset = () => {
		dispatch({ type: 'RESET' })
	}
	const incrementBy10 = () => {
		dispatch({ type: 'INC_BY_10', payload: 10 })
	}

	return (
		<Flex>
			<h1>Counter Redux</h1>
			<h2>{counter}</h2>
			<div>
				<button onClick={() => dispatch({ type: 'DEC' })}>Minus</button>
				<button onClick={reset}>Reset</button>
				<button onClick={increment}>Plus</button>
				<button onClick={incrementBy10}>Plus 10</button>
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
