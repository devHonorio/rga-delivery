import { SContainer } from './styles'
import { SButton } from '@/components/@ui/Buton'

import Input from './Input'

import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { usePeso } from '@/hooks/useBolo'
import Modal from './Input/modal'
import { useState } from 'react'

export default function Peso({ className, nav }) {
	const { state } = useContextState()
	const [active, setActive] = useState(false)

	function avancar() {
		usePeso(state.peso) && nav('recheios')
	}
	return (
		<SContainer className={className}>
			<Modal active={active} setActive={setActive} />
			<Input
				onClick={() => {
					setActive(true)
				}}
			/>

			<SButton type='button' className='bg-orange-400' onClick={avancar}>
				Avançar
			</SButton>
		</SContainer>
	)
}
