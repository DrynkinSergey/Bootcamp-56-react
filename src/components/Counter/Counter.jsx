import React, { useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	const handleIncrement = () => {
		setCounter(prev => prev + step)
		// this.setState(prevState => {
		// 	return {
		// 		counter: prevState.counter + prevState.step,
		// 	}
		// })
	}

	const handleDecrement = () => {
		setCounter(prev => prev - step)
		// this.setState(prevState => ({
		// 	counter: prevState.counter - prevState.step,
		// }))
	}

	const handleReset = () => {
		// this.setState({ counter: 0, step: 1 })
		setCounter(0)
		setStep(1)
	}
	const handleChangeStep = e => {
		setStep(+e.target.value)
		// this.setState({ step: +e.target.value })
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

// export class Counter extends React.Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 	}

// 	componentDidMount() {
// 		console.log('Counter is mount')
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.counter !== this.state.counter) {
// 			console.log('Counter was updated')
// 		}
// 		if (prevState.step !== this.state.step) {
// 			console.log('Step was updated')
// 		}
// 		// if (prevState.step) console.log('Updated counter or step')
// 		if (this.state.counter === 5 && this.state.step !== 10) {
// 			console.log('Update step')
// 			this.setState({ step: 10 })
// 		}
// 	}

// updateToTen = () => {
// 	this.setState({ step: 10 })
// }

// handleIncrement = () => {
// 	this.setState(prevState => {
// 		return {
// 			counter: prevState.counter + prevState.step,
// 		}
// 	})
// }

// handleDecrement = () => {
// 	this.setState(prevState => ({
// 		counter: prevState.counter - prevState.step,
// 	}))
// }

// handleReset = () => {
// 	this.setState({ counter: 0, step: 1 })
// }
// handleChangeStep = e => {
// 	this.setState({ step: +e.target.value })
// }

// 	render() {
// 		return (
// 			<FlexContainer>
// 				<StyledCounter>
// 					<input placeholder='change step' value={this.state.step} onChange={this.handleChangeStep} />
// 					<h2 style={{ color: 'white', fontSize: '3rem' }}>{this.state.counter}</h2>
// 					<Flex>
// 						<StyledButton onClick={this.handleDecrement}>minus</StyledButton>
// 						<StyledButton onClick={this.handleReset}>reset</StyledButton>
// 						<StyledButton onClick={this.handleIncrement}>plus</StyledButton>
// 					</Flex>
// 				</StyledCounter>
// 			</FlexContainer>
// 		)
// 	}
// }
// export const Counter = () => {
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{0}</h1>
// 			<Flex>
// 				<StyledButton onClick={() => console.log('click')}>
// 					minus
// 				</StyledButton>
// 				<StyledButton>reset</StyledButton>
// 				<StyledButton>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// }
