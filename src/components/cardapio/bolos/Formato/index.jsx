import { SContainer, SLi, SUl } from './styles'
import { SLabel } from '../styles'

import { SButton } from '@/components/@ui/Buton'
import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { useFormato } from '@/hooks/useBolo'
import { toast } from 'react-toastify'
import { useCarrinho } from '@/hooks/useStorage'
import { useRouter } from 'next/router'

export default function Formato({ className, nav }) {
	const { state, setState } = useContextState()
	const { getStorage, setStorage } = useCarrinho()
	const router = useRouter()

	return (
		<SContainer className={className}>
			<SLabel className='text-start'>Escolha um formato.</SLabel>
			<SUl>
				<SLi>
					- Atenção, bolos redondos somente até <strong>3,5kg</strong>.
				</SLi>
				<SLi>
					- Bolos retangular somente a partir de <strong>2,5kg</strong> e no
					máximo a <strong>6kg</strong>.
				</SLi>
				<SLi>
					- Recheios com morango retangular somete a partir de
					<strong> 3,5kg</strong>.
				</SLi>
			</SUl>

			<div className={`flex gap-5`}>{useFormato()}</div>
			<div className={`flex gap-5`}>
				<SButton
					type='button'
					onClick={() => {
						setState({ ...state, formato: null })
						router.push('#header')
						nav('recheios')
					}}>
					Voltar
				</SButton>
				<SButton
					type='button'
					onClick={() => {
						!state.formato && toast.warn('Primeiro escolha um formato.')
						if (state.formato) {
							const carrinho = getStorage()

							setStorage({
								...carrinho,
								bolos: [...carrinho.bolos, state],
							})

							nav('adicionado')
						}
					}}>
					Adicionar ao carrinho
				</SButton>
			</div>
		</SContainer>
	)
}
