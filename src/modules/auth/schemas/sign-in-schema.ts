import { z } from 'zod'

export const signInSchema = z.object({
	email: z
		.string({ required_error: 'Campo obrigatório!' })
		.email({ message: 'Email inválido!' })
		.min(1, { message: 'Campo obrigatório!' }),
	password: z
		.string({ required_error: 'Campo obrigatório!' })
		.min(8, { message: 'Minimo 8 caracteres!' }),
})
