export default function Button({
	bgColor = 'white',
	color = 'black',
	content,
	onClick,
}) {
	return (
		<button
			onClick={onClick}
			className={`bg-${bgColor} text-${color} py-3 px-5 rounded-2xl font-semibold text-sm`}>
			{content}
		</button>
	)
}
