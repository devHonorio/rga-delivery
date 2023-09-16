import { SCircle, SContainer, SContent, SDivider } from './styles'

export default function Bolinha({
	className,
	content,
	divider,
	isActive = false,
}) {
	return (
		<SContainer>
			<SCircle className={className} data-isactive={isActive}>
				<SContent>{content}</SContent>
			</SCircle>
			{divider && <SDivider data-divider={divider}></SDivider>}
		</SContainer>
	)
}
