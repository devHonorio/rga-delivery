import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { SContainer } from '../styles'
import { SLabel } from '../../styles'
import { SInput, SLabelContainer, SSpan } from './styles'

export default function Input() {
	const { state, setState } = useContextState()
	const { peso, bento } = state
	return (
		<SContainer>
			<SLabel htmlFor='peso'>Quantos quilos(kg) gostaria ?</SLabel>
			<SLabelContainer
				htmlFor='peso'
				className={bento ? 'bg-gray-50' : 'bg-white'}>
				<SInput
					type='number'
					inputMode='numeric'
					step={0.1}
					min={1.5}
					max={6}
					id='peso'
					placeholder={`1,5`}
					required
					disabled={bento}
					value={bento ? 0.6 : peso}
					onChange={(e) => {
						setState({ ...state, peso: e.target.value })
					}}
				/>
				<SSpan className=''>kg</SSpan>
			</SLabelContainer>
		</SContainer>
	)
}
