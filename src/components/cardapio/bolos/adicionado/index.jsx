import Image from 'next/image'

import { SButton } from '@/components/@ui/Buton'
import { useContextState } from '@/components/contexts/ContextStatesBolo'

export default function Adicionado({ nav, className }) {
	const { setState } = useContextState()

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
				type='button'
				onClick={() => {
					setState({
						price: 0,
						peso: 0,
						bento: false,
						recheios: [],
						formato: null,
						reset: true,
					})

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
