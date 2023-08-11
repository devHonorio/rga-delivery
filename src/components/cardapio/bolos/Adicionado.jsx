import { Router, useRouter } from 'next/router'
import Button from './Button'

export default function Adicionado({ nav, className }) {
	const router = useRouter()
	return (
		<div className={`${styles.container} ${className}`}>
			<h1 className={`${styles.h1}`}>Pedido adicionado</h1>
			<Button
				content={'Pedir mais um bolo'}
				nav={() => {
					nav('peso')
					router.push('#header')
				}}
			/>
		</div>
	)
}

const styles = {
	h1: 'text-5xl font-medium',
	container: 'py-52',
}
