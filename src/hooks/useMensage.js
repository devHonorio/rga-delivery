import { useCarrinho } from './useStorage'

export const useMensage = () => {
	const { getStorage } = useCarrinho()
	const carrinho = getStorage()

	const name = `${carrinho.name}`
	const date = `${carrinho.date}`

	let bolos = ''
	let bolosPrice = 0
	carrinho.bolos?.forEach((e) => {
		bolosPrice += +e.priceBolo
		bolos += `${e.bento ? 'Bento' : e.peso + 'kg'} ${e.recheios.map(
			(e) => ' ' + e.name
		)} ${e.priceBolo?.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})}
${e.formato.toUpperCase()} \n\n\n`
	})

	let docesTradicionais = ''
	let docesTradicionaisPrice = 0
	carrinho.docesTradicionais?.forEach((e) => {
		docesTradicionais += `${e.quantity} ${e.title} \n`
		docesTradicionaisPrice += e.priceTotal
	})

	const entrega = !carrinho.entrega
		? 'Retirada no local'
		: `${carrinho.entrega.rua} - ${carrinho.entrega.number}, ${carrinho.entrega.bairro}, ${carrinho.entrega.cidade}`
	let taxa = carrinho.entrega ? 5 : 0
	const message = `*${name} ${date?.split('-').reverse().join('/')}*


${bolos}
      
${
	docesTradicionais +
	'*Doces tradicionais..............' +
	docesTradicionaisPrice?.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}) +
	'*'
}

${carrinho.entrega ? '*Taxa de entrega..............R$ 5,00*' : ''}

${carrinho.observacoes ? '*' + carrinho.observacoes + '*' : ''}

*Total...............${bolosPrice + docesTradicionaisPrice + taxa}

*${entrega}* `

	console.log(message)
	return encodeURI(message)
	//
}
