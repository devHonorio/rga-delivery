import { produtos } from '@/data/bolos/recheios'

import CardBolo from './CardBolo/index.js.jsx'
import { SButton } from '@/components/@ui/Buton'
import ContainerCardapio from '../../ContainerCardapio.jsx'
import { useContextState } from '@/components/contexts/ContextStatesBolo.jsx'
import { toast } from 'react-toastify'

export default function Recheios({ className, nav }) {
	const { state } = useContextState()

	const typeRecheios = () => {
		if (state.bento) {
			return produtos.recheios.filter((e) => {
				return e.bento
			})
		} else if (state.peso < 1.8 && state.peso >= 1.5) {
			return produtos.recheios.filter((e) => {
				return e.min == 1.5
			})
		} else {
			return produtos.recheios
		}
	}

	const recheios = typeRecheios()

	return (
		<>
			<ContainerCardapio className={className} id={'recheio'}>
				{recheios.map((recheio, i) => {
					return (
						<CardBolo
							id={recheio.id}
							name={recheio.title}
							title={recheio.name}
							value={recheio}
							price={recheio.price}
							image={recheio.image}
							key={i}
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
						if (state.recheios.length === 2) nav('formato')
						else toast.warn('Primeiro escolha dois recheios.')
					}}>
					Avançar
				</SButton>
			</div>
		</>
	)
}
