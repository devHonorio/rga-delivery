export default function CardProduct({ title, value, image }) {
	return (
		<div className='bg-white flex flex-col basis-28 flex-grow  h-48  md:h-72 md:basis-52 p-3 rounded-3xl shadow-sm justify-between items-center hover:bg-orange-400 cursor-pointer md:flex-grow-0 '>
			<div className='bg-[url("/bolos/recheios/brigadeiro.jpg")] bg-cover w-full h-48 rounded-3xl mb-2 '></div>
			<h2 className='font-semibold text-xs md:text-base '>{title}</h2>
			<div className='flex '>
				<button className='hidden'>+</button>
				<button className='hidden'>-</button>
				<p className='font-semibold text-orange-500 text-xs md:text-base'>
					{value}
				</p>
			</div>
		</div>
	)
}
