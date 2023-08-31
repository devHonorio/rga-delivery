import Bolo from '@/core/Bolo/entities/Bolo'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import { createContext } from 'react'

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
const bolos = []
export const BolosContext = createContext(bolos)
export default function App({ Component, pageProps }) {
	return (
		<BolosContext.Provider value={bolos}>
			<main className={`${poppins.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</BolosContext.Provider>
	)
}
