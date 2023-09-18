import Link from 'next/link'
import * as S from './styles'
import { Bag } from '../comum/Icons'

export default function FloatCarrinho() {
	return (
		<Link
			href={'carrinho'}
			onClick={() => {
				sessionStorage.clear()
			}}>
			<div className='fixed right-8 bottom-10 z-50'>
				<S.FloatCarrinho>
					<Bag className='h-5 w-5' />
				</S.FloatCarrinho>
			</div>
		</Link>
	)
}
