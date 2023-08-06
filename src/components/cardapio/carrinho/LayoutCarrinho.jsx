import HeaderCarrinho from './HeaderCarrinho'

export default function LayoutCarrinho({ children, className }) {
	return (
		<div className={`bg-orange-50 xl:w-7/12 w-10/12 m-auto ${className}`}>
			<HeaderCarrinho />
			{children}
		</div>
	)
}
