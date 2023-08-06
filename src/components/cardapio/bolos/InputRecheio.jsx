import { produtos } from '@/data/bolos/recheios'
import ContainerCardapio from '../ContainerCardapio'
import CardProduct from '../cardProduct'
import Button from './Button'

export default function InputRecheio({ className }) {
	return (
		<div className={`flex flex-col items-center gap-5 ${className}`}>
			<ContainerCardapio className={`grid`}>
				{produtos.recheios.map((recheio, i) => {
					return (
						<CardProduct
							id={recheio.id}
							name={recheio.title}
							title={recheio.title}
							value={recheio}
							price={recheio.price}
							image={recheio.image}
							key={i}
						/>
					)
				})}
			</ContainerCardapio>
			<div className={`flex gap-5`}>
				<Button content={'Voltar'} />
				<Button content={'Avançar'} />
			</div>
		</div>
	)
}
