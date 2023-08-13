import Image from 'next/image'

import Informacoes from '../comum/Informacoes'
import ButtonSocial from '../comum/ButtonSocial'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import * as S from './styles'

export default function Footer() {
	return (
		<S.Footer>
			<S.ContainerLogo>
				<Image
					src='/logo.png'
					alt='Logo'
					width={100}
					height={100}
					className=' w-16'
				/>

				<span>RGA Doces e Salgados</span>
			</S.ContainerLogo>

			<S.InformacoesContainer>
				<Informacoes
					title='Endereço'
					description='Rua Papa João Paulo - 570, Água verde, Ampére - PR'
					href='https://goo.gl/maps/p7LuYRSPTTTNKHi96'
				/>

				<Informacoes
					title='Contato'
					description='(44) 9 9869204'
					href={'tel:5546988158699'}
				/>

				<Informacoes
					title='Instagram'
					description='@rga_doces_e_salgados'
					href={'https://www.instagram.com/rga_doces_e_salgados/'}
				/>
			</S.InformacoesContainer>

			<S.ContainerSocial>
				<ButtonSocial
					icon={<FaInstagram />}
					href={'https://www.instagram.com/rga_doces_e_salgados/'}
				/>
				<ButtonSocial
					icon={<FaFacebookF />}
					href={'https://www.facebook.com/profile.php?id=100057216799863'}
				/>
				<ButtonSocial
					icon={<FaWhatsapp />}
					href={'https://wa.me/5546988158699'}
				/>
			</S.ContainerSocial>
		</S.Footer>
	)
}
