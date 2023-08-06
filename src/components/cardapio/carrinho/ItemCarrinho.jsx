import Image from 'next/image'

export default function ItemCarrinho() {
	return (
		<div className='bg-orange-50 flex gap-5 py-5 px-2'>
			<Image
				src={`/bolos/recheios/brigadeiro.jpg`}
				width={100}
				height={100}
				className='h-20 w-20 rounded-lg'
			/>
			<div className='flex-1'>
				<p className='font-semibold text-sm'>2kg Brigadeiro e amendoim</p>
				<p className='text-lg font-bold text-orange-400'>R$60,00</p>
			</div>
			<div className='text-lg my-auto flex'>
				<button className=' border-2 border-black rounded-l-xl px-2'>-</button>
				<span className=' border-y-2 border-black px-2'>1</span>
				<button className=' border-2 border-black rounded-r-xl px-2'>+</button>
			</div>
		</div>
	)
}
