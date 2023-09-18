import { Truck } from '@/components/comum/Icons'

import {
	SContainer,
	SEntrega,
	SEntregaContainer,
	SSubtotal,
	STotal,
	SValor,
} from './styles'
import { useCarrinho } from '@/hooks/useStorage'

export default function FooterCarrinho({ children }) {
	const { getStorage } = useCarrinho()
	const carrinho = getStorage()

	const totalBolos = carrinho.bolos?.reduce(
		(ac, bolo) => ac + bolo.priceBolo,
		0
	)
	const totalDocesTradicionais = carrinho.docesTradicionais?.reduce(
		(ac, doce) => ac + doce.priceTotal,
		0
	)

	function renderTotal() {
		return totalBolos + totalDocesTradicionais
	}
	return (
		<SContainer>
			<SSubtotal>
				Subtotal:{' '}
				{renderTotal()?.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</SSubtotal>
			{carrinho.entrega && (
				<SEntregaContainer>
					<Truck className='text-gray-500 h-4 w-4' />
					<SEntrega>Entrega: + R$ 5,00</SEntrega>
				</SEntregaContainer>
			)}

			<STotal>
				Total:{' '}
				<SValor>
					{(carrinho.entrega
						? renderTotal() + 5
						: renderTotal()
					)?.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</SValor>
			</STotal>
			{children}
		</SContainer>
	)
}
