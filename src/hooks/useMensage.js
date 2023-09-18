import { useCarrinho } from './useStorage'

export const useMensage = () => {
	const { getStorage } = useCarrinho()
	const carrinho = getStorage()

	const name = `${carrinho.name}`
	const date = `${carrinho.date}`

	let bolos = ''

	carrinho.bolos?.forEach(
		(e) =>
			(bolos += `${e.bento ? 'Bento' : e.peso + 'kg'} ${e.recheios.map(
				(e) => ' ' + e.name
			)} ${e.priceBolo?.toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			})}
${e.formato.toUpperCase()} \n\n\n`)
	)

	let docesTradicionais = ''
	let docesTradicionaisPrice = 0
	carrinho.docesTradicionais?.forEach((e) => {
		docesTradicionais += `${e.quantity} ${e.title} \n`
		docesTradicionaisPrice += e.priceTotal
	})

	const entrega = !carrinho.entrega
		? 'Retirada no local'
		: `${carrinho.entrega.rua} - ${carrinho.entrega.number}, ${carrinho.entrega.bairro}, ${carrinho.entrega.cidade}`
	const message = `*${name} ${date?.split('-').reverse().join('/')}*


${bolos}
      
${
	docesTradicionais +
	'*Subtotal..............' +
	docesTradicionaisPrice?.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}) +
	'*'
}

${carrinho.entrega ? '*Taxa de entrega..............R$ 5,00*' : ''}

${carrinho.observacoes ? '*' + carrinho.observacoes + '*' : ''}

*${entrega}* 
      `
	return encodeURI(message)
	//
}
