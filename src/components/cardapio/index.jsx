import { Bolo } from '../comum/Icons'
import MiniButtonIcon from '../comum/MiniButtonIcon'
import { produtos } from '../../data/bolos/recheios'
import { PiDropBold } from 'react-icons/pi'
import { LuCupSoda } from 'react-icons/lu'
import { RiCake3Line } from 'react-icons/ri'
import CardProduct from './comuns/CardProduct'
import ContainerCardapio from './comuns/ContainerCardapio'
import { useState } from 'react'

import Image from 'next/image'
import FormBolos from './bolos/FormBolos'
export default function CardapioIndex() {
	const [navCardapio, setNavCardapio] = useState('Bolos')

	return (
		<main id='header' className='py-10'>
			<nav className='flex gap-4 flex-wrap'>
				<MiniButtonIcon
					icon={<Bolo className='h-3 w-3' />}
					content='Bolos'
					action={navCardapio}
					onClick={setNavCardapio}
				/>
				<MiniButtonIcon
					icon={<PiDropBold />}
					content='Salgados'
					action={navCardapio}
					onClick={setNavCardapio}
				/>
				<MiniButtonIcon
					icon={<RiCake3Line />}
					content='Doces'
					action={navCardapio}
					onClick={setNavCardapio}
				/>
				<MiniButtonIcon
					icon={<LuCupSoda />}
					content='Bebidas'
					action={navCardapio}
					onClick={setNavCardapio}
				/>
				<MiniButtonIcon
					icon={
						<Image
							src={`/boloDeForma.png`}
							alt={`Bolo de forma`}
							width={50}
							height={50}
							className='h-5 w-5'
						/>
					}
					content='Bolo de forma'
					action={navCardapio}
					onClick={setNavCardapio}
				/>
			</nav>

			<FormBolos className={navCardapio !== 'Bolos' && 'hidden'} />

			<ContainerCardapio className={navCardapio !== 'Salgados' && 'hidden'}>
				{produtos.salgados.map((r, i) => {
					return (
						<CardProduct
							key={i}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
							category={r.category}
						/>
					)
				})}
			</ContainerCardapio>

			<ContainerCardapio className={navCardapio !== 'Doces' && 'hidden'}>
				{produtos.doces.tradicionais.map((r, i) => {
					return (
						<CardProduct
							key={i}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
							category={r.category}
						/>
					)
				})}
			</ContainerCardapio>

			<ContainerCardapio className={navCardapio !== 'Bebidas' && 'hidden'}>
				<h1>Bebidas</h1>
			</ContainerCardapio>

			<ContainerCardapio
				className={navCardapio !== 'Bolo de forma' && 'hidden'}>
				<h1>Bolo de forma</h1>
			</ContainerCardapio>
		</main>
	)
}
