import { produtos } from '@/data/bolos/recheios'
import ContainerCardapio from '../ContainerCardapio'

import Button from './Button'
import CardBolo from './CardBolo'
import { useRouter } from 'next/router'

export default function InputRecheio({ className, nav, bolo }) {
	const listaRecheio = []

	function addRecheio(recheio) {
		bolo.recheio = recheio
		console.log(bolo.peso)
	}
	function removeRecheio(recheio) {
		listaRecheio.forEach((e, i) => {
			if (e.id === recheio.id) {
				listaRecheio.splice(i, 1)
			}
		})
		console.log(listaRecheio)
	}
	function tamanho() {
		return listaRecheio.length > 2 ? true : false
	}
	const router = useRouter()
	return (
		<div className={`flex flex-col items-center gap-5 ${className}`}>
			<ContainerCardapio className={`grid`} id={'recheio'}>
				{produtos.recheios.map((recheio, i) => {
					return (
						<CardBolo
							id={recheio.id}
							name={recheio.title}
							title={recheio.title}
							value={recheio}
							price={recheio.price}
							image={recheio.image}
							key={i}
							removeRecheio={removeRecheio}
							addRecheio={addRecheio}
							tamanho={tamanho}
						/>
					)
				})}
			</ContainerCardapio>
			<div className={`flex gap-5`}>
				<Button
					content={'Voltar'}
					nav={() => {
						nav('peso')
						router.push('#header')
					}}
				/>
				<Button
					content={'Avançar'}
					nav={() => {
						nav('formato')
						router.push('#header')
					}}
				/>
			</div>
		</div>
	)
}
