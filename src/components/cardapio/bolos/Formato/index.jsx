import { SContainer } from './styles'
import { SLabel } from '../styles'

import { SButton } from '@/components/@ui/Buton'
import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { useFormato } from '@/hooks/useBolo'
import { toast } from 'react-toastify'

import { useRouter } from 'next/router'
import { useCarrinho } from '@/hooks/useStorage'

export default function Formato({ className, nav }) {
	const { state, setState } = useContextState()
	const { setStorage, getStorage } = useCarrinho()
	const router = useRouter()

	return (
		<SContainer className={className}>
			<SLabel className='text-start'>Escolha um formato.</SLabel>

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

							nav('informações')
						}
					}}>
					Avançar
				</SButton>
			</div>
		</SContainer>
	)
}
