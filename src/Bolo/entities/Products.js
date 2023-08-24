module.exports = class Product {
	#id = null
	#name = null
	#quantity = 0
	#price = null
	#image = null
	#description = null
	#category = null
	constructor(id, name, price, description, category) {
		this.#id = id
		this.#name = name
		this.#price = price
		this.#description = description
		this.#category = category
	}

	setName(name) {
		this.#name = name
	}

	setPrice(price) {
		this.#price = price
	}

	addQuantity() {
		this.#quantity += 5
	}

	removeQuantity() {
		this.#quantity -= 5
	}

	setImage(image) {
		this.#image = image
	}

	setDescription(description) {
		this.#description = description
	}

	setCategory(category) {
		this.#category = category
	}

	handleProduct() {
		return `- ${this.#quantity} ${this.#name}--------${this.#price} R$${
			this.#price * this.#quantity
		}\n`
	}
}
