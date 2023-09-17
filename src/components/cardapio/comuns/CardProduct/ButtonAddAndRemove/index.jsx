import { useEffect, useState } from 'react'
import { SButtons, SContainer, SQuantity } from './styles'
import { SButton } from '@/components/@ui/Buton'
import { Bag } from '@/components/comum/Icons'
import { toast } from 'react-toastify'
import { useCarrinho } from '@/hooks/useStorage'

export default function ButtonAddAndRemove({ category, value }) {
	const [quantity, setQuantity] = useState(0)
	const { getStorage, setStorage } = useCarrinho()

	const carrinho = getStorage()
	const addForCarrinho = () => {
		if (quantity) {
			let exist = carrinho[category].findIndex((e) => e.id == value.id)
			if (exist > -1) {
				carrinho[category][exist].quantity = quantity
				setStorage({ ...carrinho })
				toast.info('Quantidade alterada.')
			} else {
				const produto = value
				produto.quantity = quantity
				produto.priceTotal = quantity * value.price
				carrinho[category].push(produto)
				setStorage({ ...carrinho })
				toast.success('Adicionado ao carrinho')
			}
		} else {
			toast.warn('A quantidade minima é de 5 unidades.')
		}
	}
	return (
		<>
			<SContainer>
				<SButtons onClick={() => quantity >= 5 && setQuantity(quantity - 5)}>
					-
				</SButtons>

				<SQuantity
					placeholder='0'
					type='number'
					typeof='numeric'
					min={0}
					step={5}
					value={quantity}
					onChange={(e) => setQuantity(+e.target.value)}
				/>

				<SButtons onClick={() => setQuantity(quantity + 5)}>+</SButtons>
			</SContainer>

			<SButton
				onClick={addForCarrinho}
				className='group-hover:flex gap-2 items-center text-xs px-2 py-1 bg-orange-200 hidden md:text-sm md:py-2 md:px-3 '>
				Adicionar
				<Bag className='h-3 w-3 md:h-4 md:w-4' />
			</SButton>
		</>
	)
}
