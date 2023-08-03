import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import React from 'react'
import colors from '../../assets/colors.json'
export class ColorPicker extends React.Component {
	static defaultProps = {
		colors,
		message: 'Ми забули месседж',
	}

	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.currentColor !== nextState.currentColor
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('update')
	}

	handleChangeColor = color => {
		this.setState({ currentColor: color })
	}

	render() {
		const { currentColor, colors } = this.state
		const { message } = this.props
		return (
			<StyledBackgroundTheme $bg={currentColor}>
				<h1>Our props message: {message}</h1>
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
