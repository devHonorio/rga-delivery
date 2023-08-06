export default function Bolinha({ className = 'bg-white', content, divider }) {
	return (
		<div className='flex items-center '>
			<div
				className={`h-10 w-10 rounded-full flex justify-center items-center shadow-md ${className}`}>
				<p className='text-lg font-semibold text-gray-800'>{content}</p>
			</div>
			{divider && (
				<div
					className={`w-4 h-[2.9px]  ${
						divider === 'bg-orange-400' ? 'bg-orange-400' : 'bg-gray-200'
					}`}></div>
			)}
		</div>
	)
}
