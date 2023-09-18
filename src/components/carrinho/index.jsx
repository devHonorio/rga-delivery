import { useState } from 'react'
import LayoutCarrinho from './Layout'

import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal1 from './Modal1'
import { useCarrinho } from '@/hooks/useStorage'

export default function CarrinhoC() {
	const [isActive, setIsActive] = useState(1)

	const { getStorage } = useCarrinho()
	const carrinho = getStorage()
	return (
		<LayoutCarrinho isActive={isActive}>
			<Modal1
				className={isActive !== 1 && 'hidden'}
				setIsActive={setIsActive}
			/>

			<Modal2
				className={`${isActive !== 2 && 'hidden'}`}
				setIsActive={setIsActive}
			/>
			<Modal3
				className={`${isActive !== 3 && 'hidden'}`}
				setIsActive={setIsActive}
			/>
		</LayoutCarrinho>
	)
}
