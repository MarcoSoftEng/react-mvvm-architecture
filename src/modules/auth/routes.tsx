import { AuthLayout } from '@src/shared/layouts/auth-layout'
import { Navigate, RouteObject } from 'react-router'

import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

export const authRoutes: RouteObject[] = [
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{ path: '', element: <Navigate to='sign-in' /> },
			{ path: 'sign-in', element: <SignInPage /> },
			{ path: 'sign-up', element: <SignUpPage /> },
		],
	},
]
