module.exports = class Cliente {
	#name = ''
	#tel = ''
	#endereco = []

	setName(name) {
		this.#name = name
	}

	setTel(tel) {
		this.#tel = tel
	}

	setEndereco(endereco) {
		this.#endereco.push(endereco)
	}

	get() {
		return {
			name: this.#name,
			tel: this.#tel,
			endereco: this.#endereco,
		}
	}

	removeEnderecoByRua(rua) {
		this.#endereco = this.#endereco.filter((e) => e.rua !== rua)
	}
}
