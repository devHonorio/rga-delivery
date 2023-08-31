import Button from '@/components/comum/Button'
import { Contador } from '@/components/contexts/ContextContador'
import { BolosContext } from '@/pages/_app'
import { useContext } from 'react'

export default function NewBolo({ className, nav }) {
	const bolos = useContext(BolosContext)
	const { cont, setCont } = useContext(Contador)
	return (
		<div className={`flex flex-col items-center gap-6 py-10 ${className}`}>
			<h2 className='mt-10 text-center text-3xl font-medium animate-fade-left animate-duration-[400ms] animate-ease-in animate-fill-forwredondoards'>
				Gostaria de pedir um bolo?
			</h2>

			<Button
				content={'Novo bolo'}
				type={'button'}
				className={`text-xl font-medium`}
				bgColor='orange-400'
				onClick={() => {
					bolos.push({ recheios: [], price: 0, formato: null })
					setCont(cont + 1)
					nav('peso')
					console.log(bolos)
				}}
			/>
		</div>
	)
}
