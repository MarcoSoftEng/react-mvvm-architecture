import { useThemeStore } from '@src/shared/stores/theme'
import { Moon, Sun } from 'lucide-react'

import { Button } from './button'

export function ThemeToggle() {
	const { theme, toggleTheme } = useThemeStore()

	return (
		<Button onClick={toggleTheme} variant='outline' size='icon'>
			<div className='relative flex items-center justify-center'>
				<Sun
					className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
						theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
					}`}
				/>
				<Moon
					className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
						theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
					}`}
				/>
			</div>
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
