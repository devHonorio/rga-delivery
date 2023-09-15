import { SButton } from '@/components/@ui/Buton'
import { SLabel } from '../styles'

import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { useRouter } from 'next/router'
import { v4 } from 'uuid'

export default function NewBolo({ className, nav }) {
	const { setState } = useContextState()
	const router = useRouter()
	const id = v4()

	return (
		<div className={`flex flex-col items-center gap-6 py-10 ${className}`}>
			<SLabel>Gostaria de pedir um bolo?</SLabel>

			<SButton
				type={'reset'}
				className={`text-xl font-medium bg-orange-400`}
				onClick={() => {
					setState({
						id,
						price: 0,
						peso: 0,
						bento: false,
						recheios: [],
						formato: null,
						reset: true,
						priceBolo: 0,
					})
					router.push('#header')
					nav('peso')
				}}>
				Novo bolo
			</SButton>
		</div>
	)
}
