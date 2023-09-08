import Button from '@/components/comum/Button'
import ItemCarrinho from '../ItemCarrinho'
import Footer from '../Footer'

import { useEffect, useId, useState } from 'react'
import ItemBolo from './ItemBolo'
import { useCarrinho } from '@/hooks/useStorage'
import { SButton } from '@/components/@ui/Buton'

export default function Modal1({ className, setIsActive }) {
	const [carrinho, setCarrinho] = useState()
	const getStorageCarrinho = () => {
		const { getStorage } = useCarrinho()
		setCarrinho({ ...getStorage() })
	}
	useEffect(getStorageCarrinho, [])

	return (
		<div className={`${className}`}>
			<div className='flex flex-col divide-y-2 pb-4'>
				{carrinho &&
					carrinho.bolos?.map((e, i) => {
						return (
							<ItemBolo
								key={i}
								recheios={e.recheios}
								peso={e.peso}
								price={e.price}
							/>
						)
					})}
			</div>

			<Footer />

			<div className='flex justify-end pt-3 pb-7'>
				<SButton onClick={() => setIsActive(2)}>Avançar</SButton>
			</div>
		</div>
	)
}
