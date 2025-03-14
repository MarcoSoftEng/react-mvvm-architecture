import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeStore = {
	theme: 'light' | 'dark'
	toggleTheme: () => void
}

export const useThemeStore = create(
	persist<ThemeStore>(
		(set, get) => ({
			theme: 'light',
			toggleTheme: () =>
				set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
		}),
		{ name: 'theme' }
	)
)
