import Image from 'next/image'

import { useContextBolos } from '@/components/contexts/ContextBolos'
import { SButton } from '@/components/@ui/Buton'

export default function Adicionado({ nav, className }) {
	const bolo = useContextBolos()
	console.log(bolo)
	return (
		<div className={`${styles.container} ${className}`}>
			<h1 className={`${styles.h1}`}>Pedido adicionado</h1>
			<Image
				alt='Sucesso'
				width={300}
				height={300}
				src={'/sucesso.jpg'}
				className='h-52 w-52 self-center border-2 border-orange-400 animate-jump animate-duration-[1s]'
			/>
			<SButton
				onClick={() => {
					nav('novo-bolo')
				}}>
				Pedir mais um bolo
			</SButton>
		</div>
	)
}

const styles = {
	h1: 'text-5xl font-medium ',
	container: 'py-20 flex flex-col gap-5 items-center justify-center',
}
