import './index.css'
import 'modern-normalize'
import { App } from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<App />
		<GlobalStyles />
	</ThemeProvider>
)
