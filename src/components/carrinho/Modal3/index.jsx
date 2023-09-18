import { Map } from '@/components/comum/Icons'
import tw from 'tailwind-styled-components'
import Footer from '../Layout/FooterCarrinho'
import ItensEtp2 from '../ItensEtapa3'
import { SButton } from '@/components/@ui/Buton'
import { useRouter } from 'next/router'
import { useCarrinho } from '@/hooks/useStorage'
import Bolos from './Bolos'
import { useMensage } from '@/hooks/useMensage'

const Container = tw.div`flex flex-col `
const Title = tw.p`text-xl font-semibold`
const ContainerRua = tw.address`flex items-center gap-4  py-5`
const DivIcon = tw.div`flex justify-center items-center h-10 w-10 bg-orange-200 rounded-xl`
const Endereco = tw.p`text-lg font-semibold not-italic`
const ContainerItens = tw.div`divide-y pt-3`

export default function Modal3({ className, setIsActive }) {
	const { getStorage } = useCarrinho()

	let carrinho = getStorage()

	function renderItens() {
		if (carrinho) {
			const bolos = carrinho.bolos?.map((e, i) => {
				return (
					<Bolos
						key={i}
						id={e.id}
						peso={e.peso}
						recheios={e.recheios}
						price={e.priceBolo}
					/>
				)
			})
			const docesTradicionais = carrinho.docesTradicionais?.map((e, i) => {
				return (
					<ItensEtp2
						key={i}
						image={e.image}
						id={e.id}
						name={e.title}
						quantity={e.quantity}
						priceTotal={e.priceTotal}
					/>
				)
			})

			return [bolos, docesTradicionais]
		}
	}

	const router = useRouter()

	const mensage = useMensage()

	return (
		<Container className={className}>
			<Title>Itens do seu pedido:</Title>
			<ContainerItens>{renderItens()}</ContainerItens>
			{carrinho.entrega && (
				<>
					<Title>Local entrega:</Title>
					<ContainerRua>
						<DivIcon>
							<Map />
						</DivIcon>

						<Endereco>
							{carrinho.entrega.rua} - {carrinho.entrega.number},{' '}
							{carrinho.entrega.bairro}, {carrinho.entrega.cidade}
						</Endereco>
					</ContainerRua>
				</>
			)}

			<Footer>
				<div className='flex justify-end gap-4 py-7'>
					<SButton onClick={() => setIsActive(2)}>Voltar</SButton>
					<SButton
						$as='a'
						href={`https://api.whatsapp.com/send?phone=4698815869&text=${mensage}`}
						target='_blank'
						onClick={() => {
							console.log(mensage)
							// localStorage.removeItem('carrinho')
							// router.push('/')
						}}>
						Enviar pedido
					</SButton>
				</div>
			</Footer>
		</Container>
	)
}
