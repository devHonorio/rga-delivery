import Peso from './Peso'
import InputRecheio from './InputRecheio'
import Formato from './Formato'
import { useState } from 'react'
import Adicionado from './Adicionado'
import { useBolo } from '@/hooks/bolos'
import Bolo from '@/core/Bolo/entities/Bolo'

export default function FormBolos({ className }) {
	const [value, setValue] = useState()
	const [nav, setNav] = useState('peso')
	const bolo = new Bolo()
	return (
		<form className={`flex flex-col items-center gap-8 ${className}`}>
			<Peso
				className={`${nav !== 'peso' && 'hidden'}`}
				nav={setNav}
				value={value}
				onChange={setValue}
				bolo={bolo}
			/>
			{nav === 'recheio' && <InputRecheio nav={setNav} bolo={bolo} />}

			<Formato className={`${nav !== 'formato' && 'hidden'}`} nav={setNav} />

			<Adicionado
				className={`${nav !== 'adicionado' && 'hidden'}`}
				nav={setNav}
			/>
		</form>
	)
}
