import Quadrado from './Quadrada'
import Redondo from './Redondo'
import { useBolo } from '@/hooks/useBolo'
import { useContextCont } from '@/components/contexts/ContextContador'
import { SContainer, SLi, SUl } from './styles'
import { SLabel } from '../styles'

import { SButton } from '@/components/@ui/Buton'

export default function Formato({ className, nav }) {
	const { cont } = useContextCont()
	const { setFormato, formato } = useBolo(cont)

	

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
				<Quadrado formato={formato} setFormato={setFormato} />
				<Redondo formato={formato} setFormato={setFormato} />
			</div>
			<div className={`flex gap-5`}>
				<SButton
					onClick={() => {
						nav('recheio')
					}}>
					Voltar
				</SButton>
				<SButton
					onClick={() => {
						nav('adicionado')
					}}>
					Adicionar ao carrinho
				</SButton>
			</div>
		</SContainer>
	)
}
