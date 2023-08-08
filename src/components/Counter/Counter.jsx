import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { Modal } from '../Modal/Modal'

export const Counter = () => {
	const [calcValue, setCalcValue] = useState(1)
	const [isOpen, setIsOpen] = useState(false)

	const initialState = {
		counter: 0,
		step: 1,
	}

	const counterReducer = (state, action) => {
		console.log(action)
		switch (action.type) {
			case 'increment':
				return {
					...state,
					counter: state.counter + state.step,
				}

			case 'decrement':
				return {
					...state,
					counter: state.counter - state.step,
				}

			case 'reset':
				return {
					...state,
					counter: 0,
					step: 1,
				}

			case 'setStep':
				return {
					...state,
					step: action.payload,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(counterReducer, initialState)
	const { step, counter } = state

	const toggleModal = () => {
		setIsOpen(prev => !prev)
	}

	const calculateSmth = value => {
		for (let i = 1; i < 1000000000; i++) {}
		console.log('calc')
		return value * 2
	}

	const myResult = useMemo(() => {
		return calculateSmth(calcValue)
	}, [calcValue])
	// console.log(myResult)
	// const myResult = calculateSmth(calcValue)

	const handleIncrement = () => {
		// setCounter(prev => prev + step)
		dispatch({ type: 'increment' })
	}

	const handleDecrement = () => {
		// setCounter(prev => prev - step)
		dispatch({ type: 'decrement' })
	}

	const handleReset = () => {
		// setCounter(0)
		// setStep(1)
		dispatch({ type: 'reset' })
	}
	const handleChangeStep = e => {
		// setStep(+e.target.value)
		dispatch({ type: 'setStep', payload: +e.target.value })
	}

	return (
		<FlexContainer>
			<StyledCounter>
				{/* <button onClick={toggleModal}>Open modal</button> */}
				{/* <h1 onClick={() => setCalcValue(prev => prev + 1)}>Res: {myResult}</h1> */}
				<input placeholder='change step' value={step} onChange={handleChangeStep} />
				<h2 style={{ color: 'white', fontSize: '3rem' }}>{counter}</h2>
				<Flex>
					<StyledButton onClick={handleDecrement}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handleIncrement}>plus</StyledButton>
				</Flex>
				{isOpen && <Modal onClose={toggleModal} />}
			</StyledCounter>
		</FlexContainer>
	)
}
