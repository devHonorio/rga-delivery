import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Layout({ children }) {
	return (
		<>
			<div className={styles.container}>
				<ToastContainer autoClose={500} />
				<Header />

				{children}
			</div>

			<Footer />
		</>
	)
}

const styles = {
	container: `xl:w-7/12 w-10/12 m-auto`,
}
