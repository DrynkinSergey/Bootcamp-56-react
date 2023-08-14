import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'

import { devToolsEnhancer } from '@redux-devtools/extension'
const rootReducer = combineReducers({
	counter: counterReducer,
})

const devTools = devToolsEnhancer()

export const store = createStore(rootReducer, devTools)

// RTK - Redux ToolKit
