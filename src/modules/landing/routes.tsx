import { RouteObject } from 'react-router'

import { LandingPage } from './pages/landing'
import { NotFoundPage } from './pages/not-found'

export const landingRoutes: RouteObject[] = [
	{
		path: '/',
		element: <LandingPage />,
		errorElement: <NotFoundPage />,
	},
]
