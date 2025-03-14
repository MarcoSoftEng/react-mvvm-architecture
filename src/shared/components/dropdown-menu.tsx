import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@src/shared/utils/cn'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { ComponentProps } from 'react'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

type DropdownMenuSubTriggerProps = ComponentProps<
	typeof DropdownMenuPrimitive.SubTrigger
> & {
	inset?: boolean
}

function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	ref,
	...props
}: DropdownMenuSubTriggerProps) {
	return (
		<DropdownMenuPrimitive.SubTrigger
			ref={ref}
			className={cn(
				'focus:bg-accent data-[state=open]:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
				inset && 'pl-8',
				className
			)}
			{...props}
		>
			{children}
			<ChevronRight className='ml-auto' />
		</DropdownMenuPrimitive.SubTrigger>
	)
}

type DropdownMenuSubContentProps = ComponentProps<
	typeof DropdownMenuPrimitive.SubContent
>

function DropdownMenuSubContent({
	className,
	ref,
	...props
}: DropdownMenuSubContentProps) {
	return (
		<DropdownMenuPrimitive.SubContent
			ref={ref}
			className={cn(
				'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
				className
			)}
			{...props}
		/>
	)
}

type DropdownMenuContentProps = ComponentProps<
	typeof DropdownMenuPrimitive.Content
>

function DropdownMenuContent({
	className,
	sideOffset = 4,
	ref,
	...props
}: DropdownMenuContentProps) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				ref={ref}
				sideOffset={sideOffset}
				className={cn(
					'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
					'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					className
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	)
}

type DropdownMenuItemProps = ComponentProps<
	typeof DropdownMenuPrimitive.Item
> & {
	inset?: boolean
}

function DropdownMenuItem({
	className,
	inset,
	ref,
	...props
}: DropdownMenuItemProps) {
	return (
		<DropdownMenuPrimitive.Item
			ref={ref}
			className={cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
				inset && 'pl-8',
				className
			)}
			{...props}
		/>
	)
}

type DropdownMenuCheckboxItemProps = ComponentProps<
	typeof DropdownMenuPrimitive.CheckboxItem
>

function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	ref,
	...props
}: DropdownMenuCheckboxItemProps) {
	;<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		checked={checked}
		{...props}
	>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<DropdownMenuPrimitive.ItemIndicator>
				<Check className='h-4 w-4' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
}

type DropdownMenuRadioItemProps = ComponentProps<
	typeof DropdownMenuPrimitive.RadioItem
>

function DropdownMenuRadioItem({
	className,
	children,
	ref,
	...props
}: DropdownMenuRadioItemProps) {
	return (
		<DropdownMenuPrimitive.RadioItem
			ref={ref}
			className={cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className
			)}
			{...props}
		>
			<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
				<DropdownMenuPrimitive.ItemIndicator>
					<Circle className='h-2 w-2 fill-current' />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	)
}

type DropdownMenuLabelProps = ComponentProps<
	typeof DropdownMenuPrimitive.Label
> & {
	inset?: boolean
}

function DropdownMenuLabel({
	className,
	inset,
	ref,
	...props
}: DropdownMenuLabelProps) {
	;<DropdownMenuPrimitive.Label
		ref={ref}
		className={cn(
			'px-2 py-1.5 text-sm font-semibold',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
}

type DropdownMenuSeparatorProps = ComponentProps<
	typeof DropdownMenuPrimitive.Separator
>

function DropdownMenuSeparator({
	className,
	ref,
	...props
}: DropdownMenuSeparatorProps) {
	;<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn('bg-muted -mx-1 my-1 h-px', className)}
		{...props}
	/>
}

type DropdownMenuShortcutProps = ComponentProps<'span'>

function DropdownMenuShortcut({
	className,
	...props
}: DropdownMenuShortcutProps) {
	return (
		<span
			className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
			{...props}
		/>
	)
}

export {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
}
