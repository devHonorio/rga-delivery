export default function ContainerCardapio({ children, className }) {
	return (
		<div
			className={`py-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4  lg:grid-cols-4 ${className}`}>
			{children}
		</div>
	)
}
