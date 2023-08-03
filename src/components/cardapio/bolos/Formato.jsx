import { useState } from 'react'
import Button from './Button'

export default function Formato({ className }) {
	const [formato, setFormato] = useState('retangular')
	return (
		<div className={`flex flex-col items-center gap-10  ${className}`}>
			<h2 className='text-5xl'>Escolha um formato.</h2>
			<ul>
				<li className={`text-gray-800`}>
					- Atenção, bolos redondos somente até <strong>3,5kg</strong>.
				</li>
				<li className={`text-gray-800`}>
					- Bolos retangular somente a partir de <strong>2,5kg</strong> e no
					máximo a <strong>6kg</strong>.
				</li>
				<li className={`text-gray-800`}>
					- Recheios com morango retangular somete a partir de
					<strong> 3,5kg</strong>.
				</li>
			</ul>

			<div className={`flex gap-8`}>
				<input
					type='radio'
					name='formato'
					id='retangular'
					className={`hidden`}
				/>
				<label htmlFor='retangular'>
					<div
						className={`h-36 w-36 border ${
							formato === 'retangular'
								? 'bg-orange-500 border-white'
								: 'border-orange-500 bg-white'
						}  rounded-xl flex items-center justify-center`}>
						<div
							className={`h-14 w-28 border ${
								formato === 'retangular'
									? 'border-white text-white'
									: 'border-orange-500'
							} rounded-lg flex justify-center items-center`}>
							Retangular
						</div>
					</div>
				</label>
				<input type='radio' name='formato' id='redondo' className={`hidden`} />
				<label htmlFor='redondo'>
					<div className='h-36 w-36 border border-orange-500 bg-white rounded-xl flex items-center justify-center'>
						<div className='h-28 w-28 border border-orange-500 rounded-full flex justify-center items-center'>
							Redondo
						</div>
					</div>
				</label>
			</div>
			<div className={`flex gap-5`}>
				<Button content={'Voltar'} />
				<Button content={'Adicionar ao carrinho'} />
			</div>
		</div>
	)
}
