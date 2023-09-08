import { Map } from '@/components/comum/Icons'
import tw from 'tailwind-styled-components'
import Footer from './Footer'
import ItensEtp2 from './ItensEtapa3'
import { SButton } from '@/components/@ui/Buton'
import { useRouter } from 'next/router'
const Container = tw.div`flex flex-col`
const Title = tw.p`text-xl font-semibold`
const ContainerRua = tw.address`flex items-center gap-4  py-5`
const DivIcon = tw.div`flex justify-center items-center h-10 w-10 bg-orange-200 rounded-xl`
const Endereco = tw.p`text-lg font-semibold not-italic`
const ContainerItens = tw.div`divide-y pt-3`

export default function Modal3({ className, setIsActive }) {
	const router = useRouter()
	return (
		<Container className={`${className}`}>
			<Title>Itens do seu pedido:</Title>
			<ContainerItens>
				<ItensEtp2 />
				<ItensEtp2 />
				<ItensEtp2 />
				<ItensEtp2 />
				<ItensEtp2 />
				<ItensEtp2 />
			</ContainerItens>
			<Title>Local entrega:</Title>
			<ContainerRua>
				<DivIcon>
					<Map />
				</DivIcon>

				<Endereco>Rua Papa João Paulo II, 570, Água Verde</Endereco>
			</ContainerRua>

			<Footer />
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
		</Container>
	)
}
