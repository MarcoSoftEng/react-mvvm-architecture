import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { signUpSchema } from '../schemas/sign-up-schema'
import type { SignUpFormData } from '../types/sign-up-types'

export function useSignUp() {
	const form = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
	})

	async function onSubmit(data: SignUpFormData) {
		console.log(data)
	}

	return {
		form,
		onSubmit,
	}
}
