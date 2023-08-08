import 'modern-normalize'
import { App } from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<ThemeProvider theme={theme}>
			<App title='Hello optimization' />
			<GlobalStyles />
			<ToastContainer autoClose={1000} />
		</ThemeProvider>
	</>
)
