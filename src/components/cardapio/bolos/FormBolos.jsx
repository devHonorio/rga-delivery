import Peso from './Peso'
import InputRecheio from './InputRecheio'
import Formato from './Formato'
import { useState } from 'react'
import Adicionado from './Adicionado'

export default function FormBolos({ className }) {
	const [nav, setNav] = useState('peso')
	return (
		<form className={`flex flex-col items-center gap-8 ${className}`}>
			<Peso className={`${nav !== 'peso' && 'hidden'}`} nav={setNav} />
			<InputRecheio
				className={`${nav !== 'recheio' && 'hidden'}`}
				nav={setNav}
			/>
			<Formato className={`${nav !== 'formato' && 'hidden'}`} nav={setNav} />

			<Adicionado
				className={`${nav !== 'adicionado' && 'hidden'}`}
				nav={setNav}
			/>
			
		</form>
	)
}
