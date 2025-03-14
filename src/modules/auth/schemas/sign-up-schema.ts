import { z } from 'zod'

export const signUpSchema = z
	.object({
		name: z
			.string({ required_error: 'Campo obrigatório!' })
			.min(1, { message: 'Campo obrigatório!' }),
		email: z
			.string({ required_error: 'Campo obrigatório!' })
			.email({ message: 'Email inválido!' })
			.min(1, { message: 'Campo obrigatório!' }),
		password: z
			.string({ required_error: 'Campo obrigatório!' })
			.min(8, { message: 'Minimo 8 caracteres!' }),
		passwordConfirmation: z
			.string({ required_error: 'Campo obrigatório!' })
			.min(8, { message: 'Minimo 8 caracteres!' }),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		path: ['passwordConfirmation'],
		message: 'As senhas precisam ser iguais!',
	})
