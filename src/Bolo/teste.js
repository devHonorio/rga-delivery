const Bolo = require('./entities/Bolo')
const Pedido = require('./entities/Pedido')

const briga = {
	id: 'brigadeiro',
	name: 'brigadeiro',
	min: 0.6,
	max: 5.5,
	bento: true,
	price: 30,
}

const beijo = {
	id: 'beijinho',
	name: 'beijinho',
	min: 0.6,
	max: 5.5,
	bento: true,
	price: 30,
}

const ninho = {
	id: 'ninho',
	name: 'ninho',
	min: 0.6,
	max: 5.5,
	bento: true,
	price: 30,
}

const morango = {
	id: 'morango',
	name: 'morango',
	min: 1.8,
	max: 6,
	bento: false,
	price: 42,
}

const bolo = new Bolo()
bolo.peso = 6

bolo.recheio = beijo
bolo.recheio = beijo

bolo.formato = 'retangular'

const bolo2 = new Bolo()
bolo2.peso = 6

bolo2.recheio = beijo
bolo2.recheio = beijo

bolo2.formato = 'retangular'
console.log(bolo2.peso)
console.log(bolo2.recheios)
console.log(bolo2.formato)
console.log(bolo2.price)

// bolo.addRecheio(briga)
// bolo.addRecheio(beijo)

// bolo.setFormato('redondo')
// bolo.setDecorado('normal')
// bolo.setCoberturaNormal('chantilly')
// bolo.setTopper(false)
