import React from 'react'
import ReactDOM from 'react-dom/client'

// <a href='/' title='Link'>Go to React!</a>

const el = React.createElement(
	'a',
	{
		href: '/',
		title: 'Link',
		id: 'linkTutor',
	},
	'Go to React!'
)

const el2 = React.createElement(
	'div',
	null,
	React.createElement('ul', { title: 'first h1 tag' }, [
		React.createElement('li', null, 'Hello, i am a span'),
		React.createElement('li', null, 'Hello, i am a span 2'),
	])
)
console.log(el)

const root = ReactDOM.createRoot(document.getElementById('root')).render(el2)

// import './index.css'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
