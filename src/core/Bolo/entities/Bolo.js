import Router from 'next/router'

export default class Bolo {
	#peso = 0
	#recheios = []
	#formato = ''
	#price = 0
	#cobertura = ''
	#decoracao = ''
	#avancar = false

	removeRecheio(recheio) {
		const recheios = this.#recheios
		const index = recheios.findIndex((e) => e.id === recheio?.id)

		if (index !== -1) {
			recheios.splice(index, 1)
			console.log('Recheio removido')
		} else {
			console.log('Recheio não encontrado')
		}
	}

	set peso(peso) {
		if (peso === 0.6 || (peso >= 1.5 && peso <= 6)) {
			this.#peso = peso
			Router.push('#header')
			this.#avancar = true
			console.log(this.peso)
		} else {
			this.#avancar = false
			alert('Peso deve ser 600g ou estar entre 1,5kg e 6kg')
		}
	}

	set recheio(recheio) {
		if (this.recheios.length < 2) {
			const peso = this.peso

			if ((peso === 0.6 || peso < 1.8) && this.#isMorango(recheio)) {
				alert('Esse recheio não é permitido para esse peso')
			} else if (
				this.recheios.length > 0 &&
				peso > 5.5 &&
				!this.#temMorango() &&
				!this.#isMorango(recheio)
			) {
				console.log(
					'Para chegar ao peso escolhido o recheio precisa conter morango ou ameixa'
				)
			} else if ((peso === 0.6 || peso >= 1.5) && !this.#isMorango(recheio)) {
				this.#recheios.push(recheio)
				this.#price += recheio.price / 2
				console.log('Recheio normal adicionado')
			} else if (peso >= 1.8 && this.#isMorango(recheio)) {
				this.#recheios.push(recheio)
				this.#price += recheio.price / 2
				console.log('Recheio pesado adicionado')
			} else {
				alert('Primeiro é preciso que o peso seja adicionado')
			}
		} else {
			alert('É permitido apenas dois recheios')
		}
	}

	set formato(formato) {
		const peso = this.peso
		const morango = this.#temMorango()
		if (this.recheios.length === 2) {
			if (peso >= 2.5 && peso <= 3.5 && !morango) {
				this.#formato = formato
				console.log('Formato escolhido')
			} else if (peso >= 3.5 && peso <= 4 && morango) {
				console.log('Formato escolhido')
				this.#formato = formato
			} else if ((peso > 3.5 && !morango) || (peso > 4 && morango)) {
				this.#formato = 'retangular'
				alert(
					'ATENÇÃO, para esse recheio e peso o bolo precisa ser no formato retangular'
				)
			} else if (peso < 2.5 || (morango && peso < 3.5)) {
				this.#formato = 'redondo'
				alert(
					'ATENÇÃO, para esse recheio e peso o bolo precisa ser no formato redondo'
				)
			}
		} else {
			alert('Primeiro deve escolher 2 recheios')
		}
	}

	set cobertura(cobertura) {
		this.#cobertura = cobertura
	}

	set decoracao(decoracao) {
		this.#decoracao = decoracao
	}

	set avancar(bolean) {
		this.#avancar = bolean
	}

	get avancar() {
		return this.#avancar
	}

	get peso() {
		return this.#peso
	}

	get recheios() {
		return this.#recheios.map((r) => r.name)
	}

	get formato() {
		return this.#formato
	}

	get price() {
		if (this.recheios.length === 2) return this.#price
		else return 'Primeiro deve escolher dois recheios'
	}

	get cobertura() {
		return this.#cobertura
	}

	get decoracao() {
		return this.#decoracao
	}

	get templateBolo() {
		const peso = this.peso
		const formato = this.formato
		const price = (this.price * peso).toFixed(2)
		const cobertura = this.cobertura
		const decoracao = this.decoracao
		return `
${peso === 0.6 ? 'Bento' : peso + 'kg'} ${this.recheios}  ${formato} ±R$${price}

${cobertura} ${decoracao}

`
	}

	#isMorango(recheio) {
		if (
			recheio.name === 'morango' ||
			recheio.name === 'marta-rocha' ||
			recheio.name === 'bolo-da-casa'
		) {
			return true
		}
	}

	#temMorango() {
		const tem = this.recheios.includes(
			'morango' || 'marta-rocha' || 'bolo-da-casa'
		)

		return tem
	}
}
