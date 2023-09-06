import Button from '@/components/comum/Button'
import ItemCarrinho from '../ItemCarrinho'
import Footer from '../Footer'
import { useCarrinho } from '@/components/contexts/ContextCarrinho'
import { useId } from 'react'
import ItemBolo from './ItemBolo'

export default function Modal1({ className, setIsActive }) {
	const { carrinho } = useCarrinho()
	const bolos = carrinho.filter((e) => e.type === 'bolo')
	return (
		<div className={`${className}`}>
			<div className='flex flex-col divide-y-2 pb-4'>
				{bolos.map((e) => {
					const id = useId()
					return <ItemBolo peso={e.peso} recheios={e.recheios} key={id} />
				})}
				{carrinho.map((e) => {
					const id = useId()
					const recheios = e.recheios.map((e) => e.name + ' ')
					return <ItemCarrinho key={id} peso={e.peso} title={recheios} />
				})}
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
