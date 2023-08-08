import { createContext } from 'react'

export const MyContext = createContext()
export const contexValue = {
	user: {
		username: 'Alex',
	},
	colors: ['white', 'green'],
	todoValue: 'TODO CONTEXT VALUE',
}
