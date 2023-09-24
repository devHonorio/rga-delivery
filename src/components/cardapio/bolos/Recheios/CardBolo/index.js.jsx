import { Check } from '@/components/comum/Icons'
import Image from 'next/image'
import { useState } from 'react'

import { SCheck, SContainer, SLabel, SSelect, STitle } from './styles'
import { useRecheios } from '@/hooks/useBolo'
import { useFormatToRealBRL } from '@/hooks/useFormatRealBRL'
import { useContextState } from '@/components/contexts/ContextStatesBolo'

export default function CardBolo({ id, name, title, value, image, price }) {
	const [checked, setChecked] = useState(false)

	const { AddRecheio, removeRecheio } = useRecheios()
	const { state, setState } = useContextState()

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
						{useFormatToRealBRL(price)}/kg
					</span>

					<SCheck className={!checked && 'hidden'}>
						Selecionado <Check />
					</SCheck>
				</p>
			</SContainer>
			{checked && id == 'marta-rocha' && (
				<SSelect
					onChange={(e) => {
						setState({
							...state,
							recheios: [state.recheios[0], { name: e.target.value }],
						})
					}}
					title='Escolha uma fruta'>
					<option value='sem fruta'>Sem fruta</option>
					<option value='morango'>Morango</option>
					<option value='ameixa'>Ameixa</option>
					<option value='damasco'>Damasco</option>
					<option value='pessego'>Pessego</option>
				</SSelect>
			)}
		</SLabel>
	)
}
