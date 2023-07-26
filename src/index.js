import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

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

// const el2 = React.createElement(
// 	'div',
// 	null,
// 	React.createElement('ul', { title: 'first h1 tag' }, [
// 		React.createElement('li', null, 'Hello, i am a span'),
// 		React.createElement('li', null, 'Hello, i am a span 2'),
// 	])
// )
//JSX

const myJsxElement = (
	<>
		<ul>
			<li style={{ color: 'red' }}>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</>
)

const Header = () => {
	return (
		<header>
			<h1>Logo</h1>
			<hr />
		</header>
	)
}
const Content = () => {
	return (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit
			expedita vero accusamus, aspernatur esse aliquid facilis, laborum ad
			eveniet magni repellat eum laboriosam exercitationem. Sapiente molestias
			iusto vero rerum. Quia voluptatum soluta sequi neque eius expedita
			provident quam aspernatur voluptas eveniet deleniti, odit ratione autem
			saepe molestiae laboriosam dignissimos minima deserunt. Perspiciatis
			voluptatem consequatur quos est minima quae quam? Vero consequuntur hic
			nihil cum saepe iste quaerat, facilis sed voluptates inventore voluptatem
			molestiae tempora libero voluptas eveniet, quo deserunt dignissimos amet
			iusto eum perferendis, odit labore! Repudiandae, commodi ipsam.
		</p>
	)
}

const MyFirstComponent = () => {
	return (
		<>
			<Header />
			<h1>Hello, REACT JS!</h1>
			<Content />
			<hr />
			<Content />
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// import './index.css'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
