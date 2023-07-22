export default function MiniButtonIcon({ icon, content, onClick, action }) {
	return (
		<button
			onClick={() => onClick(content)}
			className={`flex text-xs items-center  py-2 px-3 rounded-2xl gap-2 shadow-md font-medium hover:bg-orange-400 md:text-base ${
				content === action ? 'bg-orange-400' : 'bg-white'
			}`}>
			{icon}

			{content}
		</button>
	)
}
