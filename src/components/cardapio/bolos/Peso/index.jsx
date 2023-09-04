import { useBolo } from '@/hooks/useBolo'
import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { SContainer } from './styles'
import { SButton } from '@/components/@ui/Buton'
import { useContextBolos } from '@/components/contexts/ContextBolos'
import { useContextCont } from '@/components/contexts/ContextContador'
import Input from './Input'
import Bento from './bento'

export default function Peso({ className, nav }) {
	const { state, setState } = useContextState()
	const bolos = useContextBolos()
	const { cont } = useContextCont()
	const { setPeso } = useBolo(cont)

	function navPeso() {
		setPeso(state.peso) && nav('recheio')
		setState({ ...state, peso: state.bento ? 0.6 : state.peso })
		console.log(bolos[cont])
	}
	return (
		<SContainer className={className}>
			<Input />
			<Bento />
			<SButton type='button' className='bg-orange-400' onClick={navPeso}>
				Avançar
			</SButton>
		</SContainer>
	)
}
