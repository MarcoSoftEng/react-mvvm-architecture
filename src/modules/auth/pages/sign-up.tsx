import { FormFooter } from '../components/form-footer'
import { FormHeader } from '../components/form-header'
import { SignUpForm } from '../components/sign-up-form'
import { useSignUp } from '../hooks/use-sign-up'

export function SignUpPage() {
	const { form, onSubmit } = useSignUp()

	return (
		<div className='flex w-full flex-col justify-center gap-6 md:w-80'>
			<FormHeader
				title='Cadastro no sistema'
				description='Preencha os campos abaixo para fazer seu cadastro!'
			/>

			<SignUpForm form={form} onSubmit={onSubmit} />

			<FormFooter
				label='Já tem conta?'
				linkLabel='Entrar'
				navigateTo='/auth/sign-in'
			/>
		</div>
	)
}
