import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import * as S from './styles'
import Link from 'next/link'
import { Bag } from '../comum/Icons'
import FloatCarrinho from './FloatCarrinho'

export default function Layout({ children }) {
	return (
		<>
			<S.LayoutContainer>
				<ToastContainer autoClose={500} />
				<Header />

				{children}
			</S.LayoutContainer>
			<FloatCarrinho />
			<Footer />
		</>
	)
}
