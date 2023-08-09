import { useEffect, useRef, useState } from 'react'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { HomePage } from './components/HomePage/HomePage'
import { useMyContext } from './hooks/useMyContext'

export const App = () => {
	const { isLoggedIn } = useMyContext()
	// const fullContextValue = useMyContext()
	// console.log(fullContextValue)
	// useEffect(() => {
	// 	// Пропуск першого рендера
	// 	if (isFirstRender.current) {
	// 		console.log('2.First render')
	// 		console.log('ref', isFirstRender)

	// 		//Встановлюємо, Що рендер був, і наступний раз не потрібно виводити повідомлення
	// 		isFirstRender.current = false

	// 		//Вихід з useEffect
	// 		return
	// 	}
	// 	// Ця частина коду виконається тільки починаючи з другого рендера
	// 	console.log('Другий і наступні відмальовки')
	// }, [value])
	return <>{!isLoggedIn ? <RegisterForm /> : <HomePage />}</>
}
