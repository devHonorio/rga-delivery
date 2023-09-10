import { useCarrinho } from '@/hooks/useStorage'
import FooterCarrinho from './FooterCarrinho'
import HeaderCarrinho from './HeaderCarrinho'
import { SContainer, SHmin } from './styles'

export default function LayoutCarrinho({ children, className, isActive }) {
	const { getStorage } = useCarrinho()
	return (
		<SContainer className={className}>
			<HeaderCarrinho isActive={isActive} />
			{!getStorage() && 'Não á itens no carrinho'}
			{getStorage() && children}
		</SContainer>
	)
}
