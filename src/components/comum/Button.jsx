export default function Button({
	bgColor = 'white',
	color = 'black',
	content,
	onClick,
}) {
	return (
		<button
			onClick={onClick}
			className={`bg-${bgColor} text-${color} ${styles.button}`}>
			{content}
		</button>
	)
}

const styles = {
	button: `py-3 px-5 rounded-2xl font-semibold text-sm animate-fade-right animate-once animate-duration-[900ms] animate-ease-in-out`,
}
