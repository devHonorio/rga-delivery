import Image from 'next/image'
import ItemCarrinho from './ItemCarrinho'
import { Close } from '@/components/comum/Icons'

export default function Modal() {
	return (
		<div className='flex flex-col  divide-y-2'>
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
			<div className='py-8 w-full'> </div>
		</div>
	)
}
