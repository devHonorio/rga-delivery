import Image from 'next/image'
import Title from '../comum/Title'
import Informacoes from '../comum/Informacoes'
import ButtonSocial from '../comum/ButtonSocial'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className='py-16 bg-orange-100'>
			<div className='flex flex-col justify-center items-center gap-4 mb-10'>
				<Image
					src='/logo.png'
					alt='Logo'
					width={100}
					height={100}
					className=' w-16'
				/>

				<span className='lg:text-2xl text-lg font-medium'>
					RGA Doces e Salgados
				</span>
			</div>
			<div className='flex lg:flex-row flex-col justify-around items-baseline lg:items-center  w-3/4 mx-auto gap-6'>
				<Informacoes
					title='Endereço'
					description='Rua Papa João Paulo - 570, Água verde, Ampére - PR'
					href='https://goo.gl/maps/p7LuYRSPTTTNKHi96'
				/>

				<Informacoes title='Contato' description='(44) 9 9869204' />

				<Informacoes title='Instagram' description='@rga_doces_e_salgados' />
			</div>

			<div className='flex items-center justify-center gap-4 mt-20'>
				<ButtonSocial icon={<FaInstagram />} />
				<ButtonSocial icon={<FaFacebookF />} />
				<ButtonSocial icon={<FaWhatsapp />} />
			</div>
		</footer>
	)
}
