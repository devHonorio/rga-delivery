import { Bolo } from '../comum/Icons'
import MiniButtonIcon from '../comum/MiniButtonIcon'

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

			<div className='flex py-8 gap-4 flex-wrap justify-center '>
				<CardProduct title='Recheio de brigadeiro' value='R$ 30,00/kg' />
				<CardProduct title='Recheio de brigadeiro' value='R$ 30,00/kg' />
				<CardProduct title='Recheio de brigadeiro' value='R$ 30,00/kg' />
				<CardProduct title='Recheio de brigadeiro' value='R$ 30,00/kg' />
				<CardProduct title='Recheio de brigadeiro' value='R$ 30,00/kg' />
				<CardProduct title='Recheio de brigadeiro' value='R$ 30,00/kg' />
			</div>
		</main>
	)
}
