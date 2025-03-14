import { Button } from '@src/shared/components/button'
import { ThemeToggle } from '@src/shared/components/themeToggle'
import { Link } from 'react-router'

export function LandingPage() {
	return (
		<div className='bg-background text-text flex h-screen flex-col items-center justify-center'>
			<ThemeToggle />

			<Button variant='link' asChild>
				<Link to='/auth/sign-in'>Ir para o login</Link>
			</Button>
		</div>
	)
}
