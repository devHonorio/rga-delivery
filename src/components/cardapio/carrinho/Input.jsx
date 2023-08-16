import { useId } from 'react'
import { Input, Label } from './styles'

export default function InputCarrinho({ label, type, typeOf, className }) {
	const id = useId()
	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			<Label htmlFor={id}>{label}</Label>
			<Input required id={id} type={type} typeof={typeOf} />
		</div>
	)
}
