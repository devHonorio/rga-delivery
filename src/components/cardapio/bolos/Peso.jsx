import { useContext, useState } from 'react'
import Button from './Button'
import InputBento from './InputBento'
import InputBolos from './InputBolos'

import { BolosContext } from '@/pages/_app'
import { useBolo } from '@/hooks/useBolo'
import { Contador } from '@/components/contexts/ContextContador'

export default function Peso({ className, nav, value, onChange }) {
	const [bento, setBento] = useState(false)
	const { cont } = useContext(Contador)
	const bolos = useContext(BolosContext)
	const { setPeso } = useBolo(cont)
	function navPeso() {
		setPeso(+value) && nav('recheio')
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
