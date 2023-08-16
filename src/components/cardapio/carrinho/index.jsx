import { useState } from 'react'
import LayoutCarrinho from './LayoutCarrinho'
import Modal from './Modal'
import Modal2 from './Modal2'
import Modal3 from './Modal3'

export default function CarrinhoC() {
	const [isActive, setIsActive] = useState(1)
	return (
		<LayoutCarrinho isActive={isActive}>
			<Modal
				className={`${isActive !== 1 && 'hidden'}`}
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
