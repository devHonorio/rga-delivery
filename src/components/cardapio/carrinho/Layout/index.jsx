import FooterCarrinho from './FooterCarrinho'
import HeaderCarrinho from './HeaderCarrinho'
import { SContainer, SHmin } from './styles'

export default function LayoutCarrinho({ children, className, isActive }) {
	return (
		<SContainer className={className}>
			<HeaderCarrinho isActive={isActive} />
			{children}
		</SContainer>
	)
}
