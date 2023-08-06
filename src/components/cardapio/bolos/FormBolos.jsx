import { useState } from 'react'
import Peso from './Peso'
import InputRecheio from './InputRecheio'
import Formato from './Formato'

export default function FormBolos({ className }) {
	const [bolos, setBolos] = useState({})
	return (
		<form className={` mt-20 flex flex-col items-center gap-8  ${className}`}>
			<Peso className={`hidden`} />
			<InputRecheio className={``} />
			<Formato className={`hidden`} />
		</form>
	)
}
