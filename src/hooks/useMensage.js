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

	const message = `${name} ${date}


      ${bolos}
      
      ${
				docesTradicionais +
				'Total..........' +
				docesTradicionaisPrice?.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})
			}
      `
	return encodeURI(message)
}
