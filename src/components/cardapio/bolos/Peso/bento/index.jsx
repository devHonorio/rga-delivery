import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { SCheckCustom, SContainer, SLabel } from './styles'

export default function Bento() {
	const { state, setState } = useContextState()
	const { bento } = state
	function isBento() {
		!bento && setState({ ...state, bento: true, peso: 0.6 })
		bento && setState({ ...state, bento: false })
	}
	return (
		<SContainer onClick={isBento}>
			<SLabel htmlFor='bento' className={bento ? 'text-black' : 'text-red-600'}>
				Bento cake 600g {bento}
			</SLabel>
			<SCheckCustom className={bento ? 'bg-orange-500' : 'bg-white'}>
				&#10003;
			</SCheckCustom>
		</SContainer>
	)
}
