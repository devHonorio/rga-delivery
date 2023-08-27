import { Check } from '@/components/comum/Icons'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'

const className = {
	label: ' font-medium group',
	conatainer:
		'bg-white p-2 rounded-3xl flex flex-col items-center gap-2 shadow-sm md:p-3 hover:bg-orange-400 transition-all animate-fade-up animate-once animate-duration-[1s] animate-ease-in-out animate-normal cursor-pointer ',
}
export default function CardBolo({
	id,
	name,
	title,
	value,
	image,
	price,
	addRecheio,
	removeRecheio,
	tamanho,
}) {
	const [checked, setChecked] = useState(false)

	return (
		<label className={className.label} htmlFor={id}>
			<input
				type='checkbox'
				name={name}
				id={id}
				checked={checked}
				onChange={() => {
					setChecked(!checked)
					if (checked) {
						toast.error('Recheio Removido')
						removeRecheio(value)
					} else {
						toast.success('Recheio adicionado')
						addRecheio(value)
						if (tamanho()) {
							removeRecheio(value)
							alert('Pode ser escolhido apenas 2 recheios')
							setChecked(false)
							toast.error('Recheio Removido')
						}
					}
				}}
				className='peer hidden'
				value={value}
			/>

			<div className={className.conatainer + 'peer-checked:bg-amber-950'}>
				<Image
					width={100}
					height={100}
					src={image}
					alt={title}
					className='w-full rounded-3xl'
				/>

				<h2
					className={`text-xs text-orange-500 font-bold pl-2 lg:text-base group-checked:text-white group-hover:text-white`}>
					{title}
				</h2>
				<p className={`text-sm opacity-70`}>
					<span className={`${checked && 'hidden'} lg:text-xl`}>
						R$ {price.toFixed(2)}/kg
					</span>

					<span
						className={`${
							!checked && 'hidden'
						} text-green-400 font-semibold flex items-center gap-1`}>
						Selecionado <Check />
					</span>
				</p>
			</div>
		</label>
	)
}
