import { useCarrinho } from '@/hooks/useStorage'
import FooterCarrinho from './FooterCarrinho'
import HeaderCarrinho from './HeaderCarrinho'
import { SContainer, SHmin } from './styles'
import { useEffect, useState } from 'react'

export default function LayoutCarrinho({ children, className, isActive }) {
	const [carrinho, setCarrinho] = useState()
	const { getStorage } = useCarrinho()
	useEffect(() => {
		setCarrinho(getStorage())
	}, [])
	return (
		<SContainer className={className}>
			<HeaderCarrinho isActive={isActive} />
			{!carrinho && 'Não á itens no carrinho'}
			{carrinho && children}
		</SContainer>
	)
}
