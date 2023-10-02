export default function ContainerCardapio({ children, className, id }) {
	return (
		<div
			id={id}
			className={`py-8 lg:px-12  grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 ${
				!!className ? className : 'grid'
			}`}>
			{children}
		</div>
	)
}
