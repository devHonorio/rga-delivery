import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const useBolo = (bolo) => {
	const [formato, setForm] = useState('')

	function temMorango() {
		const tem = bolo.recheios?.includes(
			'morango' || 'marta-rocha' || 'bolo-da-casa'
		)

		return tem
	}

	function removeRecheio(recheio) {
		bolo.recheios.forEach((e, i) => {
			if (e.id === recheio.id) {
				bolo.recheios.splice(i, 1)
				bolo.price -= recheio.price / 2
				sessionStorage.removeItem(recheio.id)
			}
		})

		return true
	}

	function setFormato(formato) {
		const peso = bolo.peso
		const morango = temMorango()
		if (bolo.recheios.length === 2) {
			if (peso >= 2.5 && peso <= 3.5 && !morango) {
				bolo.formato = formato
				setForm(formato)
				console.log('Formato escolhido')
			} else if (peso >= 3.5 && peso <= 4 && morango) {
				console.log('Formato escolhido')
				setForm(formato)
				bolo.formato = formato
			} else if ((peso > 3.5 && !morango) || (peso > 4 && morango)) {
				bolo.formato = 'retangular'
				setForm('retangular')
				alert(
					'ATENÇÃO, para esse recheio e peso o bolo precisa ser no formato retangular'
				)
			} else if (peso < 2.5 || (morango && peso < 3.5)) {
				setForm('redondo')
				bolo.formato = 'redondo'
				alert(
					'ATENÇÃO, para esse recheio e peso o bolo precisa ser no formato redondo'
				)
			}
		} else {
			alert('Primeiro deve escolher 2 recheios')
		}
	}

	return {
		removeRecheio,
		setFormato,
	}
}

export const usePeso = (peso) => {
	if (peso == 0.6 || (peso >= 1.5 && peso <= 6)) {
		return true
	} else {
		alert('Peso deve ser 600g ou estar entre 1,5kg e 6kg')
		return false
	}
}

export const useRecheios = () => {
	const { state, setState } = useContextState()
	const peso = state.peso
	let recheios = [...state.recheios]
	let price = state.price

	function temMorango() {
		const tem = state.recheios?.includes(
			'morango' || 'marta-rocha' || 'bolo-da-casa'
		)

		return tem
	}
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
				!temMorango() &&
				!isMorango(recheio)
			) {
				toast.warn(
					'Para chegar ao peso escolhido o recheio precisa conter morango ou ameixa'
				)
				return false
			} else {
				setState({ ...state, recheios: [...state.recheios, recheio] })
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

//
//
//

// 	return true
// }
