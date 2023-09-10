import { produtos } from '@/data/bolos/recheios'

import CardBolo from './CardBolo/index.js.jsx'
import { SButton } from '@/components/@ui/Buton'
import ContainerCardapio from '../../ContainerCardapio.jsx'
import { useContextState } from '@/components/contexts/ContextStatesBolo.jsx'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useRouter } from 'next/router.js'
import { SContainerNavButton } from './styles.js'

export default function Recheios({ className, nav }) {
	const { state, setState } = useContextState()
	const router = useRouter()

	useEffect(() => {
		setState({ ...state, recheios: [] })
		console.log('recheios')
	}, [])

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
			<SContainerNavButton className={`flex gap-5 justify-center ${className}`}>
				<SButton
					type='button'
					onClick={() => {
						setState({ ...state, recheios: [], price: 0 })
						router.push('#header')
						nav('peso')
					}}>
					Voltar
				</SButton>
				<SButton
					type='button'
					onClick={() => {
						if (state.recheios.length === 2) {
							const priceBolo = state.price * state.peso

							state.bento && setState({ ...state, price: 25, priceBolo: 25 })
							!state.bento && setState({ ...state, priceBolo })
							router.push('#header')
							nav('formato')
						} else toast.warn('Primeiro escolha dois recheios.')
					}}>
					Avançar
				</SButton>
			</SContainerNavButton>
		</>
	)
}
