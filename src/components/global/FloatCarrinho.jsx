import Link from 'next/link'
import * as S from './styles'
import { Bag } from '../comum/Icons'

export default function FloatCarrinho() {
	return (
		<Link href={'carrinho'}>
			<div className='fixed right-8 bottom-10'>
				<S.cont>4</S.cont>
				<S.FloatCarrinho>
					<Bag className='h-8 w-8' />
				</S.FloatCarrinho>
			</div>
		</Link>
	)
}
