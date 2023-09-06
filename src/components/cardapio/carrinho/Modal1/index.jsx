import Button from '@/components/comum/Button'
import ItemCarrinho from '../ItemCarrinho'
import Footer from '../Footer'

import { useId } from 'react'
import ItemBolo from './ItemBolo'
import { useCarrinho } from '@/hooks/useStorage'

export default function Modal1({ className, setIsActive }) {
	const { getStorage } = useCarrinho()
	const carrinho = getStorage()
	return (
		<div className={`${className}`}>
			<div className='flex flex-col divide-y-2 pb-4'>
				{carrinho.bolos.map((e) => {
					const id = useId()
					return (
						<ItemBolo
							key={id}
							recheios={e.recheios}
							peso={e.peso}
							price={e.price}
						/>
					)
				})}
				<ItemBolo />
			</div>

			<Footer />

			<div className='flex justify-end pt-3 pb-7'>
				<Button
					content={'Avançar'}
					bgColor='orange-400'
					onClick={() => setIsActive(2)}
				/>
			</div>
		</div>
	)
}
