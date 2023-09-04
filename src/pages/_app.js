import ProviderBolos from '@/components/contexts/ContextBolos'
import ProviderCarrinho from '@/components/contexts/ContextCarrinho'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
	],
})

export default function App({ Component, pageProps }) {
	return (
		<ProviderCarrinho>
			<ProviderBolos>
				<main className={`${poppins.variable} font-sans`}>
					<Component {...pageProps} />
				</main>
			</ProviderBolos>
		</ProviderCarrinho>
	)
}
