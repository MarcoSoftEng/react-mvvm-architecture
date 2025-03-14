import { Link } from 'react-router'

type FormFooterProps = {
	navigateTo: string
	label: string
	linkLabel: string
}

export function FormFooter({ label, linkLabel, navigateTo }: FormFooterProps) {
	return (
		<span className='text-center'>
			{label}{' '}
			<Link
				className='text-primary font-semibold hover:underline'
				to={navigateTo}
			>
				{linkLabel}
			</Link>
		</span>
	)
}
