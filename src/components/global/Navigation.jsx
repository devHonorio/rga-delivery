import { Close } from '../comum/Icons'
import Nlink from '../comum/NLink'

export default function Navigation({ isOpen, setIsOpen }) {
	return (
		<nav
			className={`${
				!isOpen && 'hidden'
			} items-center w-full absolute top-0 left-0 right-0 bottom-0 bg-white flex flex-col justify-center gap-5 z-20 lg:flex lg:justify-between lg:static lg:bg-inherit lg:flex-row xl:w-1/3`}>
			<button
				className='lg:hidden absolute top-7 right-7'
				onClick={() => setIsOpen(!isOpen)}>
				<Close className='h-6 w-6' />
			</button>
			<Nlink href='/' content='Home' className='lg:hidden' />
			<Nlink href='/cardapio' content='Cardapio' />
			<Nlink href='/reservas' content='Reservas' />
			<Nlink href='depoimentos' content='Depoimentos' />
		</nav>
	)
}
