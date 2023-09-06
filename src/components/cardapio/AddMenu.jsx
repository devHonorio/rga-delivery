import * as S from './styles'

export default function AddMenus({ icon, left = false }) {
	return <S.ButtonAddMenus data-left={left}>{icon}</S.ButtonAddMenus>
}
