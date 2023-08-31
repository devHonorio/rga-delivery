import { useContext } from 'react'
import Button from './Button'
import { useRouter } from 'next/router'
import Quadrado from './Quadrada'
import Redondo from './Redondo'
import { useBolo } from '@/hooks/useBolo'
import { Contador } from '@/components/contexts/ContextContador'

export default function Formato({ className, nav }) {
	const router = useRouter()
	const { cont } = useContext(Contador)
	const { setFormato, formato } = useBolo(cont)

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
				<Quadrado formato={formato} setFormato={setFormato} />
				<Redondo formato={formato} setFormato={setFormato} />
			</div>
			<div className={`flex gap-5`}>
				<Button
					content={'Voltar'}
					nav={() => {
						nav('recheio')
						router.push('#header')
					}}
				/>
				<Button
					content={'Adicionar ao carrinho'}
					nav={() => {
						nav('adicionado')
					}}
				/>
			</div>
		</div>
	)
}
