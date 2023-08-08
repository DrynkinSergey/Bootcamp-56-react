import { Component, useCallback, useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import ReactDOM from 'react-dom'

const modalRoot = document.querySelector('#modal')
// console.log(modalRoot)

export const Modal = ({ children, onClose }) => {
	const myInterval = useRef(null)

	//const inputRef = document.querySelector('input')
	const inputRef = useRef(null)

	const onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	const handleKeyDown = useCallback(
		e => {
			console.log(e.key)
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)
	useEffect(() => {
		console.log(myInterval)
		document.addEventListener('keydown', handleKeyDown)
		myInterval.current = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)
		console.log(inputRef.current)

		///////////////////Oчистка лісенирів, таймаутів, інтервалів
		// Аналог componentWillUnmount()

		return () => {
			console.log('Modal close')
			document.removeEventListener('keydown', handleKeyDown)

			clearInterval(myInterval.current)
		}
	}, [onClose, handleKeyDown])

	return ReactDOM.createPortal(
		<ModalWrapper onClick={onBackdropClick}>
			<ModalContent>
				<>
					<h1 ref={inputRef}>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalRoot
	)
}

// export class Modal extends Component {
// 	timeotID = null
// 	intervalID = null

// 	componentDidMount() {
// 		//Встановлюємо інтервал кожну секунду
// 		this.intervalID = setInterval(() => {
// 			console.log(new Date().toLocaleTimeString())
// 		}, 1000)

// 		//Встановлюємо таймаут через 2 секунди
// 		this.timeotID = setTimeout(() => {
// 			console.log('Hello, friend')
// 		}, 2000)
// 		//Встановлюємо слухач подій, а саме натискання клавіш
// 		document.addEventListener('keydown', this.handleKeyDown)
// 	}

// 	componentWillUnmount() {
// 		console.log('Component was deleted')
// 		//Видаляємо слухача
// 		document.removeEventListener('keydown', this.handleKeyDown)

// 		//Видаляємо таймаут
// 		clearTimeout(this.timeotID)

// 		//Видаляємо інтервал
// 		clearInterval(this.intervalID)
// 	}

// 	onBackdropClick = e => {
// 		if (e.target === e.currentTarget) {
// 			this.props.onClose()
// 		}
// 	}
// 	handleKeyDown = e => {
// 		if (e.key === 'Escape') {
// 			console.log(e.key)
// 			this.props.onClose()
// 		}
// 	}
// 	render() {
// return (
// 	<ModalWrapper onClick={this.onBackdropClick}>
// 		<ModalContent>
// 			<>
// 				<h1>Modal</h1>
// 				<hr />
// 			</>
// 			<CloseButton onClick={this.props.onClose}>×</CloseButton>
// 			{this.props.children}
// 		</ModalContent>
// 	</ModalWrapper>
// )
// 	}
// }
