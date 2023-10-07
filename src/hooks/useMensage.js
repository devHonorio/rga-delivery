import { useFormatToRealBRL } from './useFormatRealBRL'
import { useCarrinho } from './useStorage'

export const useMensage = () => {
	const { getStorage } = useCarrinho()
	const carrinho = getStorage()

	const name = carrinho.name
	const date = carrinho.date

	let bolos = ''
	let bolosPrice = 0
	carrinho.bolos?.forEach((e) => {
		const boloPeso = e.bento ? 'Bento' : e.peso + 'kg'
		const boloRecheios = e.recheios.map((e) => ' ' + e.name)
		const boloPrice = useFormatToRealBRL(e.priceBolo)
		const boloFormato = e.formato.toUpperCase()
		const boloObservacoes = e.observacoesBolo ? e.observacoesBolo : 'Nenhuma'
		bolosPrice += +e.priceBolo
		bolos += `${boloPeso} ${boloRecheios} ${boloPrice} \n${boloFormato} \nObservações: ${boloObservacoes} \n\n\n`
	})

	let bolosDeForma = ''
	let bolosDeFormaPrice = 0
	carrinho.bolosDeForma?.forEach((e) => {
		bolosDeForma += `${e.quantity} ${e.title} \n`
		bolosDeFormaPrice += e.priceTotal
	})

	let totalDocesTradicionais = 0
	let docesTradicionais = ''
	let docesTradicionaisPrice = 0
	carrinho.docesTradicionais?.forEach((e) => {
		docesTradicionais += `${e.quantity} ${e.title} \n`
		docesTradicionaisPrice += e.priceTotal
		totalDocesTradicionais += e.quantity
	})

	let totalDocesGourmet = 0
	let docesGourmet = ''
	let docesGourmetPrice = 0
	carrinho.docesGourmet?.forEach((e) => {
		docesGourmet += `${e.quantity} ${e.title} \n`
		docesGourmetPrice += e.priceTotal
		totalDocesGourmet += e.quantity
	})

	let totalDocesFinos = 0
	let docesFinos = ''
	let docesFinosPrice = 0
	carrinho.docesFinos?.forEach((e) => {
		docesFinos += `${e.quantity} ${e.title} \n`
		docesFinosPrice += e.priceTotal
		totalDocesFinos += e.quantity
	})

	let totalSalgados = 0
	let salgados = ''
	let salgadosPrice = 0
	carrinho.salgados?.forEach((e) => {
		salgados += `${e.quantity} ${e.title} \n`
		salgadosPrice += e.priceTotal
		totalSalgados += e.quantity
	})

	let frios = ''
	let friosPrice = 0
	carrinho.frios?.forEach((e) => {
		frios += `${e.quantity} ${e.title} \n`
		friosPrice += e.priceTotal
	})

	let bebidas = ''
	let bebidasPrice = 0
	carrinho.bebidas?.forEach((e) => {
		bebidas += `${e.quantity} ${e.title} \n`
		bebidasPrice += e.priceTotal
	})

	const entrega = !carrinho.entrega
		? 'Retirada no local'
		: `${carrinho.entrega.rua} - ${carrinho.entrega.number}, ${carrinho.entrega.bairro}, ${carrinho.entrega.cidade}`
	let taxa = carrinho.entrega ? 5 : 0
	const time = carrinho.time

	const message = `*${name} ${date?.split('-').reverse().join('/')}*


${bolos}${
		bolosDeForma &&
		bolosDeForma +
			'*Bolos de forma..............' +
			useFormatToRealBRL(bolosDeFormaPrice) +
			'*\n\n'
	}${
		docesTradicionais &&
		docesTradicionais +
			`*-----${totalDocesTradicionais}-----*\n*Doces tradicionais..............` +
			useFormatToRealBRL(docesTradicionaisPrice) +
			'*\n\n'
	}${
		docesGourmet &&
		docesGourmet +
			`*-----${totalDocesGourmet}-----*\n*Doces gourmet..............` +
			useFormatToRealBRL(docesGourmetPrice) +
			'*\n\n'
	}${
		docesFinos &&
		docesFinos +
			`*-----${totalDocesFinos}-----*\n*Doces finos..............` +
			useFormatToRealBRL(docesFinosPrice) +
			'*\n\n'
	}${
		salgados &&
		salgados +
			`*-----${totalSalgados}-----*\n*Salgados..............` +
			useFormatToRealBRL(salgadosPrice) +
			'*\n\n'
	}${
		frios &&
		frios + '*Frios..............' + useFormatToRealBRL(friosPrice) + '*\n\n'
	}${
		bebidas &&
		bebidas +
			'*Bebidas..............' +
			useFormatToRealBRL(bebidasPrice) +
			'*\n\n'
	}${carrinho.entrega ? '*Taxa de entrega..............R$ 5,00*\n\n' : ''}${
		carrinho.observacoes ? '*' + carrinho.observacoes + '*\n\n' : ''
	}
*Total...............${useFormatToRealBRL(
		bolosPrice +
			bolosDeFormaPrice +
			docesTradicionaisPrice +
			docesGourmetPrice +
			docesFinosPrice +
			salgadosPrice +
			friosPrice +
			bebidasPrice +
			taxa
	)}*

*${entrega}*  _*${time}*_`

	console.log(message)
	return encodeURI(message)
	//
}
