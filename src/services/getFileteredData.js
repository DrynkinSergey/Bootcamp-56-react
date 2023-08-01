export const getFilteredData = state => {
	const { users, activeSkill, isAvailable, searchValue } = state

	return users
		.filter(user =>
			user.name.toLowerCase().includes(searchValue.toLowerCase().trim())
		)
		.filter(user =>
			activeSkill === 'all' ? user : user.skills.includes(activeSkill)
		)
		.filter(user => (isAvailable ? user.isOpenToWork : user))
}
