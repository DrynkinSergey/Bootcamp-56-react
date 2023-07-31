import React from 'react'
import {
	Flex,
	FlexContainer,
	StyledButton,
	StyledCounter,
} from './Counter.styled'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}

	handleIncrement = () => {
		// Без попереднього
		// this.setState({ counter: this.state.counter + 1 })

		// З попереднім станом
		this.setState(prevState => {
			return {
				counter: prevState.counter + prevState.step,
			}
		})
	}

	handleDecrement = () => {
		// this.setState({ counter: this.state.counter - 1 })
		this.setState(prevState => ({
			counter: prevState.counter - prevState.step,
		}))
	}

	handleReset = () => {
		this.setState({ counter: 0, step: 1 })
	}
	handleChangeStep = e => {
		console.log(e.target.value)
		this.setState({ step: +e.target.value })
	}

	render() {
		return (
			<FlexContainer>
				<StyledCounter>
					<input
						placeholder='change step'
						value={this.state.step}
						onChange={this.handleChangeStep}
					/>
					<h2 style={{ color: 'white', fontSize: '3rem' }}>
						{this.state.counter}
					</h2>
					<Flex>
						<StyledButton onClick={this.handleDecrement}>minus</StyledButton>
						<StyledButton onClick={this.handleReset}>reset</StyledButton>
						<StyledButton onClick={this.handleIncrement}>plus</StyledButton>
					</Flex>
				</StyledCounter>
			</FlexContainer>
		)
	}
}
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
