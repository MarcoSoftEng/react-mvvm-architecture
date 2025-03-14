import { Button } from '@src/shared/components/button'
import { Input } from '@src/shared/components/input'
import { Label } from '@src/shared/components/label'
import type { UseFormReturn } from 'react-hook-form'

import type { SignInFormData } from '../types/sign-in-types'

type SignInFormProps = {
	form: UseFormReturn<SignInFormData>
	onSubmit: (data: SignInFormData) => Promise<void>
}

export function SignInForm({ form, onSubmit }: SignInFormProps) {
	return (
		<form className='space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
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

			<Button className='w-full' type='submit'>
				Acessar
			</Button>
		</form>
	)
}
