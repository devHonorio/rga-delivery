import { Truck } from '@/components/comum/Icons'
import tw from 'tailwind-styled-components'

const Container = tw.div`
flex flex-col items-end
`
const Subtotal = tw.p`text-xl font-semibold text-gray-900`
const EntregaContainer = tw.div`flex items-center gap-2`
const Entrega = tw.div`text-lg font-medium text-gray-500`
const Total = tw.p`mt-5 text-3xl font-bold`
const Valor = tw.span`text-orange-400`

export default function Footer({ children }) {
	return (
		<Container>
			<Subtotal>Subtotal: 414,99</Subtotal>
			<EntregaContainer>
				<Truck className='text-gray-500 h-5 w-5' />
				<Entrega>Entrega: + R$ 5,00</Entrega>
			</EntregaContainer>

			<Total>
				Total: <Valor>R$ 419,99</Valor>
			</Total>
			{children}
		</Container>
	)
}
