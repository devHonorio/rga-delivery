import { Check } from '@/components/comum/Icons'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { SCheck, SContainer, SLabel, STitle } from './styles'

export default function CardBolo({
	id,
	name,
	title,
	value,
	image,
	price,
	addRecheio,
	removeRecheio,
}) {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		const storage = sessionStorage.getItem(id)

		if (storage) {
			setChecked(true)
		}
	}, [])

	return (
		<SLabel htmlFor={id}>
			<input
				type='checkbox'
				name={name}
				id={id}
				checked={checked}
				className='peer hidden'
				value={value}
			/>

			<SContainer
				onClick={() => {
					if (!checked) {
						addRecheio(value) && setChecked(true)
					} else if (checked) {
						removeRecheio(value)
						setChecked(false)
						toast.error('Recheio removido')
						sessionStorage.removeItem(id)
					}
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
