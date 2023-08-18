import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllBooks } from '../redux/selectors'
import { useEffect } from 'react'
import { fetchAllBooks } from '../redux/Books/operations'

export const Books = () => {
	const books = useSelector(selectAllBooks)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllBooks())
	}, [dispatch])

	return (
		<>
			<h1>Books</h1>
			<ul className='flex flex-col gap-10'>
				{books.map(book => (
					<li key={book.id}>
						<h2>{book.title}</h2>
						<p>{book.author}</p>
					</li>
				))}
			</ul>
		</>
	)
}
