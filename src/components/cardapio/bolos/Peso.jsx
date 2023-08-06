import { useState } from 'react'
import Button from './Button'
import InputBento from './InputBento'
import InputBolos from './InputBolos'

export default function Peso({ className, nav }) {
	const [bento, setBento] = useState(false)
	return (
		<div className={`flex flex-col items-center gap-6 ${className}`}>
			<InputBolos bento={bento} />
			<InputBento bento={bento} setBento={setBento} />
			<Button content={'Avançar'} nav={() => nav('recheio')} />
		</div>
	)
}
