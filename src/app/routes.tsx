import { authRoutes } from '@src/modules/auth/routes'
import { landingRoutes } from '@src/modules/landing/routes'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([...landingRoutes, ...authRoutes])
