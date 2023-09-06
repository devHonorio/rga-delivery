import HeaderCarrinho from '../HeaderCarrinho'
import { SContainer } from './styles'

export default function LayoutCarrinho({ children, className, isActive }) {
	return (
		<SContainer className={className}>
			<HeaderCarrinho isActive={isActive} />
			{children}
		</SContainer>
	)
}
