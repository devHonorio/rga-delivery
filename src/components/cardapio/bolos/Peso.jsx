import { useState } from 'react'
import Button from './Button'
import InputBento from './InputBento'
import InputBolos from './InputBolos'

import Bolo from '@/core/Bolo/entities/Bolo'

export default function Peso({ className, nav, value, onChange, bolo }) {
	const [bento, setBento] = useState(false)

	function navPeso() {
		bolo.peso = value

		if (bolo.avancar) nav('recheio')
	}
	return (
		<div className={`flex flex-col items-center gap-6 ${className}`}>
			<InputBolos bento={bento} pesoBolo={value} setPesoBolo={onChange} />
			<InputBento bento={bento} setBento={setBento} setPesoBolo={onChange} />
			<Button
				content={'Avançar'}
				nav={() => {
					navPeso()
				}}
			/>
		</div>
	)
}
