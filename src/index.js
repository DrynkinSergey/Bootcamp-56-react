import 'modern-normalize'
import { App } from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
		<GlobalStyles />
		<ToastContainer autoClose={1000} />
	</BrowserRouter>
)
