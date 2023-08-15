import 'modern-normalize'
import { App } from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// Огортаємо Провайдером , передаємо пропс store для того,щоб працював редакс
	// Імпорт store йде з файлу стор в редаксі
	<PersistGate loading={null} persistor={persistor}>
		<Provider store={store}>
			<App />
			<GlobalStyles />
			<ToastContainer autoClose={1000} />
		</Provider>
	</PersistGate>
)
