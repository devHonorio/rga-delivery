import HeaderCarrinho from './HeaderCarrinho'
import { SContainer } from './styles'
import { useEffect, useState } from 'react'

export default function LayoutCarrinho({ children, className, isActive }) {
	const [init, setInit] = useState(false)
	useEffect(() => {
		setInit(true)
	}, [])
	return (
		<SContainer className={className}>
			<HeaderCarrinho isActive={isActive} />
			{init && children}
		</SContainer>
	)
}
