import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
	return (
		<>
			<div className='  xl:w-7/12 w-9/12 m-auto'>
				<Header />

				{children}
			</div>

			<Footer />
		</>
	)
}
