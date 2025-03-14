import { FormFooter } from '../components/form-footer'
import { FormHeader } from '../components/form-header'
import { SignInForm } from '../components/sign-in-form'
import { useSignIn } from '../hooks/use-sign-in'

export function SignInPage() {
	const { form, onSubmit } = useSignIn()

	return (
		<div className='flex w-full flex-col justify-center gap-6 md:w-80'>
			<FormHeader
				title='Acessar sistema'
				description='Faça login com suas credenciais para entrar!'
			/>

			<SignInForm form={form} onSubmit={onSubmit} />

			<FormFooter
				label='Não tem conta?'
				linkLabel='Cadastrar'
				navigateTo='/auth/sign-up'
			/>
		</div>
	)
}
