import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { increment, decrement, reset, incByValue } from '../../redux/counter/actions'
export const Counter = () => {
	const { counter } = useSelector(state => state.counter)
	const dispatch = useDispatch()

	const inc = () => {
		dispatch(increment())
	}
	const resetValue = () => {
		dispatch(reset())
	}
	const incrementBy10 = () => {
		dispatch(incByValue(11))
	}

	return (
		<Flex>
			<h1>Counter Redux</h1>
			<h2>{counter}</h2>
			<div>
				<button onClick={() => dispatch(decrement())}>Minus</button>
				<button onClick={resetValue}>Reset</button>
				<button onClick={inc}>Plus</button>
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
