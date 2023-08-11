import Image from 'next/image'

import Informacoes from '../comum/Informacoes'
import ButtonSocial from '../comum/ButtonSocial'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.containerLogo}>
				<Image
					src='/logo.png'
					alt='Logo'
					width={100}
					height={100}
					className=' w-16'
				/>

				<span className={styles.titleLogo}>RGA Doces e Salgados</span>
			</div>
			<div className={styles.containerInformacoes}>
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
			</div>

			<div className={styles.containerSocial}>
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
			</div>
		</footer>
	)
}

const styles = {
	footer: `py-16 bg-orange-100`,
	containerLogo: `flex flex-col justify-center items-center gap-4 mb-10`,
	titleLogo: `lg:text-2xl text-lg font-medium`,
	containerInformacoes: `flex lg:flex-row flex-col justify-around items-baseline lg:items-center  w-3/4 mx-auto gap-6`,
	containerSocial: `flex items-center justify-center gap-4 mt-20`,
}
