export const Filter = () => {
	const filter = ''
	const setClasses = type => (filter === type ? `${classes} text-blue-600` : classes)
	const classes = 'hover:text-white cursor-pointer'
	return (
		<li className='bg-darkMain list-none  py-4 flex-col md:flex-row  text-white/40 flex justify-between px-8 items-center'>
			{'0' === 0 ? (
				<span className='md:order-1 order-1'>All is complete!</span>
			) : (
				<span className='md:order-1 order-1'>
					<span className='text-blue-500'>{'0'}</span> items left
				</span>
			)}
			<div className='flex gap-4 order-3 mt-4 md:mt-0  md:order-2'>
				<span className={setClasses('all')}>All</span>
				<span className={setClasses('active')}>Active</span>
				<span className={setClasses('completed')}>Completed</span>
			</div>
		</li>
	)
}
