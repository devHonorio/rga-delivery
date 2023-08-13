import * as S from './styles'

export default function MiniButtonIcon({ icon, content, onClick, action }) {
	return (
		<S.MiniButton
			onClick={() => onClick(content)}
			className={content === action ? 'bg-orange-400' : 'bg-white'}>
			{icon}

			{content}
		</S.MiniButton>
	)
}
