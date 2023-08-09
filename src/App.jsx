import { useEffect, useRef, useState } from 'react'
import { Modal } from './components/Modal/Modal'
import { RegisterForm } from './components/RegisterForm/RegisterForm'

export const App = () => {
	const [value, setValue] = useState(1)
	const isFirstRender = useRef(true)
	useEffect(() => {
		console.log('1.Render')
	}, [])

	useEffect(() => {
		// Пропуск першого рендера
		if (isFirstRender.current) {
			console.log('2.First render')
			console.log('ref', isFirstRender)

			//Встановлюємо, Що рендер був, і наступний раз не потрібно виводити повідомлення
			isFirstRender.current = false

			//Вихід з useEffect
			return
		}
		// Ця частина коду виконається тільки починаючи з другого рендера
		console.log('Другий і наступні відмальовки')
	}, [value])
	return (
		<>
			<button onClick={() => setValue(value + 1)}>Click</button>
			<RegisterForm />
		</>
	)
}
