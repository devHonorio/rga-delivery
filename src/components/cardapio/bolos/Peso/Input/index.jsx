import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { SContainer, SOpemModalPeso } from '../styles'
import { SLabel } from '../../styles'
import { SInput, SLabelContainer, SSpan } from './styles'

export default function Input({ onClick, peso = '1.5' }) {
	const { state, setState } = useContextState()
	const { bento } = state

	return (
		<SContainer onClick={onClick}>
			<SLabel htmlFor='peso'>Quantos quilos(kg) gostaria ?</SLabel>
			<SLabelContainer htmlFor='peso'>
				<SOpemModalPeso type='button'>
					{bento ? '600g' : `${state.peso}`.replace('.', ',') + 'kg'}
				</SOpemModalPeso>
			</SLabelContainer>
		</SContainer>
	)
}
