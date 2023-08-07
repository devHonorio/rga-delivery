import { useState } from 'react'
import Button from './Button'
import { useRouter } from 'next/router'

export default function Formato({ className, nav }) {
	const [formato, setFormato] = useState('retangular')
	const router = useRouter()
	return (
		<div
			className={`flex flex-col gap-10  xl:w-7/12 w-10/12 m-auto ${className}`}>
			<h2 className='text-4xl mt-5'>Escolha um formato.</h2>
			<ul className='flex flex-col gap-2'>
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

			<div className={`flex gap-5`}>
				<input
					type='radio'
					name='formato'
					id='retangular'
					className={`hidden`}
				/>
				<label htmlFor='retangular'>
					<div
						className={`h-24 w-24 border ${
							formato === 'retangular'
								? 'bg-orange-500 border-white'
								: 'border-orange-500 bg-white'
						}  rounded-xl flex items-center justify-center`}>
						<div
							className={`h-10 w-14 font-bold border ${
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
					<div className='h-24 w-24 border border-orange-500 bg-white rounded-xl flex items-center justify-center'>
						<div className='h-16 w-16 font-bold border border-orange-500 rounded-full flex justify-center items-center'>
							Redondo
						</div>
					</div>
				</label>
			</div>
			<div className={`flex gap-5`}>
				<Button
					content={'Voltar'}
					nav={() => {
						nav('recheio')
						router.push('#header')
					}}
				/>
				<Button content={'Adicionar ao carrinho'} />
			</div>
		</div>
	)
}
