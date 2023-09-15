import Image from 'next/image'

import { SContainerCard, SPrice, STitle } from './styles'
import ButtonAddAndRemove from './ButtonAddAndRemove'

export default function CardProduct({ title, image, price, category, value }) {
	return (
		<SContainerCard>
			<Image
				width={100}
				height={100}
				src={image}
				alt={title}
				className='w-full rounded-3xl h-full object-cover'
			/>

			<STitle>{title}</STitle>

			<SPrice>
				{price.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</SPrice>

			<ButtonAddAndRemove category={category} value={value} />
		</SContainerCard>
	)
}
