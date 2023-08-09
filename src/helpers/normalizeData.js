export const normalizeData = data => {
	return data.map(({ id, firstName, lastName, age, gender, email, username, image }) => ({
		id,
		firstName,
		lastName,
		age,
		gender,
		email,
		username,
		image,
	}))
}
