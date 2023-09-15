import { useCarrinho } from '@/hooks/useStorage'
import HeaderCarrinho from './HeaderCarrinho'
import { SContainer } from './styles'

export default function LayoutCarrinho({ children, className, isActive }) {
	const { getStorage } = useCarrinho()
	const carrinho = getStorage()

	return (
		<SContainer className={className}>
			<HeaderCarrinho isActive={isActive} />
			{!carrinho && 'Não á itens no carrinho'}
			{carrinho && children}
		</SContainer>
	)
}
