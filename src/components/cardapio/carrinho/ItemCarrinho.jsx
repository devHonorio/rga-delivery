import Image from 'next/image'
import * as S from './styles'
import AddMenus from '../AddMenu'
import { Quantity } from '../styles'
import { Close } from '@/components/comum/Icons'

export default function ItemCarrinho() {
	return (
		<div className='bg-orange-50 flex gap-5 py-5 px-2'>
			<Image
				src={`/bolos/recheios/brigadeiro.jpg`}
				width={100}
				height={100}
				className='h-16 w-16 rounded-lg'
				alt='Foto do produto'
			/>
			<div className='flex-1'>
				<p className='font-semibold text-sm'>2kg Brigadeiro e amendoim</p>
				<p className='text-lg font-bold text-orange-400'>R$60,00</p>
			</div>
			<div className='flex flex-col items-end justify-around'>
				<S.btnRemove>
					<Close strokeWidth={3} className='h-4 w-4' />
				</S.btnRemove>

				<div className='flex'>
					<AddMenus left icon={'-'} />
					<Quantity placeholder='0' />
					<AddMenus icon={'+'} />
				</div>
			</div>
		</div>
	)
}
