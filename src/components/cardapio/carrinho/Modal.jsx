import Button from '@/components/comum/Button'
import ItemCarrinho from './ItemCarrinho'
import Footer from './Footer'

export default function Modal({ className, setIsActive }) {
	return (
		<div className={`${className}`}>
			<div className='flex flex-col divide-y-2 pb-4'>
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
				<ItemCarrinho />
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
