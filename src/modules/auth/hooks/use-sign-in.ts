import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { signInSchema } from '../schemas/sign-in-schema'
import type { SignInFormData } from '../types/sign-in-types'

export function useSignIn() {
	const navigate = useNavigate()
	const form = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
	})

	async function onSubmit(data: SignInFormData) {
		console.log(data)

		navigate('/')
	}

	return {
		form,
		onSubmit,
	}
}
