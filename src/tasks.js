// const arr = ['apple', 'banana', 'tomato', 'milk']
// const fn = arr => {
// 	return arr.filter(el => el.length > 5)
// }
// console.log(fn(arr))

// const str = 'level'

// const fn = str => {
// 	return str.split('').reverse().join('') === str
// }
// console.log(fn(str))

// Напишіть функцію, яка приймає на вхід масив чисел і повертає суму всіх елементів цього масиву

const arr = [1, 4, 6]

const totalFn = arr => {
	return arr.reduce((arr, num) => {
		return (arr += num)
	}, 0)
	// let total = 0
	// for (let i = 0; i < arr.length; i++) {
	// 	total += arr[i]
	// }
	// return total
}
const a = totalFn(arr)

console.log(a)
