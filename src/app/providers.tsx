import { queryClient } from '@src/shared/services/tanstack-config'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

import { router } from './routes'

export function Providers() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}
