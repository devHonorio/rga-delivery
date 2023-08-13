import * as S from './styles'
export default function ButtonSocial({ icon, href }) {
	return (
		<S.Social target='_blank' href={href}>
			{icon}
		</S.Social>
	)
}
