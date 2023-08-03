import React, { Component } from 'react'
import { Counter } from './components/Counter/Counter'
import { Employee } from './components/Employees/Employee'
import { ColorPicker } from './components/ColorPicker/ColorPicker'

export class App extends Component {
	render() {
		return (
			<div>
				<ColorPicker />
			</div>
		)
	}
}
