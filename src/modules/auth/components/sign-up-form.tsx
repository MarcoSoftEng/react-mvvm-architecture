import { Button } from '@src/shared/components/button'
import { Input } from '@src/shared/components/input'
import { Label } from '@src/shared/components/label'
import type { UseFormReturn } from 'react-hook-form'

import type { SignUpFormData } from '../types/sign-up-types'

type SignUpFormProps = {
	form: UseFormReturn<SignUpFormData>
	onSubmit: (data: SignUpFormData) => Promise<void>
}

export function SignUpForm({ form, onSubmit }: SignUpFormProps) {
	return (
		<form className='space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
			<div className='space-y-2'>
				<Label htmlFor='name'>Nome</Label>
				<Input
					id='name'
					autoComplete='additional-name'
					{...form.register('name')}
					errorMessage={form.formState.errors.name?.message}
				/>
			</div>

			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input
					id='email'
					type='email'
					autoComplete='email'
					{...form.register('email')}
					errorMessage={form.formState.errors.email?.message}
				/>
			</div>

			<div className='space-y-2'>
				<Label htmlFor='password'>Senha</Label>
				<Input
					id='password'
					type='password'
					autoComplete='current-password'
					{...form.register('password')}
					errorMessage={form.formState.errors.password?.message}
				/>
			</div>

			<div className='space-y-2'>
				<Label htmlFor='passwordConfirmation'>Confirme sua senha</Label>
				<Input
					id='passwordConfirmation'
					type='password'
					autoComplete='current-password'
					{...form.register('passwordConfirmation')}
					errorMessage={form.formState.errors.passwordConfirmation?.message}
				/>
			</div>

			<Button className='w-full' type='submit'>
				Cadastrar
			</Button>
		</form>
	)
}
