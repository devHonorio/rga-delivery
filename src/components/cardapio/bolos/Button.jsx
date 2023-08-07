export default function Button({ content, nav }) {
	return (
		<button
			type='button'
			className={`bg-orange-400 rounded-2xl text-md py-2 px-5`}
			onClick={(e) => {
				e.preventDefault()
				nav()
			}}>
			{content}
		</button>
	)
}
