export default function ButtonIcon({ icon, content, align }) {
	return (
		<button
			className={`flex items-center  bg-white md:py-2 md:px-3 rounded-2xl gap-3 shadow-md font-medium ${align}`}>
			<div className=' md:bg-orange-400 bg-white p-2 rounded-xl '>{icon}</div>
			<span className='hidden md:block md:text-sm'>{content}</span>
		</button>
	)
}
