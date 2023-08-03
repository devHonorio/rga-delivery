import Image from 'next/image'
import { useState } from 'react'
import { Check } from '../comum/Icons'

const className = {
	label: ' font-medium group',
	conatainer:
		'bg-white p-2 rounded-3xl flex flex-col items-center gap-2 shadow-sm md:p-3 hover:bg-orange-400 transition-all animate-fade animate-once animate-duration-[1s] animate-ease-in-out animate-normal cursor-pointer ',
}
export default function CardProduct({ id, name, title, value, image, price }) {
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
					<span className={`${checked && 'hidden'} lg:text-xl`}>{price}</span>

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
