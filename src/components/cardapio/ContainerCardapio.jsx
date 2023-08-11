export default function ContainerCardapio({ children, className, id }) {
	return (
		<div id={id} className={`${styles} ${!!className ? className : 'grid'}`}>
			{children}
		</div>
	)
}

const styles = `py-8  grid-cols-2 gap-2 md:grid-cols-3 md:gap-4  lg:grid-cols-4`
