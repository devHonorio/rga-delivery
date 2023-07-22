import { Bolo } from '../comum/Icons'
import MiniButtonIcon from '../comum/MiniButtonIcon'
import { produtos } from '../../data/bolos/recheios'
import { PiDropBold } from 'react-icons/pi'
import { LuCupSoda } from 'react-icons/lu'
import { RiCake3Line } from 'react-icons/ri'
import CardProduct from './cardProduct'
import ContainerCardapio from './ContainerCardapio'
import { useState } from 'react'
import Image from 'next/image'
export default function CardapioIndex() {
	const [navCardapio, setNavCardapio] = useState('Salgados')

	return (
		<main className='py-10'>
			<nav className='flex gap-4 flex-wrap'>
				<MiniButtonIcon
					icon={<Bolo className='h-4 w-4' />}
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

			<ContainerCardapio className={navCardapio !== 'Bolos' && 'hidden'}>
				{produtos.recheios.map((r) => {
					return (
						<CardProduct
							id={r.id}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
						/>
					)
				})}
			</ContainerCardapio>
			<ContainerCardapio className={navCardapio !== 'Salgados' && 'hidden'}>
				{produtos.recheios.map((d) => {
					return (
						<CardProduct
							id={d.id}
							title={d.title}
							price={d.price}
							image={d.image}
							value={d}
						/>
					)
				})}
			</ContainerCardapio>
			<ContainerCardapio className={navCardapio !== 'Doces' && 'hidden'}>
				{produtos.doces.tradicionais.map((r) => {
					return (
						<CardProduct
							id={r.id}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
						/>
					)
				})}
			</ContainerCardapio>
			<ContainerCardapio className={navCardapio !== 'Bebidas' && 'hidden'}>
				{produtos.recheios.map((r) => {
					return (
						<CardProduct
							id={r.id}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
						/>
					)
				})}
			</ContainerCardapio>
			<ContainerCardapio
				className={navCardapio !== 'Bolo de forma' && 'hidden'}>
				{produtos.recheios.map((r) => {
					return (
						<CardProduct
							id={r.id}
							title={r.title}
							price={r.price}
							image={r.image}
							value={r}
						/>
					)
				})}
			</ContainerCardapio>
		</main>
	)
}
