import { SButton } from '@/components/@ui/Buton'
import { SContainer, SText } from './style'
import { useRouter } from 'next/router'
import { SLabel } from '../styles'

export default function Informacao({ nav, className }) {
	const router = useRouter()
	return (
		<SContainer className={className}>
			<SLabel>Atençao</SLabel>
			<SText>
				A decoração e cobertura do bolo pode ser definida posteriormente pelo
				Whatsapp que você sera direcionada.
			</SText>
			<div className={`flex gap-5`}>
				<SButton
					type='button'
					onClick={() => {
						router.push('#header')
						nav('formato')
					}}>
					Voltar
				</SButton>
				<SButton type='button' onClick={() => nav('adicionado')}>
					Adicionar ao carrinho
				</SButton>
			</div>
		</SContainer>
	)
}
