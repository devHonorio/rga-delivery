import { Bolo } from '../comum/Icons'
import MiniButtonIcon from '../comum/MiniButtonIcon'

import { PiDropBold } from 'react-icons/pi'
import { LuCupSoda } from 'react-icons/lu'
import { RiCake3Line } from 'react-icons/ri'
export default function CardapioIndex() {
	return (
		<main className='py-10'>
			<nav className='flex gap-4 '>
				<MiniButtonIcon icon={<Bolo />} content='Bolos' />
				<MiniButtonIcon icon={<PiDropBold />} content='Salgados' />
				<MiniButtonIcon icon={<RiCake3Line />} content='Doces' />
				<MiniButtonIcon icon={<LuCupSoda />} content='Bebidas' />
			</nav>
		</main>
	)
}
