import React, { useMemo } from 'react'
import bg from '../assets/images/bg-desktop-dark.jpg'
import bgMobile from '../assets/images/bg-mobile-dark.jpg'
import { AddForm } from '../components/Todo/AddForm'
import { TodoList } from '../components/Todo/todoList'
import { fetchTodos } from '../redux/operations'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Filter } from '../components/Todo/Filter'

export const Todo = () => {
	const bgImage = useMemo(
		() => (
			<>
				<img className='absolute hidden md:block w-full h-1/2 object-cover left-0 z-1' src={bg} alt='bgImage' />
				<img className='fixed md:hidden block w-full h-1/2 object-cover left-0 z-1' src={bgMobile} alt='bgImage' />
			</>
		),
		[]
	)
	return (
		<div className=' bg-darkVeryBG min-h-screen px-6 text-lg'>
			{bgImage}
			<div className='relative z-2 flex w-full  sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/4 flex-col mx-auto py-40 '>
				<span className='font-extrabold mb-8 text-2xl text-white/80'>TODO:</span>
				<AddForm />
				<TodoList />
				<Filter />
			</div>
		</div>
	)
}
