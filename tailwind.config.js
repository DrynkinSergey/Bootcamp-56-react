/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			josefin: ['Josefin Sans', 'sans-serif'],
		},
		extend: {
			gridTemplateColumns: {
				todo: '55px 3fr 1fr ',
			},
			colors: {
				darkMain: 'hsl(235, 24%, 19%)',
				darkVeryBG: 'hsl(235, 21%, 11%)',
				checkboxFrom: 'hsl(192, 100%, 67%)',
				checkboxTo: 'hsl(280, 87%, 65%)',
			},
			boxShadow: {
				mainDark: '0 6px 13px 2px rgba(0, 0, 0, 0.4)',
			},
		},
	},
	plugins: [],
}
