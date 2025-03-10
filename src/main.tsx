import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Router } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router hook={useHashLocation}>
			<App />
		</Router>
	</StrictMode>,
)
