import Image from 'next/image'
import * as S from '../../styles'
import { SContainer, SName, SPrice } from './styles'
import { Close } from '@/components/comum/Icons'
import { useCarrinho } from '@/hooks/useStorage'

export default function ItemCarrinho({
	name = '',
	quantity = 0,
	priceTotal,
	category,
	id,
	setRenderCarrinho,
	renderCarrinho,
	image,
}) {
	const { getStorage, setStorage } = useCarrinho()
	function removeItem() {
		const carrinho = getStorage()
		const listaNovaItens = carrinho[category]?.filter((e) => e.id != id)
		setStorage({ ...carrinho, [category]: listaNovaItens })
		setRenderCarrinho(!renderCarrinho)
	}
	return (
		<SContainer>
			<Image
				src={image}
				width={100}
				height={100}
				className='h-16 w-16 rounded-lg'
				alt={id}
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
				<S.btnRemove onClick={removeItem}>
					<Close strokeWidth={3} className='h-4 w-4' />
				</S.btnRemove>
			</div>
		</SContainer>
	)
}
