import Image from 'next/image'
import { useId, useState } from 'react'
import { Bag } from '../comum/Icons'
import { toast } from 'react-toastify'

import * as S from './styles'
import AddMenus from './AddMenu'

export default function CardProduct({ title, image, price }) {
	const addForCarrinho = () => {
		toast.success('Adicionado ao carrinho')
	}

	return (
		<S.ContainerCard>
			<Image
				width={100}
				height={100}
				src={image}
				alt={title}
				className='w-full rounded-3xl'
			/>

			<S.Title>{title}</S.Title>
			<S.ContainerP>
				<S.Price>{price}</S.Price>
				<div className={`flex gap-2`}>
					<S.ButtonsCard>
						<AddMenus icon={'-'} left />
						<S.Quantity
							placeholder='0'
							type='number'
							typeof='numeric'
							min={0}
						/>
						<AddMenus icon={'+'} />
					</S.ButtonsCard>

					<S.BtnCarriho onClick={addForCarrinho}>
						<Bag />
					</S.BtnCarriho>
				</div>
			</S.ContainerP>
		</S.ContainerCard>
	)
}
