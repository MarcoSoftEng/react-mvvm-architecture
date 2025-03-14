import { useThemeStore } from '@src/shared/stores/theme'
import { useEffect } from 'react'

export function useApplyTheme() {
	const { theme } = useThemeStore()

	useEffect(() => {
		const root = window.document.documentElement

		if (theme === 'dark') {
			root.classList.remove('light')
			root.classList.add('dark')
		}
		if (theme === 'light') {
			root.classList.remove('dark')
			root.classList.add('light')
		}
	}, [theme])
}
