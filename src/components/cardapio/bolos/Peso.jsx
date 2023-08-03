import Button from './Button'
import InputBento from './InputBento'
import InputBolos from './InputBolos'

export default function Peso() {
	return (
		<div className='hidden flex-col items-center gap-6'>
			<InputBolos />
			<InputBento />
			<Button content={'Avançar'} />
		</div>
	)
}
