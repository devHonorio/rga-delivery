module.exports = class Pedido {
	#cliente = null
	#bolos = []
	#doces = []
	#salgados = []
	#bebidas = []
	#entrega = null

	get bolos() {
		return this.#bolos
	}
	setCliente(cliente) {
		this.#cliente = cliente
	}
	addBolo(bolo) {
		this.#bolos.push(bolo)
	}

	addDoces(doce) {
		this.#doces.push(doce)
	}

	addSalgados(salgado) {
		this.#salgados.push(salgado)
	}

	addBebidas(bebida) {
		this.#bebidas.push(bebida)
	}

	setEntrega(entrega) {
		this.#entrega = entrega
	}

	get() {
		return {
			bolos: this.#bolos,
			doces: this.#doces,
			salgados: this.#salgados,
			bebidas: this.#bebidas,
			entrega: this.#entrega,
		}
	}
	handlePedido() {
		const bolos = this.bolos.map((bolo) => bolo.handleBolo())
	}
}
