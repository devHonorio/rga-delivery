import { BolosContext } from '@/pages/_app'
import { useContext, useState } from 'react'

export const useBolo = (cont) => {
	const bolos = useContext(BolosContext)
	const bolo = bolos[cont]
	const [formato, setForm] = useState('')

	function temMorango() {
		const tem = bolo.recheios?.includes(
			'morango' || 'marta-rocha' || 'bolo-da-casa'
		)

		return tem
	}

	const setPeso = (peso) => {
		if (peso === 0.6 || (peso >= 1.5 && peso <= 6)) {
			bolo.peso = peso
			console.log(bolo.peso)
			return true
		} else {
			alert('Peso deve ser 600g ou estar entre 1,5kg e 6kg')
			return false
		}
	}

	const setRecheio = (recheio) => {
		function isMorango() {
			if (
				recheio.name === 'morango' ||
				recheio.name === 'marta-rocha' ||
				recheio.name === 'bolo-da-casa'
			) {
				return true
			}
		}

		if (bolo.recheios.length < 2) {
			const peso = bolo.peso

			if ((peso === 0.6 || peso < 1.8) && isMorango(recheio)) {
				alert('Esse recheio não é permitido para esse peso')
				return false
			} else if (
				bolo.recheios.length > 0 &&
				peso > 5.5 &&
				!temMorango() &&
				!isMorango(recheio)
			) {
				alert(
					'Para chegar ao peso escolhido o recheio precisa conter morango ou ameixa'
				)
				return false
			} else if ((peso === 0.6 || peso >= 1.5) && !isMorango(recheio)) {
				bolo.recheios.push(recheio)
				bolo.price += recheio.price / 2
				console.log('Recheio normal adicionado')
				return true
			} else if (peso >= 1.8 && isMorango(recheio)) {
				bolo.recheios.push(recheio)
				bolo.price += recheio.price / 2
				console.log('Recheio pesado adicionado')
				return true
			} else {
				alert('Primeiro é preciso que o peso seja adicionado')
				return false
			}
		} else {
			alert('É permitido apenas dois recheios')
			console.log(bolo)
			return false
		}
	}

	function removeRecheio(recheio) {
		bolo.recheios.forEach((e, i) => {
			if (e.id === recheio.id) {
				bolo.recheios.splice(i, 1)
				bolo.price -= recheio.price / 2
			}
		})
		console.log(bolo)

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
		console.log(bolo?.formato)
	}

	return {
		setPeso,
		setRecheio,
		removeRecheio,
		setFormato,
		formato,
	}
}
