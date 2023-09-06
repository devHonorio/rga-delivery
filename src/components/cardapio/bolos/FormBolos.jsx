import Peso from './Peso'

import { useState } from 'react'
import Adicionado from './adicionado'

import NewBolo from './NewBolo'

import Recheios from './Recheios'
import Formato from './Formato'
import ContextStateBolos from '@/components/contexts/ContextStatesBolo'

export default function FormBolos({ className }) {
	const [nav, setNav] = useState('novo-bolo')

	return (
		<ContextStateBolos>
			<form className={`flex flex-col items-center gap-8 ${className}`}>
				<NewBolo className={nav !== 'novo-bolo' && 'hidden'} nav={setNav} />

				<Peso className={nav !== 'peso' && 'hidden'} nav={setNav} />

				<Recheios className={nav !== 'recheios' && 'hidden'} nav={setNav} />

				<Formato className={nav !== 'formato' && 'hidden'} nav={setNav} />

				<Adicionado
					className={`${nav !== 'adicionado' && 'hidden'}`}
					nav={setNav}
				/>
			</form>
		</ContextStateBolos>
	)
}
