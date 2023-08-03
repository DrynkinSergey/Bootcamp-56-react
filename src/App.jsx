import React, { Component } from 'react'
import { ReactComponent as Icon } from './assets/icon.svg'
import { Counter } from './components/Counter/Counter'
import { Employee } from './components/Employees/Employee'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Test } from './components/Test'
import { AiFillAudio, AiOutlineCloseSquare } from 'react-icons/ai'
import { MySvg } from './components/MySvg'
export class App extends Component {
	state = {
		text: 'React',
		count: 0,
	}
	onSubmit = e => {
		e.preventDefault()
	}
	// set = event => {}
	// {
	//  button:changeProps => onClick={() => this.setState(prev => ({ count: prev.count + 1 }))
	// button: setValue => onCLick => {this.setValue}
	// input: setInput => onChange => {this.setInput}
	// }
	render() {
		return (
			<div>
				<h1>
					<AiFillAudio size={300} color='red' />
					<AiOutlineCloseSquare />
					<MySvg color='black' svgName='settings' />
					<MySvg color='black' svgName='settings2' />
				</h1>
				<ColorPicker text={this.state.count} />
			</div>
		)
	}
}
