import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@src/shared/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithRef } from 'react'

const labelVariants = cva(
	'text-sm inline-block font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

type LabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants>

export function Label({ className, ref, ...props }: LabelProps) {
	return (
		<LabelPrimitive.Root
			ref={ref}
			className={cn(labelVariants(), className)}
			{...props}
		/>
	)
}
