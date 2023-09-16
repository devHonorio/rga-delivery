import Image from 'next/image'
import * as S from '../../styles'
import { SContainer, SName, SPrice } from './styles'
import { Close } from '@/components/comum/Icons'

export default function ItemCarrinho({
	name = '',
	quantity = 0,
	price,
	priceTotal,
}) {
	return (
		<SContainer>
			<Image
				src={`/bolos/recheios/brigadeiro.jpg`}
				width={100}
				height={100}
				className='h-16 w-16 rounded-lg'
				alt='Foto do produto'
			/>
			<div className='flex-1'>
				<SName>
					{quantity} {name}
				</SName>
				<SPrice>
					{priceTotal?.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</SPrice>
			</div>
			<div className='flex flex-col md:gap-4 md:flex-row-reverse md:items-center items-end justify-around'>
				<S.btnRemove>
					<Close strokeWidth={3} className='h-4 w-4' />
				</S.btnRemove>
			</div>
		</SContainer>
	)
}
