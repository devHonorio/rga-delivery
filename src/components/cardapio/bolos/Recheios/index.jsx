import { produtos } from '@/data/bolos/recheios'

import CardBolo from './CardBolo/index.js.jsx'
import { useRouter } from 'next/router'
import { useBolo } from '@/hooks/useBolo'
import { useContext } from 'react'
import { Contador } from '@/components/contexts/ContextContador'
import { toast } from 'react-toastify'
import { SButton } from '@/components/@ui/Buton'
import ContainerCardapio from '../../ContainerCardapio.jsx'

export default function Recheios({ className, nav }) {
	const { cont } = useContext(Contador)
	const { setRecheio, removeRecheio } = useBolo(cont)

	function addRecheio(recheio) {
		const check = setRecheio(recheio)
		check && toast.success('Recheio adicionado')
		return check
	}

	const router = useRouter()
	return (
		<>
			<ContainerCardapio className={className} id={'recheio'}>
				{produtos.recheios.map((recheio, i) => {
					return (
						<CardBolo
							id={recheio.id}
							name={recheio.title}
							title={recheio.name}
							value={recheio}
							price={recheio.price}
							image={recheio.image}
							key={i}
							removeRecheio={removeRecheio}
							addRecheio={addRecheio}
						/>
					)
				})}
			</ContainerCardapio>
			<div className={`flex gap-5 justify-center ${className}`}>
				<SButton
					type='button'
					onClick={() => {
						nav('peso')
					}}>
					Voltar
				</SButton>
				<SButton
					type='button'
					onClick={() => {
						nav('formato')
					}}>
					Avançar
				</SButton>
			</div>
		</>
	)
}
