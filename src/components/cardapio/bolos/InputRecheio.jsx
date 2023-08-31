import { produtos } from '@/data/bolos/recheios'
import ContainerCardapio from '../ContainerCardapio'

import Button from './Button'
import CardBolo from './CardBolo'
import { useRouter } from 'next/router'
import { useBolo } from '@/hooks/useBolo'
import { useContext } from 'react'
import { Contador } from '@/components/contexts/ContextContador'
import { toast } from 'react-toastify'

export default function InputRecheio({ className, nav, bolo }) {
	const { cont } = useContext(Contador)
	const { setRecheio, removeRecheio } = useBolo(cont)

	function addRecheio(recheio) {
		const check = setRecheio(recheio)
		check && toast.success('Recheio adicionado')
		return check
	}

	const router = useRouter()
	return (
		<div className={`flex flex-col items-center gap-5 ${className}`}>
			<ContainerCardapio className={`grid`} id={'recheio'}>
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
			<div className={`flex gap-5`}>
				<Button
					content={'Voltar'}
					nav={() => {
						nav('peso')
						router.push('#header')
					}}
				/>
				<Button
					content={'Avançar'}
					nav={() => {
						nav('formato')
						router.push('#header')
					}}
				/>
			</div>
		</div>
	)
}
