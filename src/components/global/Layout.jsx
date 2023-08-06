import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Layout({ children }) {
	return (
		<>
			<div className='xl:w-7/12 w-10/12 m-auto'>
				<ToastContainer autoClose={500} />
				<Header />

				{children}
			</div>

			<Footer />
		</>
	)
}
