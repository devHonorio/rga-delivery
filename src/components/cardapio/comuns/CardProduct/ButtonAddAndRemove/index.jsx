import { useRef, useState } from 'react'
import { SButtons, SContainer, SQuantity } from './styles'
import { SButton } from '@/components/@ui/Buton'
import { Bag } from '@/components/comum/Icons'
import { toast } from 'react-toastify'
import { useCarrinho } from '@/hooks/useStorage'

export default function ButtonAddAndRemove({ category, value }) {
	// const [quantity, setQuantity] = useState(0)
	const { getStorage, setStorage } = useCarrinho()

	const refQuantity = useRef()

	const adicione = () => {
		refQuantity.current.value = +refQuantity.current.value + 5
		togleToCarrinho()
	}
	const subtrai = () => {
		if (+refQuantity.current.value >= 5) {
			refQuantity.current.value = refQuantity.current.value - 5
			togleToCarrinho()
		}
	}

	const carrinho = getStorage()
	const togleToCarrinho = () => {
		const quantity = +refQuantity.current.value
		const produto = value
		produto.quantity = quantity
		produto.priceTotal = quantity * value.price

		let exist = carrinho[category].findIndex((e) => e.id == value.id)

		if (exist > -1) {
			carrinho[category][exist].quantity = quantity
			carrinho[category][exist].priceTotal = produto.priceTotal
			setStorage({ ...carrinho })
		} else {
			carrinho[category].push(produto)
			setStorage({ ...carrinho })
			toast.success('Adicionado ao carrinho')
		}
	}
	return (
		<>
			<SContainer>
				<SButtons onClick={subtrai}>-</SButtons>

				<SQuantity
					placeholder='0'
					onKeyDown={(e) => e.key == 'Enter'}
					type='number'
					typeof='numeric'
					ref={refQuantity}
					onChange={togleToCarrinho}
					defaultValue={0}
					min={0}
					step={5}
					onClick={(e) => e.currentTarget.select()}
				/>

				<SButtons onClick={adicione}>+</SButtons>
			</SContainer>
		</>
	)
}
