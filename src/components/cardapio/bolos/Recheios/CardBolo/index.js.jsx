import { Check } from '@/components/comum/Icons'
import Image from 'next/image'
import { useState } from 'react'

import { SCheck, SContainer, SLabel, STitle } from './styles'
import { useRecheios } from '@/hooks/useBolo'

export default function CardBolo({ id, name, title, value, image, price }) {
	const [checked, setChecked] = useState(false)

	const { AddRecheio, removeRecheio } = useRecheios()

	return (
		<SLabel htmlFor={id}>
			<input
				type='checkbox'
				name={name}
				id={id}
				className='peer hidden'
				value={value}
			/>

			<SContainer
				data-checked={checked}
				onClick={() => {
					!checked && AddRecheio(value) && setChecked(true)
					checked && removeRecheio(value) && setChecked(false)
				}}>
				<Image
					width={100}
					height={100}
					src={image}
					alt={title}
					className='w-full rounded-3xl'
				/>

				<STitle>{title}</STitle>
				<p className='text-sm opacity-70'>
					<span className={`${checked && 'hidden'} lg:text-xl`}>
						R$ {price.toFixed(2)}/kg
					</span>

					<SCheck className={!checked && 'hidden'}>
						Selecionado <Check />
					</SCheck>
				</p>
			</SContainer>
		</SLabel>
	)
}
