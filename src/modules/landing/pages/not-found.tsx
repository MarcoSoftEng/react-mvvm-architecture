import { Button } from '@src/shared/components/button'
import { useNavigate } from 'react-router'

export function NotFoundPage() {
	const navigate = useNavigate()

	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<span className='text-2xl font-semibold'>Page not found</span>
			<h1 className='my-4 bg-gradient-to-b from-white to-gray-900 bg-clip-text text-8xl font-bold text-transparent'>
				404
			</h1>

			<Button variant='link' onClick={() => navigate(-1)}>
				Return
			</Button>
		</div>
	)
}
