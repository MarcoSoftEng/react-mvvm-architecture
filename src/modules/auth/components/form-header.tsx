type FormHeaderProps = {
	title: string
	description: string
}

export function FormHeader({ title, description }: FormHeaderProps) {
	return (
		<div className='flex flex-col gap-2 text-center'>
			<h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
			<p className='text-muted-foreground text-sm'>{description}</p>
		</div>
	)
}
