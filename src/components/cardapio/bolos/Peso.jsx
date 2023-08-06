import Button from './Button'
import InputBento from './InputBento'
import InputBolos from './InputBolos'

export default function Peso({ className }) {
	return (
		<div className={`flex flex-col items-center gap-6 ${className}`}>
			<InputBolos />
			<InputBento />
			<Button content={'Avançar'} />
		</div>
	)
}
