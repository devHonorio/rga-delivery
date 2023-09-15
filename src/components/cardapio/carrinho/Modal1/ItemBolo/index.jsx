import { Close } from '@/components/comum/Icons'
import {
	BtnRemove,
	SContainer,
	SContainerButtons,
	SContainerPriceTitle,
	SPrice,
} from './styles'
import Image from 'next/image'
import { useCarrinho } from '@/hooks/useStorage'

export default function ItemBolo({
	peso,
	recheios,
	price,
	id,
	renderCarrinho,
	setRenderCarrinho,
}) {
	const { getStorage, setStorage } = useCarrinho()
	console.log(id)
	function removeBolo() {
		const carrinho = getStorage()
		const listaNovaBolo = carrinho.bolos?.filter((e) => e.id != id)
		setStorage({ ...carrinho, bolos: listaNovaBolo })
		setRenderCarrinho(!renderCarrinho)
	}

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
					{peso == 0.6 ? 'Bento' : peso + 'kg'}{' '}
					{recheios?.map((e) => e.name + ' ')}
				</SContainerPriceTitle>
				<SPrice>
					{price?.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</SPrice>
			</div>
			<SContainerButtons>
				<BtnRemove onClick={removeBolo}>
					<Close strokeWidth={3} className='h-4 w-4' />
				</BtnRemove>
			</SContainerButtons>
		</SContainer>
	)
}
