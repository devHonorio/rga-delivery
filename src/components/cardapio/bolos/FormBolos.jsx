import Peso from './Peso'
import InputRecheio from './InputRecheio'
import Formato from './Formato'
import { useState } from 'react'
import Adicionado from './Adicionado'

import NewBolo from './NewBolo'
import ContextCotado from '@/components/contexts/ContextContador'

export default function FormBolos({ className }) {
	const [value, setValue] = useState()
	const [nav, setNav] = useState('novo-bolo')

	return (
		<ContextCotado>
			<form className={`flex flex-col items-center gap-8 ${className}`}>
				<NewBolo
					className={`${nav !== 'novo-bolo' && 'hidden'}`}
					nav={setNav}
				/>
				<Peso
					className={`${nav !== 'peso' && 'hidden'}`}
					nav={setNav}
					value={value}
					onChange={setValue}
				/>
				{nav === 'recheio' && <InputRecheio nav={setNav} />}

				<Formato className={`${nav !== 'formato' && 'hidden'}`} nav={setNav} />

				<Adicionado
					className={`${nav !== 'adicionado' && 'hidden'}`}
					nav={setNav}
				/>
			</form>
		</ContextCotado>
	)
}
