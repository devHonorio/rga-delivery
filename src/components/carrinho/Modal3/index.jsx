import { Map } from '@/components/comum/Icons'
import tw from 'tailwind-styled-components'
import Footer from '../Layout/FooterCarrinho'
import ItensEtp2 from '../ItensEtapa3'
import { SButton } from '@/components/@ui/Buton'
import { useRouter } from 'next/router'
import { useCarrinho } from '@/hooks/useStorage'
import { useEffect, useState } from 'react'

const Container = tw.div`flex flex-col `
const Title = tw.p`text-xl font-semibold`
const ContainerRua = tw.address`flex items-center gap-4  py-5`
const DivIcon = tw.div`flex justify-center items-center h-10 w-10 bg-orange-200 rounded-xl`
const Endereco = tw.p`text-lg font-semibold not-italic`
const ContainerItens = tw.div`divide-y pt-3`

export default function Modal3({ className, setIsActive }) {
	const { getStorage } = useCarrinho()
	const [renderCarrinho, setRenderCarrinho] = useState(false)

	let carrinho = getStorage()

	useEffect(() => {
		carrinho = getStorage()
	}, [renderCarrinho])

	function renderItens() {
		if (carrinho) {
			const docesTradicionais = carrinho.docesTradicionais?.map((e, i) => {
				return (
					<ItensEtp2
						key={i}
						image={e.image}
						id={e.id}
						name={e.title}
						quantity={e.quantity}
						priceTotal={e.priceTotal}
						setRenderCarrinho={setRenderCarrinho}
						renderCarrinho={renderCarrinho}
					/>
					// 				<ItemBolo
					// 					key={i}
					// 					recheios={e.recheios}
					// 					peso={e.peso}
					// 					price={e.priceBolo}
					// 					id={e.id}
					// 					setRenderCarrinho={setRenderCarrinho}
					// 					renderCarrinho={renderCarrinho}
					// 				/>
				)
			})
			// 		const docesTradicionais = carrinho.docesTradicionais?.map((e, i) => {
			// 			return (
			// 				<ItemCarrinho
			// 					key={i}
			// 					id={e.id}
			// 					name={e.title}
			// 					quantity={e.quantity}
			// 					price={e.price}
			// 					priceTotal={e.priceTotal}
			// 					category={e.category}
			// 					setRenderCarrinho={setRenderCarrinho}
			// 					renderCarrinho={renderCarrinho}
			// 				/>
			// 			)
			// 		})
			return ['', docesTradicionais]
		}
	}

	const router = useRouter()

	return (
		<Container className={className}>
			<Title>Itens do seu pedido:</Title>
			<ContainerItens>{renderItens()}</ContainerItens>
			<Title>Local entrega:</Title>
			<ContainerRua>
				<DivIcon>
					<Map />
				</DivIcon>

				<Endereco>Rua Papa João Paulo II, 570, Água Verde</Endereco>
			</ContainerRua>

			<Footer>
				<div className='flex justify-end gap-4 py-7'>
					<SButton onClick={() => setIsActive(2)}>Voltar</SButton>
					<SButton
						onClick={() => {
							localStorage.removeItem('carrinho')
							router.push('/')
						}}>
						Enviar pedido
					</SButton>
				</div>
			</Footer>
		</Container>
	)
}
