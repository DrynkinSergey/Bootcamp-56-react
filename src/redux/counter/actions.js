import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const reset = createAction('counter/reset')
export const incByValue = createAction('counter/incByValue')
// console.log(createAction('counter/increment'))
// console.log(increment())
// console.log(increment(23).type)
// console.log(decrement().type)
// console.log(increment(123))
// console.log(increment({ name: 'alex', id: 123, completed: false }))
