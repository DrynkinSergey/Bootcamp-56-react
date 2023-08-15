// Імпортуємо функцію для створення слайса а також нано айді
import { createSlice, nanoid } from '@reduxjs/toolkit'

// Створюємо початковий стан для слайса
const initialState = {
	todos: [],
	filter: 'all',
}

// Створюємо слайс для роботи, через функцію createSlice
export const todoSlice = createSlice({
	// Називаємо наш слайс, для девтулз, для внутрішніх речей
	name: 'todos',
	// Встановлюємо початковий стан
	initialState,
	// Створюємо редьюсери, котрі складаються з екшену (назва) , функції (значення)
	reducers: {
		// Описуємо редьюсер - назва : функція. До функції приходить (state, action)
		toggleTodo: (state, { payload }) => {
			//Робимо логіку роботи редьюсера
			// Шукаємо елемент з массива
			const item = state.todos.find(item => item.id === payload)
			// Тоглимо його. Можна так робити , бо працює immer
			item.completed = !item.completed
		},
		deleteTodo: (state, action) => {
			const itemIndex = state.todos.findIndex(item => item.id === action.payload)
			state.todos.splice(itemIndex, 1)
		},
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
		// Створюємо редьюсер, котрий буде складатись з prepare (зміненого payload'a)
		// Та самого редьюсера (функції)
		// 1. Відкриваємо об'єкт
		addTodo: {
			// 2. Пишемо prepare (зарезервоване слово): в значення (title) приходить пейлод з компонента - текст нової задачі
			prepare: title => {
				// Повертаємо новий доповнений payload
				return {
					// Розширюємо пейлоад будьякими данними
					payload: {
						title,
						id: nanoid(),
						completed: false,
					},
				}
			},
			// reducer (зарезервоване слово)
			// На цьому етапі ми маємо вже розширений нами payload!
			reducer: (state, { payload }) => {
				// Пушимо в массив новий пейлоад {title,id: nanoid(),	completed: false,	}
				state.todos.push(payload)
			},
		},
	},
})

// Екпортуємо наші екшени, щоб вони працювали в компонентах при dispatch
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions

// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const todoReducer = todoSlice.reducer
