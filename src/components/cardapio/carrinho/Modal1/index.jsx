import Button from '@/components/comum/Button'
import ItemCarrinho from '../ItemCarrinho'
import Footer from '../Layout/FooterCarrinho'

import { useEffect, useId, useState } from 'react'
import ItemBolo from './ItemBolo'
import { useCarrinho } from '@/hooks/useStorage'
import { SButton } from '@/components/@ui/Buton'
import { SContainerContent } from './styles'

export default function Modal1({ className, setIsActive }) {
	const [carrinho, setCarrinho] = useState()
	const getStorageCarrinho = () => {
		const { getStorage } = useCarrinho()
		setCarrinho({ ...getStorage() })
	}
	useEffect(getStorageCarrinho, [])

	return (
		<div className={`${className} `}>
			<SContainerContent>
				{carrinho &&
					carrinho.bolos?.map((e, i) => {
						return (
							<ItemBolo
								key={i}
								recheios={e.recheios}
								peso={e.peso}
								price={e.priceBolo}
							/>
						)
					})}
			</SContainerContent>

			<Footer>
				<div className='flex justify-end pt-3 pb-7 '>
					<SButton onClick={() => setIsActive(2)}>Avançar</SButton>
				</div>
			</Footer>
		</div>
	)
}
