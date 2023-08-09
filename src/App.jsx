import { useContext, useEffect, useRef, useState } from 'react'
import { Modal } from './components/Modal/Modal'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { fetchUsers } from './Services/api'
import { MyContext } from './store/context/ContextProvider'
import { HomePage } from './components/HomePage/HomePage'

export const App = () => {
	const isFirstRender = useRef(true)
	const [userName, setUserName] = useState('')
	const { login, user, isLoggedIn, logout } = useContext(MyContext)
	const getUsers = async () => {
		try {
			const res = await fetchUsers()
			console.log(res)
		} catch (error) {}
	}

	useEffect(() => {
		getUsers()
	}, [])

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
