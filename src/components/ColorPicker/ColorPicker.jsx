import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import React from 'react'
import colors from '../../assets/colors.json'
import { toast } from 'react-toastify'
export class ColorPicker extends React.PureComponent {
	static defaultProps = {
		colors,
		message: 'Ми забули месседж',
	}

	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// white !== white ==>>> false
	// 	// white !== lightblue ==>>> true
	// 	return this.state.currentColor !== nextState.currentColor
	// }
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.text !== this.props.text) {
			console.log('update props')
		}
		if (prevState.currentColor !== this.state.currentColor) {
			console.log('update state')
		}
	}

	handleChangeColor = color => {
		this.setState({ currentColor: color })
		toast.success('You changed color')
	}

	render() {
		const { currentColor, colors } = this.state
		const { message, text } = this.props
		return (
			<StyledBackgroundTheme $bg={currentColor}>
				<h1>Our props message: {text}</h1>
				<h1>Our color: {currentColor}</h1>
				<StyledColorPalette>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor $bg={currentColor} onClick={() => this.handleChangeColor(item.color)} key={item.id}>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}

// export const ColorPicker = ({message}) => {
// return (
// 	<StyledBackgroundTheme>
// 		<StyledColorPalette>
// 			<StyledColorsList>
// 				{colors.map(item => (
// 					<StyledColor key={item.id}>{item.color}</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// }
