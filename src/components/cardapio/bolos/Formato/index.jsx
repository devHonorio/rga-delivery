import Quadrado from './Quadrada'
import Redondo from './Redondo'

import { SContainer, SLi, SUl } from './styles'
import { SLabel } from '../styles'

import { SButton } from '@/components/@ui/Buton'
import { useContextState } from '@/components/contexts/ContextStatesBolo'

export default function Formato({ className, nav }) {
	const { state } = useContextState()
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

			<div className={`flex gap-5`}>
				<Quadrado />
				<Redondo />
			</div>
			<div className={`flex gap-5`}>
				<SButton
					type='button'
					onClick={() => {
						nav('recheios')
					}}>
					Voltar
				</SButton>
				<SButton
					type='button'
					onClick={() => {
						console.log(state)
					}}>
					Adicionar ao carrinho
				</SButton>
			</div>
		</SContainer>
	)
}
