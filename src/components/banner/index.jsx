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
		<section className={styles.container}>
			<div className={styles.containerTexto}>
				<h1 className={styles.h1Texto}>
					Faça seu
					<br /> pedido
					<span className={styles.destaqueFavorito}> favorito.</span>
				</h1>
				<p className={styles.paragrafo}>
					Aproveite nosso cardapio, escolha o que desejar e receba em sua casa
					de forma rápida e segura
				</p>

				<div className={styles.containerButtons}>
					<Button
						content='Ver cardápio'
						bgColor='orange-400'
						color='white'
						onClick={() => router.push('/Cardapio')}
					/>

					<ButtonIcon
						icon={
							<Phone
								strokeWidth={1.5}
								className={'h-5 w-5'}
								aling='flex-row-reverse'
							/>
						}
						content='(44) 9 9869204'
						href={'tel:5544998692094'}
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
						href='https://wa.me/5546988158699'
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
				<div className={styles.elemento}></div>
			</div>
		</section>
	)
}

const styles = {
	container: `grid lg:grid-cols-2 lg:py-10`,
	containerTexto: `flex flex-col justify-center xl:items-start`,
	h1Texto: `lg:text-5xl text-4xl font-medium animate-fade-right animate-once animate-duration-[900ms] animate-ease-in-out`,
	destaqueFavorito: `font-semibold text-orange-400`,
	paragrafo: `mt-4 text-gray-600 text-sm animate-fade animate-once animate-duration-[2s] animate-ease-in-out animate-normal`,
	containerButtons: `mt-8 flex gap-4`,
	containerSocial: `flex gap-4 mt-8 justify-center`,
	elemento: `lg:w-60 lg:h-60 h-40 w-40 md:bg-orange-200 bg-orange-400 rounded-[4.5rem] absolute top-5 right-0 z-0`,
}
