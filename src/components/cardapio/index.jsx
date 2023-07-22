import { Bolo } from '../comum/Icons'
import MiniButtonIcon from '../comum/MiniButtonIcon'
import { recheios } from '../../data/bolos/recheios'
import { PiDropBold } from 'react-icons/pi'
import { LuCupSoda } from 'react-icons/lu'
import { RiCake3Line } from 'react-icons/ri'
import CardProduct from './cardProduct'
export default function CardapioIndex() {
	return (
		<main className='py-10'>
			<nav className='flex gap-4 flex-wrap'>
				<MiniButtonIcon icon={<Bolo className='h-4 w-4' />} content='Bolos' />
				<MiniButtonIcon icon={<PiDropBold />} content='Salgados' />
				<MiniButtonIcon icon={<RiCake3Line />} content='Doces' />
				<MiniButtonIcon icon={<LuCupSoda />} content='Bebidas' />
			</nav>

			<div className='py-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4  lg:grid-cols-4'>
				{recheios.map((r) => {
					return (
						<CardProduct
							id={r.id}
							name={r.name}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
						/>
					)
				})}
			</div>
		</main>
	)
}
