export default function Button({ content, nav }) {
	return (
		<button
			type='button'
			className={`bg-orange-400 rounded-2xl text-xl py-3 px-5`}
			onClick={nav}>
			{content}
		</button>
	)
}
