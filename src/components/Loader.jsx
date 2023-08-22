import React from 'react'
import { Triangle } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className='flex justify-center bg-darkMain items-center min-h-screen'>
			<h1 className='text-4xl text-teal-500'>
				<Triangle
					height='480'
					width='480'
					color='#007bff'
					ariaLabel='triangle-loading'
					wrapperStyle={{}}
					wrapperClassName=''
					visible={true}
				/>
			</h1>
		</div>
	)
}
