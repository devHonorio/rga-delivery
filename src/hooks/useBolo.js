import Quadrado from '@/components/cardapio/bolos/Formato/Quadrada'
import Redondo from '@/components/cardapio/bolos/Formato/Redondo'
import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { toast } from 'react-toastify'

function temMorango(recheios) {
	const recheiosStr = recheios?.map((e) => e.id)
	const tem = recheiosStr?.includes(
		'morango' || 'marta-rocha' || 'bolo-da-casa'
	)

	return tem
}

export const usePeso = (peso) => {
	if (peso == 0.6 || (peso >= 1.5 && peso <= 6)) {
		return true
	} else {
		toast.warn('Peso deve ser 600g ou estar entre 1,5kg e 6kg.')
		return false
	}
}

export const useRecheios = () => {
	const { state, setState } = useContextState()
	let { peso, price, recheios } = state

	const AddRecheio = (recheio) => {
		const recheiosLength = state.recheios.length
		function isMorango() {
			if (
				recheio.id === 'morango' ||
				recheio.id === 'marta-rocha' ||
				recheio.id === 'bolo-da-casa'
			) {
				return true
			}
		}

		if (recheiosLength < 2) {
			if (
				recheiosLength > 0 &&
				peso > 5.5 &&
				!temMorango(recheios) &&
				!isMorango(recheio)
			) {
				toast.warn(
					'Para chegar ao peso escolhido o recheio precisa conter morango ou ameixa'
				)
				return false
			} else {
				setState({
					...state,
					recheios: [...state.recheios, recheio],
					price: price + recheio.price / 2,
				})
				toast.success('Recheio adicionado.')
				return true
			}
		} else {
			toast.warn('É permitido apenas dois recheios')
			return false
		}
	}

	function removeRecheio(recheio) {
		recheios.forEach((e, i) => {
			if (e.id === recheio.id) {
				recheios.splice(i, 1)
				price -= recheio.price / 2

				setState({ ...state, recheios: recheios, price: price })
				toast.error('Recheio removido.')
			}
		})

		return true
	}
	return {
		AddRecheio,
		removeRecheio,
	}
}

export const useFormato = () => {
	const { state } = useContextState()
	const { bento, peso, recheios } = state

	if (bento) return <Redondo />
	if (peso < 2.5) return <Redondo />
	else if (peso < 3.5 && temMorango(recheios)) return <Redondo />
	else if (peso > 3.5 && !temMorango(recheios)) return <Quadrado />
	else if (peso > 4) return <Quadrado />
	else
		return (
			<>
				<Redondo /> <Quadrado />
			</>
		)
}