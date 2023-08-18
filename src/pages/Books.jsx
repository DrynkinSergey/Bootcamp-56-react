import React from 'react'
import { useAddBookMutation, useDeleteBookMutation, useFetchBooksQuery } from '../redux/rtkQUERY/api'

export const Books = () => {
	const { data: books = [], isLoading, isError } = useFetchBooksQuery()
	const [addBook] = useAddBookMutation()
	const [deleteBook] = useDeleteBookMutation()
	const handleAddBook = () => {
		const body = {
			title: 'Eloquent JavaScript, Third Edition',
			author: 'TEST AUTHOR',
		}
		addBook(body)
	}

	const handleDelete = id => {
		deleteBook(id)
	}

	return (
		<>
			<h1>Books</h1>
			<button onClick={handleAddBook}>ADD BOOK</button>
			{isLoading && <h1>loading</h1>}
			{isError && <h1>Error</h1>}
			<ul className='flex flex-col gap-10'>
				{books
					.map(book => (
						<li key={book.id}>
							<h2>{book.title}</h2>
							<p>{book.author}</p>
							<button className='border-2 border-black px-4 py-2' onClick={() => handleDelete(book.id)}>
								DELETE THIS AWESOME BOOK
							</button>
						</li>
					))
					.reverse()}
			</ul>
		</>
	)
}
