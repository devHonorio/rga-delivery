import { useState } from 'react'
import Button from './Button'
import InputBento from './InputBento'
import InputBolos from './InputBolos'
import { useRouter } from 'next/router'

export default function Peso({ className, nav }) {
	const [bento, setBento] = useState(false)
	const router = useRouter()

	const [pesoBolo, setPesoBolo] = useState()

	function navPeso(peso) {
		if (peso > 1.4 && peso < 6.1) {
			nav('recheio')
			console.log(peso)
			router.push('#header')
		} else if (peso == 0.6) {
			nav('recheio')
			console.log(peso)
			router.push('#header')
		} else {
			console.log(peso)
			alert('O peso deve estar entre 1,5kg e 6kg')
		}
	}
	return (
		<div className={`flex flex-col items-center gap-6 ${className}`}>
			<InputBolos bento={bento} pesoBolo={pesoBolo} setPesoBolo={setPesoBolo} />
			<InputBento bento={bento} setBento={setBento} setPesoBolo={setPesoBolo} />
			<Button
				content={'Avançar'}
				nav={() => {
					navPeso(pesoBolo)
				}}
			/>
		</div>
	)
}
