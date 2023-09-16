import { SCircle, SContainer, SContent, SDivider } from './styles'

export default function Bolinha({ className, content, divider, isActive }) {
	return (
		<SContainer>
			<SCircle className={className} data-isActive={isActive}>
				<SContent>{content}</SContent>
			</SCircle>
			{divider && <SDivider data-divider={divider}></SDivider>}
		</SContainer>
	)
}
