import { useFormatToRealBRL } from './useFormatRealBRL'
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
		)} ${useFormatToRealBRL(e.priceBolo)}
${e.formato.toUpperCase()}

*Observações:* ${e.observacoesBolo ? e.observacoesBolo : 'Nenhuma'} \n\n\n`
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
	const time = carrinho.time

	const message = `*${name} ${date?.split('-').reverse().join('/')}*


${bolos}
      
${
	docesTradicionais +
	'*Doces tradicionais..............' +
	useFormatToRealBRL(docesTradicionaisPrice) +
	'*'
}

${carrinho.entrega ? '*Taxa de entrega..............R$ 5,00*' : ''}

${carrinho.observacoes ? '*' + carrinho.observacoes + '*' : ''}

*Total...............${useFormatToRealBRL(
		bolosPrice + docesTradicionaisPrice + taxa
	)}*

*${entrega}*  _*${time}*_`

	console.log(message)
	return encodeURI(message)
	//
}
