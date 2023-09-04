import { SButton } from '@/components/@ui/Buton'
import { useContextBolos } from '@/components/contexts/ContextBolos'
import { useContextCont } from '@/components/contexts/ContextContador'
import { SLabel } from '../styles'

export default function NewBolo({ className, nav }) {
	const bolos = useContextBolos()
	const { cont, setCont } = useContextCont()
	return (
		<div className={`flex flex-col items-center gap-6 py-10 ${className}`}>
			<SLabel>Gostaria de pedir um bolo?</SLabel>

			<SButton
				type={'button'}
				className={`text-xl font-medium bg-orange-400`}
				onClick={() => {
					bolos.push({ recheios: [], price: 0, formato: null })
					setCont(cont + 1)
					nav('peso')
					sessionStorage.clear()
					console.log(bolos)
				}}>
				Novo bolo
			</SButton>
		</div>
	)
}
