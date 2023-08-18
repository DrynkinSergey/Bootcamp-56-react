export const calculateTodos = todos => {
	console.log('calculate')
	return todos.reduce((acc, curr) => (curr.completed ? acc : acc + 1), 0)
}
