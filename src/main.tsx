import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import HomePage from './pages/HomePage.tsx'

const appRouter = createBrowserRouter([
	{
		path: '/', 
		element: <App/>,
		children: [
			{path: '', element: <LandingPage/> },
			{path: 'home', element: <HomePage/> },
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={appRouter} />
	</StrictMode>,
)
