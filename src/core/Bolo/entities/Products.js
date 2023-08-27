export default class Product {
	#id = null
	#name = ''
	#price = 0
	#quantity = 0
	#image = ''
	#category = ''
	#description = ''
	constructor(id, name, price, description, category) {
		this.#id = id
		this.#name = name
		this.#price = price
		this.#description = description
		this.#category = category
	}

	set name(name) {
		this.#name = name
	}

	set price(price) {
		this.#price = price
	}
	set image(image) {
		this.#image = image
	}

	set description(description) {
		this.#description = description
	}

	set category(category) {
		this.#category = category
	}

	get name() {
		return this.#name
	}

	get price() {
		return this.#price
	}

	get quantity() {
		return this.#quantity
	}

	get image() {
		return this.#image
	}

	get category() {
		return this.#category
	}

	addQuantity() {
		this.#quantity += 5
	}

	removeQuantity() {
		this.#quantity -= 5
	}

	get templateProduct() {
		const quantity = this.quantity
		const name = this.name
		return `
- ${quantity} ${name}`
	}
}
