import { useApplyTheme } from '@src/shared/hooks/use-apply-theme'
import { queryClient } from '@src/shared/services/tanstack-config'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

import { router } from './routes'

export function Providers() {
	useApplyTheme()

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}
