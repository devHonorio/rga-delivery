import { SButton } from '@/components/@ui/Buton'
import { SLabel } from '../styles'

export default function NewBolo({ className, nav }) {
	return (
		<div className={`flex flex-col items-center gap-6 py-10 ${className}`}>
			<SLabel>Gostaria de pedir um bolo?</SLabel>

			<SButton
				type={'button'}
				className={`text-xl font-medium bg-orange-400`}
				onClick={() => {
					nav('peso')
				}}>
				Novo bolo
			</SButton>
		</div>
	)
}
