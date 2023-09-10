import { Truck } from '@/components/comum/Icons'
import { useCarrinho } from '@/hooks/useStorage'
import { useEffect, useState } from 'react'
import {
	SContainer,
	SEntrega,
	SEntregaContainer,
	SSubtotal,
	STotal,
	SValor,
} from './styles'

export default function FooterCarrinho({ children }) {
	const [carrinho, setCarrinho] = useState([])
	useEffect(() => {
		const { getStorage } = useCarrinho()
		setCarrinho(getStorage())
	}, [])

	const totalBolos = carrinho.bolos?.reduce(
		(ac, bolo) => ac + bolo.priceBolo,
		0
	)

	return (
		<SContainer>
			<SSubtotal>Subtotal: {totalBolos?.toFixed(2)}</SSubtotal>
			<SEntregaContainer>
				<Truck className='text-gray-500 h-4 w-4' />
				<SEntrega>Entrega: + R$ 5,00</SEntrega>
			</SEntregaContainer>

			<STotal>
				Total: <SValor>R$ {(totalBolos + 5)?.toFixed(2)}</SValor>
			</STotal>
			{children}
		</SContainer>
	)
}
