import { RouterProvider } from 'react-router'

import { router } from './routes'

export function Providers() {
	return <RouterProvider router={router} />
}
