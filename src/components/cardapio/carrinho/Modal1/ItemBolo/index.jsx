import { Close } from '@/components/comum/Icons'
import {
	BtnRemove,
	SContainer,
	SContainerButtons,
	SContainerPriceTitle,
	SPrice,
} from './styles'

export default function ItemBolo({ peso, recheios }) {
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
				<SContainerPriceTitle>
					{peso} {recheios.map((e) => e.name + ' ')}
				</SContainerPriceTitle>
				<SPrice>R$60,00</SPrice>
			</div>
			<SContainerButtons>
				<BtnRemove>
					<Close strokeWidth={3} className='h-4 w-4' />
				</BtnRemove>
			</SContainerButtons>
		</SContainer>
	)
}
