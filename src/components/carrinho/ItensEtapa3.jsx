import Image from 'next/image'
import tw from 'tailwind-styled-components'

const Container = tw.div`flex items-center gap-4 py-5`
const Title = tw.p`text-md font-semibold `
const Price = tw.p`text-md font-bold text-orange-400`
const Quantity = tw.p`font-bold text-xl`

export default function ItensEtp2() {
	return (
		<Container>
			<Image
				src={'/sucesso.jpg'}
				alt='Comida escolhida'
				width={100}
				height={100}
				className='w-16 h-16 rounded-xl'
			/>
			<div className='flex-1'>
				<Title>Bobom de Morango</Title>
				<Price>R$ 24,00</Price>
			</div>

			<Quantity>x12</Quantity>
		</Container>
	)
}
