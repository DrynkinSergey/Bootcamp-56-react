import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../redux/postsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { selectPosts } from '../redux/selectors'
import { useNavigate } from 'react-router-dom'

export const AddPost = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const posts = useSelector(selectPosts)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleSubmit = e => {
		e.preventDefault()
		if (!title || !body) {
			toast.error('Enter your post data!')
			return
		}
		const isPostExist = posts.find(post => post.title === title)
		if (isPostExist) {
			toast.error(`Post with  value: ${title}, already have!!!`)
			return
		}
		const newPost = {
			title,
			body,
			id: nanoid(),
		}
		dispatch(addPost(newPost))
		toast.success('You add post! ')
		setTitle('')
		setBody('')
		navigate('/posts')
	}
	return (
		<section className='flex flex-col gap-4 mx-auto min-h-[80vh] items-center justify-center mt-4 '>
			<div className='border-2 border-black rounded-lg shadow-md px-4 py-6'>
				<h1 className='mx-auto'>Add new post</h1>
				<form className='mx-auto flex flex-col gap-4' onSubmit={handleSubmit}>
					<input
						className='px-4 text-2xl   border-2 border-black'
						placeholder='Enter your title....'
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<input
						placeholder='Enter your body....'
						className='px-4 text-2xl   border-2 border-black'
						type='text'
						value={body}
						onChange={e => setBody(e.target.value)}
					/>
					<div>
						<button type='submit' className='border-2 border-black rounded-md w-1/2  px-4 py-2'>
							Add post
						</button>
						<button
							type='cancel'
							onClick={() => navigate('/posts')}
							className='border-2 border-black rounded-md w-1/2  px-4 py-2'
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
