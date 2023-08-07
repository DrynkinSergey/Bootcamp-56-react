import React, { useEffect, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	// Функція виконається один раз при монтуванні
	useEffect(() => {
		console.log('Counter is mount')
	}, [])

	useEffect(() => {
		if (!counter) {
			return
		}
		console.log('Counter was updated')
		if (counter === 5) {
			console.log('Hello')
		}
	}, [counter])

	useEffect(() => {
		console.log('Step or counter was updated')
	}, [step, counter])

	const handleIncrement = () => {
		setCounter(prev => prev + step)
	}

	const handleDecrement = () => {
		setCounter(prev => prev - step)
	}

	const handleReset = () => {
		setCounter(0)
		setStep(1)
	}
	const handleChangeStep = e => {
		setStep(+e.target.value)
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<input placeholder='change step' value={step} onChange={handleChangeStep} />
				<h2 style={{ color: 'white', fontSize: '3rem' }}>{counter}</h2>
				<Flex>
					<StyledButton onClick={handleDecrement}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handleIncrement}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
