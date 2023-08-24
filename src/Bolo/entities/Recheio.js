export default class Recheio {
	#id
	#name
	#ingredients
	#price
	#bento = true
	#min = 1.5
	#image = ''
	constructor(id, name, ingredients, price) {
		this.#id = id
		this.#name = name
		this.#ingredients = ingredients
		this.#price = price
	}

	editName(name) {
		this.#name = name
	}

	editIngredients(descripition) {
		this.#ingredients = descripition
	}

	editPrice(price) {
		this.#price = price
	}

	setBento(bolean) {
		this.#bento = bolean
	}

	setMin(minPeso) {
		this.#min = minPeso
	}

	addImage(src) {
		this.#image = src
	}
}
