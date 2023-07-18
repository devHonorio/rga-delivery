export default function MiniButtonIcon({ icon, content }) {
	return (
		<button className='flex text-xs items-center bg-white py-2 px-3 rounded-2xl gap-2 shadow-md font-medium hover:bg-orange-400 md:text-base'>
			{icon}
			{content}
		</button>
	)
}
