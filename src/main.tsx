import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import DashBoardPage from './pages/DashBoardPage.tsx'
import Header from './components/shared/Header.tsx'
import FriendsPage from './pages/FriendsPage.tsx'
import GroupsPage from './pages/GroupsPage.tsx'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <LandingPage /> },
			{
				path: 'dashboard', element: <>
					<Header />
					<DashBoardPage />
				</>
			},
			{
				path: 'friends', element: <>
					<Header />
					<FriendsPage />
				</>
			},
			{
				path: 'groups', element: <>
					<Header />
					<GroupsPage />
				</>
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={appRouter} />
	</StrictMode>,
)
