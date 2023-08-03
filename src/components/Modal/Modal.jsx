import { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

export class Modal extends Component {
	timeotID = null
	intervalID = null

	componentDidMount() {
		//Встановлюємо інтервал кожну секунду
		this.intervalID = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)

		//Встановлюємо таймаут через 2 секунди
		this.timeotID = setTimeout(() => {
			console.log('Hello, friend')
		}, 2000)
		//Встановлюємо слухач подій, а саме натискання клавіш
		document.addEventListener('keydown', this.handleKeyDown)
	}

	componentWillUnmount() {
		console.log('Component was deleted')
		//Видаляємо слухача
		document.removeEventListener('keydown', this.handleKeyDown)

		//Видаляємо таймаут
		clearTimeout(this.timeotID)

		//Видаляємо інтервал
		clearInterval(this.intervalID)
	}

	onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	}
	handleKeyDown = e => {
		if (e.key === 'Escape') {
			console.log(e.key)
			this.props.onClose()
		}
	}
	render() {
		return (
			<ModalWrapper onClick={this.onBackdropClick}>
				<ModalContent>
					<>
						<h1>Modal</h1>
						<hr />
					</>
					<CloseButton onClick={this.props.onClose}>×</CloseButton>
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}
