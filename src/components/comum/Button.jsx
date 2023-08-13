import * as S from './styles'

export default function Button({
	bgColor = 'white',
	color = 'black',
	content,
	onClick,
}) {
	return (
		<S.Button onClick={onClick} className={`bg-${bgColor} text-${color}`}>
			{content}
		</S.Button>
	)
}
