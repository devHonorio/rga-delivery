export default function Button({ content, onClick }) {
	return (
		<button
			type='button'
			className={`bg-orange-400 rounded-3xl text-2xl py-3 px-5`}>
			{content}
		</button>
	)
}
