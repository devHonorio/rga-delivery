import { SContainer } from './styles'
import { SButton } from '@/components/@ui/Buton'

import Input from './Input'
import Bento from './bento'
import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { usePeso } from '@/hooks/useBolo'

export default function Peso({ className, nav }) {
	const { state } = useContextState()

	function avancar() {
		usePeso(state.peso) && nav('recheios')
	}
	return (
		<SContainer className={className}>
			<Input />
			<Bento />
			<SButton type='button' className='bg-orange-400' onClick={avancar}>
				Avançar
			</SButton>
		</SContainer>
	)
}
