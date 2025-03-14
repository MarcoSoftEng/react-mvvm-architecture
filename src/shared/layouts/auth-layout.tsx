import { ThemeToggle } from '@src/shared/components/themeToggle'
import { useMediaQuery } from '@src/shared/hooks/use-media-query'
import { Link, Outlet } from 'react-router'

export function AuthLayout() {
	const isMobile = useMediaQuery('(max-width: 768px)')

	return !isMobile ? (
		<div className='grid h-screen grid-cols-2'>
			<div className='bg-muted flex h-full flex-col justify-between p-10'>
				<Link to={'/'} className='bg-background w-fit rounded-md p-4 font-bold'>
					LOGO HERE
				</Link>

				<footer>
					Painel de acesso ao sistema &copy; Empresa -{' '}
					{new Date().getFullYear()}
				</footer>
			</div>
			<div className='bg-background flex flex-col items-center justify-center p-10'>
				<div className='absolute top-10 right-10'>
					<ThemeToggle />
				</div>
				<Outlet />
			</div>
		</div>
	) : (
		<div className='bg-background flex h-screen flex-col items-center justify-center p-10'>
			<div className='absolute top-10 right-10'>
				<ThemeToggle />
			</div>
			<Outlet />
		</div>
	)
}
