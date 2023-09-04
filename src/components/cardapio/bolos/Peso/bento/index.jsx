import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { SCheckCustom, SContainer, SLabel } from './styles'

export default function Bento() {
	const { state, setState } = useContextState()
	const { bento } = state

	return (
		<SContainer>
			<SLabel htmlFor='bento' className={bento ? 'text-black' : 'text-red-600'}>
				Bento cake 600g {bento}
			</SLabel>
			<SCheckCustom className={bento ? 'bg-orange-500' : 'bg-white'}>
				&#10003;
			</SCheckCustom>
			<input
				type='checkbox'
				name=''
				id='bento'
				className={`appearance-none`}
				onChange={() => {
					setState({ ...state, bento: !bento, peso: 0.6 })
				}}
			/>
		</SContainer>
	)
}
