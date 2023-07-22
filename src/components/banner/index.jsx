import Image from 'next/image'
import Button from '../comum/Button'
import ButtonIcon from '../comum/ButtonIcon'
import { Phone } from '../comum/Icons'
import ButtonSocial from '../comum/ButtonSocial'

import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Banner() {
	const router = useRouter()
	return (
		<section className='grid lg:grid-cols-2 lg:py-10'>
			<div className='flex flex-col justify-center xl:items-start'>
				<h1 className='lg:text-5xl text-4xl font-medium'>
					Faça seu
					<br /> pedido{' '}
					<span className='font-semibold text-orange-400'>favorito.</span>
				</h1>
				<p className='mt-4 text-gray-600 text-sm'>
					Aproveite nosso cardapio, escolha o que desejar e receba em sua casa
					de forma rápida e segura
				</p>

				<div className='mt-8 flex gap-4'>
					<Button
						content='Ver cardápio'
						bgColor='orange-400'
						color='white'
						onClick={() => router.push('/cardapio')}
					/>
					<a type='button' href='tel:5544998692094'>
						<ButtonIcon
							icon={
								<Phone
									strokeWidth={1.5}
									className={'h-5 w-5'}
									aling='flex-row-reverse'
								/>
							}
							content='(44) 9 9869204'
						/>
					</a>
				</div>
				<div className='flex gap-4 mt-8 justify-center'>
					<ButtonSocial icon={<FaInstagram />} />
					<ButtonSocial icon={<FaFacebookF />} />
					<ButtonSocial
						icon={<FaWhatsapp />}
						href='https://wa.me/5544998692094'
					/>
				</div>
			</div>

			<div className='relative'>
				<Image
					src='/bolos/png/bolofofo.png'
					alt='Bolo decorado bolo fofos'
					width={400}
					height={400}
					className='animate-float anime w-full md:w-1/2 lg:w-full relative z-10'
				/>
				<div className='lg:w-60 lg:h-60 h-40 w-40 md:bg-orange-200 bg-orange-400 rounded-[4.5rem] absolute top-5 right-0 z-0'></div>
			</div>
		</section>
	)
}
