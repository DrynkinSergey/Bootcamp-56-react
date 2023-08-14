import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'

import { devToolsEnhancer } from '@redux-devtools/extension'
import { todoReducer } from './todoList/reducer'

const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoReducer,
})

const devTools = devToolsEnhancer()

export const store = createStore(rootReducer, devTools)

// RTK - Redux ToolKit
