import HeaderCarrinho from './HeaderCarrinho'

export default function LayoutCarrinho({ children, className, isActive }) {
	return (
		<div
			className={`bg-orange-50 xl:w-7/12 w-10/12 m-auto ${className} animate-fade-left animate-once animate-duration-[900ms] animate-ease-in-out`}>
			<HeaderCarrinho isActive={isActive} />
			{children}
		</div>
	)
}
